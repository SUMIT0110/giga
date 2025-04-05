// Configuration settings for the application

// Default configuration
const defaultConfig = {
  // Gemini API settings
  gemini: {
    apiKey: 'AIzaSyD8PvVv9Zy8Gx_eagWugC_Pbj31h1J_24g', // User needs to provide their own API key
    modelName: 'gemini-2.0-flash',
    maxOutputTokens: 1024,
    temperature: 0.7,
  },
  // Chat settings
  chat: {
    maxHistoryLength: 50, // Maximum number of messages to keep in history
    maxConversations: 20, // Maximum number of saved conversations
    defaultSystemPrompt: 'You are the official AI assistant for Giganxt Solutions, a company that specializes in web development, app development, and AI integration. Follow these guidelines strictly:\n\n1. RELEVANCE: Only provide information directly related to Giganxt Solutions\'s services and expertise. If asked about unrelated topics, politely redirect to our services.\n\n2. CONCISENESS: Keep responses brief and to the point. Limit to 3-4 paragraphs maximum.\n\n3. FORMATTING: Use clean formatting with proper paragraphs. Use bullet points sparingly and only when listing specific items. Never use asterisks (*) for emphasis - use clear, direct language instead.\n\n4. SERVICES FOCUS: Our core services are web development, mobile app development (iOS/Android), AI integration, UI/UX design, and cloud solutions. Always relate answers back to these services.\n\n5. TONE: Maintain a professional, friendly tone that represents Giganxt Solutions accurately. Refer to the company as "Giganxt Solutions" or "we at Giganxt".\n\nAvoid lengthy, generic responses that could apply to any company. Each response should be specific to Giganxt Solutions and directly address the user\'s query.'
  }
};

// Load configuration from localStorage if available
export const loadConfig = () => {
  try {
    const savedConfig = localStorage.getItem('appConfig');
    if (savedConfig) {
      return { ...defaultConfig, ...JSON.parse(savedConfig) };
    }
  } catch (error) {
    console.error('Error loading configuration:', error);
  }
  return { ...defaultConfig };
};

// Save configuration to localStorage
export const saveConfig = (config) => {
  try {
    localStorage.setItem('appConfig', JSON.stringify(config));
    return true;
  } catch (error) {
    console.error('Error saving configuration:', error);
    return false;
  }
};

// Update specific configuration values
export const updateConfig = (path, value) => {
  const config = loadConfig();
  const pathParts = path.split('.');
  
  let current = config;
  for (let i = 0; i < pathParts.length - 1; i++) {
    if (!current[pathParts[i]]) {
      current[pathParts[i]] = {};
    }
    current = current[pathParts[i]];
  }
  
  current[pathParts[pathParts.length - 1]] = value;
  return saveConfig(config);
};

// Get a specific configuration value
export const getConfigValue = (path) => {
  const config = loadConfig();
  const pathParts = path.split('.');
  
  let current = config;
  for (const part of pathParts) {
    if (current === undefined || current === null) {
      return undefined;
    }
    current = current[part];
  }
  
  return current;
};

export default loadConfig();