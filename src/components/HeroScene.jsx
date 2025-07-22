import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ScrollParallax } from 'react-just-parallax';

const HeroScene = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  const rotateVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.7 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className="relative w-full max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
      <motion.div 
        className="relative z-10 aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490] overflow-hidden rounded-2xl bg-gradient-to-br from-n-8/80 to-n-12/80 backdrop-blur-sm border border-n-1/10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* 3D Grid Floor */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#88E5BE" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#DD734F" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#grid-gradient)" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-purple-500/40 to-blue-500/40 rounded-lg backdrop-blur-md"
          variants={floatVariants}
          initial="initial"
          animate="animate"
        />
        
        <motion.div 
          className="absolute top-1/3 right-1/4 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r from-amber-500/30 to-pink-500/30 rounded-full backdrop-blur-md"
          variants={pulseVariants}
          initial="initial"
          animate="animate"
        />

        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-12 h-12 md:w-20 md:h-20 border-2 border-teal-500/50 rounded-lg"
          variants={rotateVariants}
          initial="initial"
          animate="animate"
        />

        {/* Central Element */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 flex items-center justify-center"
          variants={itemVariants}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div 
              className="relative z-10 w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-md flex items-center justify-center border border-white/10"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              <motion.div 
                className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-indigo-500/40 to-purple-700/40 backdrop-blur-md flex items-center justify-center"
                animate={{
                  rotate: -360
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                <motion.div 
                  className="text-center"
                  variants={itemVariants}
                >
                  <h3 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">GIGANXT</h3>
                  <p className="text-xs md:text-sm text-white/70 mt-2">Digital Innovation</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Code Lines */}
        <motion.div 
          className="absolute bottom-8 left-8 right-8 h-20 overflow-hidden rounded-lg bg-n-10/30 backdrop-blur-sm border border-n-1/10"
          variants={itemVariants}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -200 }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: 'linear',
              repeatType: 'loop' 
            }}
            className="text-xs md:text-sm font-mono text-green-400/80 p-4"
          >
            <div className="mb-1">// GIGANXT Digital Innovation</div>
            <div className="mb-1">// Web Development</div>
            <div className="mb-1">// App Development</div>
            <div className="mb-1">// Software Solutions</div>
            <div className="mb-1">// AI Innovation</div>
            <div className="mb-1">// Machine Learning</div>
            <div className="mb-1">// Data Science</div>
            <div className="mb-1">// Empowering Your Business</div>
            <div className="mb-1">// For The Digital Future</div>
            <div className="mb-1">// www.giganxt.com</div>
          </motion.div>
        </motion.div>

        {/* Tech Icons */}
        <ScrollParallax isAbsolutelyPositioned>
          <motion.div 
            className="absolute left-4 md:left-8 top-1/4 px-3 py-2 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-xl hidden md:flex items-center space-x-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs font-medium text-white">Web Dev</span>
          </motion.div>
        </ScrollParallax>

        <ScrollParallax isAbsolutelyPositioned>
          <motion.div 
            className="absolute right-4 md:right-8 top-1/3 px-3 py-2 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-xl hidden md:flex items-center space-x-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-white">AI Solutions</span>
          </motion.div>
        </ScrollParallax>

        <ScrollParallax isAbsolutelyPositioned>
          <motion.div 
            className="absolute right-4 md:right-8 bottom-1/4 px-3 py-2 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-xl hidden md:flex items-center space-x-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs font-medium text-white">Fast Delivery</span>
          </motion.div>
        </ScrollParallax>
      </motion.div>

      {/* Background Glow Effect */}
      <motion.div 
        className="absolute -inset-10 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      />
    </div>
  );
};

export default HeroScene;