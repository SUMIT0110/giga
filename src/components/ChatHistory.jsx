import React from 'react';
import { motion } from 'framer-motion';

// Component to display chat history sidebar
const ChatHistory = ({ conversations, onSelectConversation, onDeleteConversation, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="absolute bottom-16 right-full mr-2 w-64 bg-n-8 border border-n-6 rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Header */}
      <div className="bg-color-1 p-4 text-white flex justify-between items-center">
        <h3 className="font-bold">Chat History</h3>
        <button 
          onClick={onClose}
          className="text-white hover:text-n-3 transition-colors"
          aria-label="Close history"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      {/* Conversation list */}
      <div className="h-80 overflow-y-auto p-2 bg-n-7">
        {conversations.length === 0 ? (
          <div className="text-center p-4 text-n-3">
            <p>No saved conversations yet</p>
          </div>
        ) : (
          conversations.map((conversation) => (
            <div 
              key={conversation.id} 
              className="mb-2 p-3 rounded-xl bg-n-6 hover:bg-n-5 cursor-pointer transition-colors group relative"
              onClick={() => onSelectConversation(conversation.id)}
            >
              <h4 className="font-medium text-white truncate">{conversation.title}</h4>
              <p className="text-xs text-n-3 truncate">
                {new Date(conversation.timestamp).toLocaleDateString()}
              </p>
              
              {/* Delete button */}
              <button
                className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 text-n-3 hover:text-color-3 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteConversation(conversation.id);
                }}
                aria-label="Delete conversation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default ChatHistory;