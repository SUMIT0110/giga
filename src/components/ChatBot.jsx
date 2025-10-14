import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, MinusIcon, recording01, searchMd, homeSmile, file02 } from "../assets";
import { loadConfig, saveConfig } from '../utils/config';
import { 
  initGeminiApi, 
  generateGeminiResponse,
  formatConversationForStorage
} from '../utils/geminiApi';
import { processMessageForDisplay } from '../utils/messageFormatter';
import ChatHistory from './ChatHistory';

// Chatbot component for Giganxt Solutions website
const ChatBot = () => {
  // State for managing chat visibility and messages
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [geminiConfig, setGeminiConfig] = useState(null);
  const [error, setError] = useState('');
  const [quickReplies, setQuickReplies] = useState([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [currentConversationId, setCurrentConversationId] = useState(null);
  const [messageCategory, setMessageCategory] = useState('general'); // general, technical, support
  const [userId, setUserId] = useState(null); // Unique identifier for the user
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  // FAQ data from constants for quick responses
  const faqData = [
    {
      question: "What services does your startup offer?",
      answer: "We specialize in web development, app development (both iOS and Android), and AI integration to create innovative, scalable, and user-friendly solutions tailored to your business needs.",
    },
    {
      question: "How can AI integration benefit my business?",
      answer: "AI can automate repetitive tasks, enhance decision-making with data-driven insights, improve customer experiences with chatbots, and personalize services to boost engagement and efficiency.",
    },
    {
      question: "Do you work with startups or established businesses?",
      answer: "We work with businesses of all sizes, from startups looking to build their first platform to established enterprises aiming to enhance their digital capabilities.",
    },
    {
      question: "How long does it take to develop a web or mobile application?",
      answer: "The timeline depends on the project's complexity and requirements. A basic application may take 4–8 weeks, while more complex solutions can take several months.",
    },
  ];

  // Additional company information for the chatbot
  const companyInfo = {
    contact: {
      email: "contact@giganxt.com",
      location: "Chhatrapati Sambhaji Nagar, Maharashtra, India"
    },
    services: [
      "Web Development",
      "Mobile App Development",
      "AI Integration",
      "UI/UX Design",
      "Cloud Solutions"
    ]
  };

  // Quick reply suggestions based on common queries
  const suggestedQuickReplies = [
    { text: "Tell me about your services", category: "general" },
    { text: "How can I contact you?", category: "general" },
    { text: "What technologies do you use?", category: "technical" },
    { text: "Request a quote", category: "support" },
    { text: "Portfolio examples", category: "general" },
  ];

  // Initialize Gemini API configuration and load saved conversations
  useEffect(() => {
    const config = loadConfig();
    if (config.gemini && config.gemini.apiKey) {
      setGeminiConfig(initGeminiApi(config.gemini.apiKey));
    }
    
    // Generate or retrieve a unique user ID
    let userIdentifier = localStorage.getItem('chatbot_user_id');
    if (!userIdentifier) {
      userIdentifier = 'user_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
      localStorage.setItem('chatbot_user_id', userIdentifier);
    }
    setUserId(userIdentifier);
    
    // Load saved conversations from localStorage with user-specific key
    try {
      const savedConversations = localStorage.getItem(`chatConversations_${userIdentifier}`);
      if (savedConversations) {
        setConversations(JSON.parse(savedConversations));
      }
    } catch (err) {
      console.error('Error loading conversations:', err);
    }
  }, []);

  // Scroll to bottom of chat when new messages are added
  useEffect(() => {
    scrollToBottom();
    
    // Generate quick replies based on the last message
    if (messages.length > 0 && messages[messages.length - 1].sender === 'bot') {
      generateQuickReplies(messages[messages.length - 1].text);
    }
    
    // Save current conversation if it has messages
    if (messages.length > 0) {
      saveCurrentConversation();
    }
  }, [messages]);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 300);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Generate quick reply suggestions based on the last bot message
  const generateQuickReplies = (lastBotMessage) => {
    const lowercaseMessage = lastBotMessage.toLowerCase();
    
    // Filter quick replies based on context
    let contextualReplies = [];
    
    if (lowercaseMessage.includes('service') || lowercaseMessage.includes('offer')) {
      contextualReplies = [
        { text: "Tell me about web development", category: "technical" },
        { text: "Mobile app development details", category: "technical" },
        { text: "AI integration examples", category: "technical" },
      ];
    } else if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('email')) {
      contextualReplies = [
        { text: "Schedule a meeting", category: "support" },
        { text: "Request a callback", category: "support" },
      ];
    } else if (lowercaseMessage.includes('price') || lowercaseMessage.includes('cost')) {
      contextualReplies = [
        { text: "Get a custom quote", category: "support" },
        { text: "What factors affect pricing?", category: "general" },
      ];
    } else {
      // Default to suggested quick replies if no context match
      contextualReplies = suggestedQuickReplies.filter(reply => reply.category === messageCategory);
      
      // Add some general replies if we don't have enough context-specific ones
      if (contextualReplies.length < 3) {
        const generalReplies = suggestedQuickReplies.filter(reply => reply.category === 'general');
        contextualReplies = [...contextualReplies, ...generalReplies];
      }
    }
    
    // Limit to 3 quick replies
    setQuickReplies(contextualReplies.slice(0, 3));
  };

  // Save current conversation to localStorage with user-specific key
  const saveCurrentConversation = () => {
    if (messages.length === 0 || !userId) return;
    
    try {
      // Create a conversation object
      const firstUserMessage = messages.find(msg => msg.sender === 'user');
      const title = firstUserMessage ? firstUserMessage.text.substring(0, 30) + (firstUserMessage.text.length > 30 ? '...' : '') : 'New Conversation';
      
      const conversation = {
        id: currentConversationId || Date.now().toString(),
        title,
        messages: formatConversationForStorage(messages),
        timestamp: new Date().toISOString(),
        category: messageCategory,
        userId: userId // Add user ID to the conversation object
      };
      
      // Update conversations list
      let updatedConversations;
      if (currentConversationId) {
        // Update existing conversation
        updatedConversations = conversations.map(conv => 
          conv.id === currentConversationId ? conversation : conv
        );
      } else {
        // Add new conversation
        updatedConversations = [conversation, ...conversations];
        setCurrentConversationId(conversation.id);
      }
      
      // Limit to max conversations (from config)
      const config = loadConfig();
      const maxConversations = config.chat?.maxConversations || 20;
      if (updatedConversations.length > maxConversations) {
        updatedConversations = updatedConversations.slice(0, maxConversations);
      }
      
      setConversations(updatedConversations);
      localStorage.setItem(`chatConversations_${userId}`, JSON.stringify(updatedConversations));
    } catch (err) {
      console.error('Error saving conversation:', err);
    }
  };

  // Load a saved conversation
  const loadConversation = (conversationId) => {
    try {
      const conversation = conversations.find(conv => conv.id === conversationId);
      if (conversation) {
        setMessages(conversation.messages);
        setCurrentConversationId(conversation.id);
        setMessageCategory(conversation.category || 'general');
        setIsHistoryOpen(false);
      }
    } catch (err) {
      console.error('Error loading conversation:', err);
      setError('Failed to load conversation');
    }
  };

  // Delete a saved conversation
  const deleteConversation = (conversationId) => {
    try {
      const updatedConversations = conversations.filter(conv => conv.id !== conversationId);
      setConversations(updatedConversations);
      localStorage.setItem(`chatConversations_${userId}`, JSON.stringify(updatedConversations));
      
      // If the current conversation is deleted, clear the messages
      if (currentConversationId === conversationId) {
        startNewConversation();
      }
    } catch (err) {
      console.error('Error deleting conversation:', err);
      setError('Failed to delete conversation');
    }
  };

  // Toggle chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message when opening chat for the first time
      setTimeout(() => {
        setMessages([
          {
            text: "Hello! I'm the Giganxt Solutions virtual assistant. How can I assist you today?",
            sender: "bot",
            timestamp: new Date().toISOString(),
            category: "general"
          }
        ]);
      }, 500);
    }
  };

  // Start a new conversation
  const startNewConversation = () => {
    setMessages([{
      text: "Hello! I'm the Giganxt Solutions virtual assistant. I can help you with information about our web development, app development, and AI integration services. How can I assist you today?",
      sender: "bot",
      timestamp: new Date().toISOString(),
      category: "general"
    }]);
    setCurrentConversationId(null);
    setMessageCategory('general');
    setError('');
    setQuickReplies(suggestedQuickReplies.filter(reply => reply.category === 'general').slice(0, 3));
  };

  // Handle sending a message
  const handleSendMessage = async (e, quickReplyText) => {
    if (e) e.preventDefault();
    
    const messageText = quickReplyText || inputValue;
    if (messageText.trim() === '') return;

    // Determine message category based on content
    let category = 'general';
    const lowercaseText = messageText.toLowerCase();
    
    if (lowercaseText.includes('code') || lowercaseText.includes('develop') || 
        lowercaseText.includes('programming') || lowercaseText.includes('technology')) {
      category = 'technical';
    } else if (lowercaseText.includes('help') || lowercaseText.includes('support') || 
               lowercaseText.includes('issue') || lowercaseText.includes('problem')) {
      category = 'support';
    }
    
    setMessageCategory(category);

    // Add user message to chat
    const userMessage = {
      text: messageText,
      sender: "user",
      timestamp: new Date().toISOString(),
      category
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setError('');
    setQuickReplies([]);

    try {
      // Use Gemini API if configured, otherwise use local response generation
      if (geminiConfig) {
        const response = await generateGeminiResponse(geminiConfig, messageText, messages);
        
        if (response.error) {
          // Handle quota exceeded errors specially
          if (response.quotaExceeded) {
            setError(`${response.error} Our AI assistant will be back shortly.`);
            // Automatically fall back to local response after a brief delay
            setTimeout(() => {
              setError('');
              const localResponse = generateLocalResponse(messageText);
              const formattedResponse = processMessageForDisplay(localResponse, true);
              setMessages(prevMessages => [...prevMessages, {
                text: formattedResponse + '\n\n*Note: This response was generated locally while our AI service recovers.*',
                sender: "bot",
                timestamp: new Date().toISOString(),
                category
              }]);
              setIsTyping(false);
            }, 2000);
            return;
          } else {
            setError(`AI Error: ${response.error}`);
            setIsTyping(false);
            return;
          }
        }
        
        // Add typing animation delay based on response length
        const typingDelay = Math.min(1000 + response.text.length / 10, 3000);
        
        setTimeout(() => {
          // Process the response text to ensure proper formatting and branding
          const formattedText = processMessageForDisplay(response.text, true);
          
          setMessages(prevMessages => [...prevMessages, {
            text: formattedText,
            sender: "bot",
            timestamp: new Date().toISOString(),
            category
          }]);
          setIsTyping(false);
        }, typingDelay);
      } else {
        // Fallback to local response generation if Gemini API is not configured
        setTimeout(() => {
          const botResponse = generateLocalResponse(messageText);
          // Process the local response to ensure consistent formatting and branding
          const formattedResponse = processMessageForDisplay(botResponse, true);
          setMessages(prevMessages => [...prevMessages, {
            text: formattedResponse,
            sender: "bot",
            timestamp: new Date().toISOString(),
            category
          }]);
          setIsTyping(false);
        }, 1000);
      }
    } catch (err) {
      console.error('Error generating response:', err);
      setError('Failed to generate response. Please try again.');
      setIsTyping(false);
    }
  };

  // Handle quick reply click
  const handleQuickReplyClick = (replyText) => {
    handleSendMessage(null, replyText);
  };

  // Generate a local response based on user input (fallback when Gemini API is not available)
  const generateLocalResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    
    // Check for service-related queries
    if (lowercaseInput.includes('service') || lowercaseInput.includes('offer')) {
      return `At Giganxt Solutions, we specialize in the following services:

• Web Development: Custom websites, e-commerce platforms, and web applications
• Mobile App Development: Native and cross-platform apps for iOS and Android
• AI Integration: Implementing AI solutions to enhance your business processes
• UI/UX Design: Creating intuitive and engaging user experiences
• Cloud Solutions: Scalable and secure cloud infrastructure

Would you like more details about any specific service?`;
    }
    
    // Check for contact-related queries
    if (lowercaseInput.includes('contact') || lowercaseInput.includes('email') || lowercaseInput.includes('reach')) {
      return `You can reach the Giganxt Solutions team at ${companyInfo.contact.email} or visit our office in ${companyInfo.contact.location}. Our team typically responds to inquiries within 24 hours. Would you like to discuss a specific project or have questions about our services?`;
    }
    
    // Check for pricing-related queries
    if (lowercaseInput.includes('price') || lowercaseInput.includes('cost') || lowercaseInput.includes('pricing')) {
      return "Giganxt Solutions offers customized pricing based on your specific project requirements. Factors that influence pricing include project complexity, timeline, features needed, and ongoing support requirements. Would you like to discuss your project needs with our team to get a personalized quote?";
    }

    // Check for human support request
    if (lowercaseInput.includes('human') || lowercaseInput.includes('person') || lowercaseInput.includes('agent') || lowercaseInput.includes('support team')) {
      return "I'd be happy to connect you with the Giganxt Solutions support team. Please email your query to contact@giganxt.com with details about your needs, and a team member will get back to you within 24 hours. Is there anything specific you'd like me to include in your support request?";
    }
    
    // Check for web development queries
    if (lowercaseInput.includes('web') || lowercaseInput.includes('website')) {
      return "Giganxt Solutions excels in creating custom web solutions that align with your business goals. Our web development services include responsive design, e-commerce platforms, content management systems, progressive web apps, and performance optimization. Each website we build is designed to provide an exceptional user experience while achieving your business objectives.";
    }
    
    // Check for mobile app queries
    if (lowercaseInput.includes('app') || lowercaseInput.includes('mobile')) {
      return "The mobile app development team at Giganxt Solutions creates native and cross-platform applications for iOS and Android. We focus on delivering intuitive user experiences, robust functionality, and seamless performance. Our development process includes thorough planning, design, development, testing, and post-launch support to ensure your app succeeds in the competitive mobile market.";
    }
    
    // Check for AI queries
    if (lowercaseInput.includes('ai') || lowercaseInput.includes('artificial intelligence') || lowercaseInput.includes('machine learning')) {
      return "Giganxt Solutions helps businesses leverage AI technologies to enhance operations and create new opportunities. Our AI integration services include chatbots, recommendation systems, data analysis, process automation, and custom AI solutions. We work closely with you to identify where AI can add the most value to your business and implement solutions that deliver measurable results.";
    }
    
    // Check against FAQ data
    for (const faq of faqData) {
      const questionWords = faq.question.toLowerCase().split(' ');
      const matchCount = questionWords.filter(word => lowercaseInput.includes(word)).length;
      
      // If the input matches enough words from a question, return its answer
      if (matchCount >= 3 || questionWords.some(word => word.length > 5 && lowercaseInput.includes(word))) {
        return faq.answer;
      }
    }
    
    // Default response if no specific match is found
    return "Thank you for reaching out to Giganxt Solutions. I'm here to help with information about our web development, app development, and AI integration services. For more detailed information about your specific needs, please contact our team at contact@giganxt.com or let me know what you're looking for, and I'll do my best to assist you.";
  };

  // Get icon based on message category
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'technical':
        return file02;
      case 'support':
        return recording01;
      default:
        return homeSmile;
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat toggle button */}
      <button 
        onClick={toggleChat}
        className="bg-color-1 hover:bg-color-2 text-white rounded-full p-4 shadow-lg transition-all duration-300"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <img src={MinusIcon} alt="Close chat" width={24} height={24} />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-n-8 border border-n-6 rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Chat header */}
            <div className="bg-color-1 p-4 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold">Giganxt Support</h3>
                <p className="text-sm opacity-80">Ask us anything about our services</p>
              </div>
              <div className="flex space-x-2">
                {/* History button */}
                <button 
                  onClick={() => {
                    setIsHistoryOpen(!isHistoryOpen);
                  }}
                  className="text-white hover:text-n-3 transition-colors p-1"
                  title="Chat history"
                  aria-label="View chat history"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8v4l3 3"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </button>
                
                {/* New chat button */}
                <button 
                  onClick={startNewConversation}
                  className="text-white hover:text-n-3 transition-colors p-1"
                  title="New conversation"
                  aria-label="Start new conversation"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* API key missing warning */}
            {!geminiConfig && (
              <div className="bg-color-3 bg-opacity-20 text-color-3 p-2 text-sm text-center">
                AI responses are currently unavailable. Please contact the administrator.
              </div>
            )}
            
            {/* Error message */}
            {error && (
              <div className="bg-color-3 bg-opacity-20 text-color-3 p-2 text-sm text-center">
                {error}
              </div>
            )}
            
            {/* Chat messages */}
            <div className="h-80 overflow-y-auto p-4 bg-n-7">
              {messages.map((message, index) => (
                <motion.div 
                  key={index} 
                  className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index % 3) }}
                >
                  <div className="flex items-center mb-1">
                    {message.sender === 'bot' && (
                      <img 
                        src={getCategoryIcon(message.category)} 
                        alt="Category" 
                        className="w-4 h-4 mr-1" 
                      />
                    )}
                    <div className="text-xs text-n-3">
                      {new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </div>
                  </div>
                  <div 
                    className={`inline-block p-3 rounded-2xl ${message.sender === 'user' ? 'bg-color-1 text-white' : 'bg-n-6 text-white'}`}
                  >
                    {message.sender === 'bot' ? (
                      <div className="whitespace-pre-line">
                        {message.text.split('\n').map((paragraph, i) => (
                          <p key={i} className={i > 0 ? 'mt-2' : ''}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : (
                      message.text
                    )}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div 
                  className="text-left mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-block p-3 rounded-2xl bg-n-6 text-white">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-n-3 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-n-3 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 rounded-full bg-n-3 animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Quick replies */}
            {quickReplies.length > 0 && !isTyping && (
              <div className="px-4 py-2 bg-n-8 border-t border-n-6">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      className="px-3 py-1 text-sm bg-n-6 hover:bg-n-5 text-white rounded-full transition-colors"
                      onClick={() => handleQuickReplyClick(reply.text)}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      {reply.text}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Chat input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-n-6 bg-n-8">
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 rounded-l-lg bg-n-7 text-white border border-n-6 focus:outline-none focus:border-color-1"
                  ref={inputRef}
                />
                <button 
                  type="submit" 
                  className="bg-color-1 hover:bg-color-2 text-white p-2 rounded-r-lg transition-colors"
                  disabled={inputValue.trim() === ''}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* History panel */}
      <ChatHistory 
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        conversations={conversations}
        onSelectConversation={loadConversation}
        onDeleteConversation={deleteConversation}
      />
    </div>
  );
};

export default ChatBot;