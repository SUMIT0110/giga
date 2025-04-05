// Utility functions for interacting with Google's Gemini API

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

// Function to generate a response from Gemini API
export const generateGeminiResponse = async (geminiConfig, prompt, conversationHistory = []) => {
  if (!geminiConfig || !geminiConfig.apiKey) {
    console.error('Gemini configuration is missing or invalid');
    return { error: 'API configuration error' };
  }

  try {
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
      console.error('Gemini API error:', errorData);
      return { error: errorData.error?.message || 'Failed to get response from Gemini' };
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
    console.error('Error calling Gemini API:', error);
    return { error: error.message || 'Failed to communicate with Gemini API' };
  }
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