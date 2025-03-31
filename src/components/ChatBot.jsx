import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, MinusIcon } from "../assets";

// Chatbot component for Giganxt Solutions website
const ChatBot = () => {
  // State for managing chat visibility and messages
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
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

  // Scroll to bottom of chat when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Toggle chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message when opening chat for the first time
      setTimeout(() => {
        setMessages([
          {
            text: "Hello! Welcome to Giganxt Solutions. How can I help you today?",
            sender: "bot",
            timestamp: new Date().toISOString()
          }
        ]);
      }, 500);
    }
  };

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message to chat
    const userMessage = {
      text: inputValue,
      sender: "user",
      timestamp: new Date().toISOString()
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Process the message and generate a response
    setTimeout(() => {
      const botResponse = generateResponse(inputValue);
      setMessages(prevMessages => [...prevMessages, {
        text: botResponse,
        sender: "bot",
        timestamp: new Date().toISOString()
      }]);
      setIsTyping(false);
    }, 1000);
  };

  // Generate a response based on user input
  const generateResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    
    // Check for service-related queries
    if (lowercaseInput.includes('service') || lowercaseInput.includes('offer')) {
      return `We offer the following services: ${companyInfo.services.join(', ')}. Would you like to know more about any specific service?`;
    }
    
    // Check for contact-related queries
    if (lowercaseInput.includes('contact') || lowercaseInput.includes('email') || lowercaseInput.includes('reach')) {
      return `You can contact us at ${companyInfo.contact.email} or visit us at ${companyInfo.contact.location}.`;
    }
    
    // Check for pricing-related queries
    if (lowercaseInput.includes('price') || lowercaseInput.includes('cost') || lowercaseInput.includes('pricing')) {
      return "Our pricing varies based on project requirements. Would you like to discuss your specific needs with our team?";
    }

    // Check for human support request
    if (lowercaseInput.includes('human') || lowercaseInput.includes('person') || lowercaseInput.includes('agent') || lowercaseInput.includes('support team')) {
      return "I'd be happy to connect you with our support team. Please email us at contact@giganxt.com with your query, and someone will get back to you shortly.";
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
    return "Thank you for your message. For more detailed information, please contact our team at contact@giganxt.com or explore our website further.";
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
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-16 right-0 w-80 sm:w-96 bg-n-8 border border-n-6 rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Chat header */}
          <div className="bg-color-1 p-4 text-white">
            <h3 className="font-bold">Giganxt Support</h3>
            <p className="text-sm opacity-80">Ask us anything about our services</p>
          </div>
          
          {/* Chat messages */}
          <div className="h-80 overflow-y-auto p-4 bg-n-7">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block p-3 rounded-2xl ${message.sender === 'user' ? 'bg-color-1 text-white' : 'bg-n-6 text-white'}`}
                >
                  {message.text}
                </div>
                <div className="text-xs text-n-3 mt-1">
                  {new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-left mb-4">
                <div className="inline-block p-3 rounded-2xl bg-n-6 text-white">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-n-3 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-n-3 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 rounded-full bg-n-3 animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-n-6 bg-n-8">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 rounded-l-lg bg-n-7 text-white border border-n-6 focus:outline-none focus:border-color-1"
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
    </div>
  );
};

export default ChatBot;