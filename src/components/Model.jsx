import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Model = ({ isVisible, handleClose, data }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Reset active tab when modal opens with new data
  useEffect(() => {
    if (isVisible) setActiveTab(0);
  }, [isVisible, data]);

  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isVisible) handleClose();
    };
    
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isVisible, handleClose]);

  if (!isVisible || !data) return null;

  // Define tabs based on available data
  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "process", label: "Process", icon: "⚙️" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop with blur effect */}
          <motion.div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          
          {/* Modal container */}
          <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
            <motion.div 
              className="w-full max-w-[90%] md:w-[700px] bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Header with image background */}
              <div className="relative h-32 bg-gradient-to-r from-color-1 to-color-5 overflow-hidden">
                {data.imageUrl && (
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src={data.imageUrl} 
                      alt={data.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-n-1/10 text-n-1 hover:bg-n-1/20 transition-colors shadow-lg"
                  onClick={handleClose}
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                
                {/* Title area */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-n-8/90 to-transparent">
                  <h1 className="text-3xl font-bold text-white">{data.title}</h1>
                </div>
              </div>
              
              {/* Tab navigation */}
              <div className="flex border-b border-n-6">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    className={`flex items-center px-6 py-3 font-medium transition-colors ${activeTab === index ? 'text-n-1 border-b-2 border-color-1' : 'text-n-3 hover:text-n-2'}`}
                    onClick={() => setActiveTab(index)}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
              
              {/* Content area */}
              <div className="p-6 text-n-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                {/* Overview tab */}
                {activeTab === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 text-lg leading-relaxed text-n-2">{data.text}</div>
                    
                    {/* Service icon if available */}
                    {data.iconUrl && (
                      <div className="flex justify-center my-8">
                        <div className="w-20 h-20 rounded-full bg-color-1/20 flex items-center justify-center p-4 shadow-[0_0_15px_rgba(172,106,255,0.5)]">
                          <img src={data.iconUrl} alt="Service icon" className="w-12 h-12" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
                
                {/* Process tab */}
                {activeTab === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-semibold mb-4 text-n-1">{data.head_1}</h2>
                    
                    {data.process && data.process.map((step, index) => (
                      <motion.div 
                        key={index}
                        className="mb-4 p-4 border border-n-6 rounded-lg bg-n-7/50 hover:bg-n-7 transition-colors shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-color-1 flex items-center justify-center mr-4 text-n-1 font-bold shadow-[0_0_10px_rgba(172,106,255,0.7)]">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-bold text-n-1 mb-1">{step.stage}</h3>
                            <p className="text-n-2">{step.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
              
              {/* Footer with action button */}
              <div className="p-4 border-t border-n-6 bg-n-8 flex justify-end">
                <button 
                  className="px-6 py-2 bg-color-1 hover:bg-color-1/90 text-n-1 rounded-lg transition-colors font-medium shadow-[0_0_15px_rgba(172,106,255,0.5)]"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};


export default Model;