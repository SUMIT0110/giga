// Utility functions for formatting chat messages

/**
 * Format a message from Gemini API to ensure proper structure and readability
 * @param {string} text - The raw text from Gemini API
 * @return {string} - Formatted text with proper paragraphs and styling
 */
export const formatGeminiResponse = (text) => {
  if (!text) return '';
  
  // Remove excessive newlines (more than 2 consecutive)
  let formatted = text.replace(/\n{3,}/g, '\n\n');
  
  // Ensure paragraphs have proper spacing
  formatted = formatted.replace(/([^\n])\n([^\n])/g, '$1\n\n$2');
  
  // Format bullet points consistently and remove asterisks used for emphasis
  formatted = formatted.replace(/^\s*[-*]\s+/gm, '• ');
  formatted = formatted.replace(/\*([^*\n]+)\*/g, '$1'); // Remove emphasis asterisks
  
  // Format numbered lists consistently
  formatted = formatted.replace(/^\s*(\d+)\s*[.)]\s+/gm, '$1. ');
  
  // Ensure proper spacing after punctuation
  formatted = formatted.replace(/([.!?])([A-Za-z])/g, '$1 $2');
  
  // Limit paragraph length (split very long paragraphs)
  formatted = formatted.replace(/(\S.{200,}?)\s+(?=\S)/g, '$1\n\n');
  
  return formatted;
};

/**
 * Add Giganxt Solutions branding to responses
 * @param {string} text - The original response text
 * @return {string} - Text with consistent branding
 */
export const addGiganxtBranding = (text) => {
  // Replace generic references with branded ones
  const brandingReplacements = [
    { pattern: /\b(I am|I'm) (an AI|a language model|an assistant)\b/gi, replacement: "I'm Giganxt's AI assistant" },
    { pattern: /\b(contact us|reach out|get in touch)\b/gi, replacement: "contact Giganxt Solutions" },
    { pattern: /\b(our team|our experts)\b/gi, replacement: "the Giganxt team" },
    { pattern: /\b(we offer|we provide)\b/gi, replacement: "Giganxt Solutions offers" },
  ];
  
  let brandedText = text;
  brandingReplacements.forEach(({ pattern, replacement }) => {
    brandedText = brandedText.replace(pattern, replacement);
  });
  
  return brandedText;
};

/**
 * Process a message for display in the chat
 * @param {string} text - The raw message text
 * @param {boolean} isBot - Whether the message is from the bot
 * @return {string} - Processed message ready for display
 */
export const processMessageForDisplay = (text, isBot = false) => {
  if (!isBot) return text; // Only process bot messages
  
  // Format the response and add branding
  let processedText = formatGeminiResponse(text);
  processedText = addGiganxtBranding(processedText);
  
  return processedText;
};