// Utility functions for interacting with Google's Gemini API

// Rate limiting configuration
const RATE_LIMIT = {
  maxRequestsPerMinute: 15, // Conservative limit to avoid quota issues
  requestQueue: [],
  lastRequestTime: 0,
  isProcessing: false
};

// Request queue for managing API calls
const requestQueue = [];
let isProcessingQueue = false;

// Function to initialize the Gemini API with your API key
export const initGeminiApi = (apiKey) => {
  if (!apiKey) {
    console.error('Gemini API key is required');
    return null;
  }
  
  return {
    apiKey,
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
  };
};

// Function to check if we can make a request (rate limiting)
const canMakeRequest = () => {
  const now = Date.now();
  const oneMinuteAgo = now - 60000;
  
  // Remove requests older than 1 minute
  RATE_LIMIT.requestQueue = RATE_LIMIT.requestQueue.filter(time => time > oneMinuteAgo);
  
  // Check if we're under the rate limit
  return RATE_LIMIT.requestQueue.length < RATE_LIMIT.maxRequestsPerMinute;
};

// Function to add request to rate limit tracking
const trackRequest = () => {
  RATE_LIMIT.requestQueue.push(Date.now());
};

// Function to wait for rate limit reset
const waitForRateLimit = () => {
  return new Promise(resolve => {
    const oldestRequest = Math.min(...RATE_LIMIT.requestQueue);
    const waitTime = Math.max(0, 60000 - (Date.now() - oldestRequest));
    setTimeout(resolve, waitTime + 1000); // Add 1 second buffer
  });
};

// Function to handle exponential backoff for retries
const exponentialBackoff = (attempt) => {
  const baseDelay = 1000; // 1 second
  const maxDelay = 30000; // 30 seconds
  const delay = Math.min(baseDelay * Math.pow(2, attempt), maxDelay);
  return new Promise(resolve => setTimeout(resolve, delay));
};

