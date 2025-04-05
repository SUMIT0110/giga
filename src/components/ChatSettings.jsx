import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { loadConfig, updateConfig } from '../utils/config';

// Component for chat settings panel
const ChatSettings = ({ isOpen, onClose }) => {
  const [apiKey, setApiKey] = useState('');
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(1024);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState('');

  // Load current settings when component mounts or when isOpen changes
  useEffect(() => {
    if (isOpen) {
      const config = loadConfig();
      setApiKey(config.gemini.apiKey || '');
      setTemperature(config.gemini.temperature || 0.7);
      setMaxTokens(config.gemini.maxOutputTokens || 1024);
      setIsSaved(false);
      setError('');
    }
  }, [isOpen]);

  // Handle saving settings
  const handleSave = () => {
    try {
      // Validate API key
      if (!apiKey.trim()) {
        setError('API key is required');
        return;
      }

      // Update configuration
      updateConfig('gemini.apiKey', apiKey.trim());
      updateConfig('gemini.temperature', parseFloat(temperature));
      updateConfig('gemini.maxOutputTokens', parseInt(maxTokens, 10));

      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    } catch (err) {
      setError('Failed to save settings: ' + err.message);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute bottom-16 right-0 w-80 bg-n-8 border border-n-6 rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Header */}
      <div className="bg-color-1 p-4 text-white flex justify-between items-center">
        <h3 className="font-bold">Chat Settings</h3>
        <button 
          onClick={onClose}
          className="text-white hover:text-n-3 transition-colors"
          aria-label="Close settings"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      {/* Settings form */}
      <div className="p-4 bg-n-7">
        {error && (
          <div className="mb-4 p-2 bg-color-3 bg-opacity-20 text-color-3 rounded-lg text-sm">
            {error}
          </div>
        )}
        
        {isSaved && (
          <div className="mb-4 p-2 bg-color-4 bg-opacity-20 text-color-4 rounded-lg text-sm">
            Settings saved successfully!
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-n-2 text-sm font-medium mb-1" htmlFor="apiKey">
            Gemini API Key <span className="text-color-3">*</span>
          </label>
          <input
            id="apiKey"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full p-2 rounded-lg bg-n-6 text-white border border-n-5 focus:outline-none focus:border-color-1"
            placeholder="Enter your Gemini API key"
          />
          <p className="mt-1 text-xs text-n-3">
            Get your API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-color-1 hover:underline">Google AI Studio</a>
          </p>
        </div>
        
        <div className="mb-4">
          <label className="block text-n-2 text-sm font-medium mb-1" htmlFor="temperature">
            Temperature: {temperature}
          </label>
          <input
            id="temperature"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-n-3">
            <span>More precise</span>
            <span>More creative</span>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-n-2 text-sm font-medium mb-1" htmlFor="maxTokens">
            Max Output Length: {maxTokens}
          </label>
          <input
            id="maxTokens"
            type="range"
            min="256"
            max="2048"
            step="128"
            value={maxTokens}
            onChange={(e) => setMaxTokens(e.target.value)}
            className="w-full"
          />
        </div>
        
        <button 
          onClick={handleSave}
          className="w-full bg-color-1 hover:bg-color-2 text-white p-2 rounded-lg transition-colors"
        >
          Save Settings
        </button>
      </div>
    </motion.div>
  );
};

export default ChatSettings;