// Function to generate a response from Gemini API with rate limiting and retry logic
export const generateGeminiResponse = async (geminiConfig, prompt, conversationHistory = [], maxRetries = 3) => {
  if (!geminiConfig || !geminiConfig.apiKey) {
    console.error('Gemini configuration is missing or invalid');
    return { error: 'API configuration error' };
  }

  // Check rate limit before making request
  if (!canMakeRequest()) {
    console.log('Rate limit reached, waiting...');
    await waitForRateLimit();
  }

  let lastError = null;
  
  // Retry logic with exponential backoff
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      // Track this request for rate limiting
      trackRequest();

      // Add delay between attempts (except for first attempt)
      if (attempt > 0) {
        console.log(`Retrying API call, attempt ${attempt + 1}/${maxRetries}`);
        await exponentialBackoff(attempt - 1);
      }
    // Load config to get system prompt
    const config = await import('../utils/config').then(module => module.loadConfig());
    const systemPrompt = config.chat?.defaultSystemPrompt || 'You are the official AI assistant for Giganxt Solutions';
    
    // Add context about Giganxt's services to help keep responses relevant
    const contextPrompt = `
      Giganxt Solutions specializes in:
      1. Web Development: Custom websites, web applications, e-commerce solutions
      2. Mobile App Development: Native iOS/Android apps and cross-platform solutions
      3. AI Integration: Chatbots, recommendation systems, data analysis
      4. UI/UX Design: User-centered design, wireframing, prototyping
      5. Cloud Solutions: AWS, Google Cloud, Azure deployments
      
      Keep responses focused on these services. Be concise and relevant.
    `;
    
    // Prepare the conversation history in the format expected by Gemini API
    const messages = [];
    
    // Add system prompt as the first message
    messages.push({
      role: 'model',
      parts: [{ text: systemPrompt + '\n\n' + contextPrompt }]
    });
    
    // Add conversation history
    conversationHistory.forEach(msg => {
      messages.push({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      });
    });

    // Add the current prompt with a reminder to stay relevant
    messages.push({
      role: 'user',
      parts: [{ text: prompt + '\n\nRemember to provide a concise, relevant response about Giganxt Solutions.' }]
    });

    // Prepare the request payload
    const payload = {
      contents: messages,
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 800, // Reduced to encourage more concise responses
      },
      safetySettings: [
        {
          category: 'HARM_CATEGORY_HARASSMENT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE'
        },
        {
          category: 'HARM_CATEGORY_HATE_SPEECH',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE'
        },
        {
          category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE'
        },
        {
          category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE'
        }
      ]
    };

    // Make the API request
    const response = await fetch(`${geminiConfig.baseUrl}?key=${geminiConfig.apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.error?.message || 'Failed to get response from Gemini';
        
        // Handle specific error types
        if (response.status === 429 || errorMessage.includes('quota') || errorMessage.includes('rate limit')) {
          console.warn(`Quota/Rate limit error (attempt ${attempt + 1}/${maxRetries}):`, errorMessage);
          lastError = { error: errorMessage, retryable: true };
          
          // If this is the last attempt, return a user-friendly error
          if (attempt === maxRetries - 1) {
            return { 
              error: 'The AI service is currently experiencing high demand. Please wait a moment and try again.',
              quotaExceeded: true 
            };
          }
          
          // Wait longer for quota errors
          await exponentialBackoff(attempt + 1);
          continue; // Retry
        } else {
          // Non-retryable error
          console.error('Gemini API error:', errorData);
          return { error: errorMessage };
        }
      }

    const data = await response.json();
    
    // Extract the generated text from the response
    if (data.candidates && data.candidates.length > 0 && 
        data.candidates[0].content && 
        data.candidates[0].content.parts && 
        data.candidates[0].content.parts.length > 0) {
      let responseText = data.candidates[0].content.parts[0].text;
      
      // Post-process the response to ensure it's concise and well-formatted
      // Remove any generic introductions that don't add value
      responseText = responseText.replace(/^(Sure|Certainly|Of course|I'd be happy to|Let me|Absolutely)[,.!]\s+/i, '');
      
      // Remove any lengthy conclusions
      responseText = responseText.replace(/\n\n(In conclusion|To summarize|If you have any|Feel free to)[^]*$/i, '');
      
      // Ensure the response isn't too long (max ~4 paragraphs)
      const paragraphs = responseText.split('\n\n');
      if (paragraphs.length > 5) {
        responseText = paragraphs.slice(0, 4).join('\n\n');
      }
      
        return { text: responseText };
      } else {
        console.error('Unexpected response format from Gemini API:', data);
        return { error: 'Invalid response format from Gemini' };
      }
    } catch (error) {
      console.error(`Error calling Gemini API (attempt ${attempt + 1}/${maxRetries}):`, error);
      lastError = { error: error.message || 'Failed to communicate with Gemini API' };
      
      // If this is the last attempt, return the error
      if (attempt === maxRetries - 1) {
        break;
      }
      
      // Wait before retrying
      await exponentialBackoff(attempt);
    }
  }
  
  // If we get here, all retries failed
  return lastError || { error: 'Failed to communicate with Gemini API after multiple attempts' };
};

// Function to format conversation for storage
export const formatConversationForStorage = (messages) => {
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return null;
  }
  
  // Get the first few words of the first user message as the title
  const firstUserMessage = messages.find(msg => msg.sender === 'user');
  let title = 'New Conversation';
  
  if (firstUserMessage) {
    const words = firstUserMessage.text.split(' ');
    title = words.slice(0, 3).join(' ');
    if (words.length > 3) title += '...';
  }
  
  return {
    id: Date.now().toString(),
    title,
    timestamp: new Date().toISOString(),
    messages: [...messages],
  };
};

// Function to save conversation to local storage
export const saveConversation = (conversation) => {
  try {
    const savedConversations = JSON.parse(localStorage.getItem('chatConversations')) || [];
    savedConversations.push(conversation);
    localStorage.setItem('chatConversations', JSON.stringify(savedConversations));
    return true;
  } catch (error) {
    console.error('Error saving conversation:', error);
    return false;
  }
};

// Function to get all saved conversations
export const getSavedConversations = () => {
  try {
    return JSON.parse(localStorage.getItem('chatConversations')) || [];
  } catch (error) {
    console.error('Error retrieving conversations:', error);
    return [];
  }
};

// Function to get a specific conversation by ID
export const getConversationById = (conversationId) => {
  try {
    const conversations = getSavedConversations();
    return conversations.find(conv => conv.id === conversationId) || null;
  } catch (error) {
    console.error('Error retrieving conversation:', error);
    return null;
  }
};

// Function to delete a conversation
export const deleteConversation = (conversationId) => {
  try {
    const conversations = getSavedConversations();
    const updatedConversations = conversations.filter(conv => conv.id !== conversationId);
    localStorage.setItem('chatConversations', JSON.stringify(updatedConversations));
    return true;
  } catch (error) {
    console.error('Error deleting conversation:', error);
    return false;
  }
};

// Function to get current API usage statistics
export const getApiUsageStats = () => {
  const now = Date.now();
  const oneMinuteAgo = now - 60000;
  const oneHourAgo = now - 3600000;
  
  // Clean up old requests
  RATE_LIMIT.requestQueue = RATE_LIMIT.requestQueue.filter(time => time > oneHourAgo);
  
  const requestsLastMinute = RATE_LIMIT.requestQueue.filter(time => time > oneMinuteAgo).length;
  const requestsLastHour = RATE_LIMIT.requestQueue.length;
  
  return {
    requestsLastMinute,
    requestsLastHour,
    maxRequestsPerMinute: RATE_LIMIT.maxRequestsPerMinute,
    canMakeRequest: canMakeRequest(),
    timeUntilNextRequest: canMakeRequest() ? 0 : Math.max(0, 60000 - (now - Math.min(...RATE_LIMIT.requestQueue)))
  };
};

// Function to reset rate limiting (for testing or manual reset)
export const resetRateLimit = () => {
  RATE_LIMIT.requestQueue = [];
  console.log('Rate limit reset');
};