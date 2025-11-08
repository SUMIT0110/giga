import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ScrollParallax } from 'react-just-parallax';
import { useMediaQuery } from '@react-hook/media-query';

const HeroScene = () => {
  const controls = useAnimation();
  const isMobile = useMediaQuery("(max-width: 767px)");

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
    <div className="relative w-full max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 overflow-visible">
      <motion.div 
        className="relative z-10 aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490] overflow-visible rounded-2xl bg-gradient-to-br from-n-8/80 to-n-12/80 backdrop-blur-sm border border-n-1/10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Modern SVG Background - Fixed for mobile */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 1000 1000" 
            preserveAspectRatio="xMidYMid slice"
            style={{ overflow: 'hidden' }}
          >
            <defs>
              <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2" />
              </linearGradient>
              
              <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </radialGradient>
              
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4" />
              </linearGradient>

              {/* Simplified pattern for mobile */}
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <circle cx="20" cy="20" r="1" fill="rgba(255, 255, 255, 0.3)" />
              </pattern>
            </defs>
            
            {/* Base background */}
            <rect width="100%" height="100%" fill="url(#bg-gradient)" />
            
            {/* Dot pattern overlay */}
            <rect width="100%" height="100%" fill="url(#dots)" />
            
            {/* Simplified decorative lines for mobile */}
            {!isMobile && (
              <>
                <path d="M0,250 Q500,150 1000,350" stroke="url(#line-gradient)" strokeWidth="1" fill="none" opacity="0.5" />
                <path d="M0,650 Q500,750 1000,550" stroke="url(#line-gradient)" strokeWidth="1" fill="none" opacity="0.5" />
              </>
            )}
            
            {/* Glowing circles - positioned better for mobile */}
            <circle cx="200" cy="200" r={isMobile ? "60" : "100"} fill="url(#glow-gradient)" opacity="0.6" />
            <circle cx="800" cy="800" r={isMobile ? "90" : "150"} fill="url(#glow-gradient)" opacity="0.4" />
            
            {/* Simplified grid for mobile */}
            <g opacity={isMobile ? "0.1" : "0.15"}>
              {Array.from({ length: isMobile ? 5 : 10 }).map((_, i) => (
                <line 
                  key={`h-${i}`}
                  x1="0" 
                  y1={i * (isMobile ? 200 : 100)} 
                  x2="1000" 
                  y2={i * (isMobile ? 200 : 100)} 
                  stroke="#fff" 
                  strokeWidth={isMobile ? "1" : "0.5"} 
                />
              ))}
              {Array.from({ length: isMobile ? 5 : 10 }).map((_, i) => (
                <line 
                  key={`v-${i}`}
                  x1={i * (isMobile ? 200 : 100)} 
                  y1="0" 
                  x2={i * (isMobile ? 200 : 100)} 
                  y2="1000" 
                  stroke="#fff" 
                  strokeWidth={isMobile ? "1" : "0.5"} 
                />
              ))}
            </g>
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

        {/* GIGANXT Logo */}
        <motion.div 
          className={`absolute top-4 z-30 flex items-center justify-center ${
            isMobile 
              ? 'left-0 right-0 mx-auto w-full px-4' 
              : 'left-1/2 -translate-x-1/2 w-80'
          }`}
          variants={itemVariants}
        >
          <div className={`backdrop-blur-md bg-gradient-to-br from-blue-900/10 to-purple-900/10 border border-white/5 rounded-md ${
            isMobile 
              ? 'px-4 py-2 max-w-[280px] mx-auto' 
              : 'px-8 py-4'
          }`}>
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <h3 className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 ${
                isMobile ? 'text-lg' : 'text-3xl'
              }`}>
                GIGANXT
              </h3>
              <div className={`h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent ${
                isMobile ? 'my-1' : 'my-2'
              }`}></div>
              <p className={`text-white/70 ${
                isMobile ? 'text-xs' : 'text-sm'
              }`}>
                Digital Innovation
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Central Element */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-40 md:w-80 md:h-56 flex items-center justify-center"
          variants={itemVariants}
        >
          <div className="absolute w-full h-full">
            <motion.div 
              className="absolute -top-6 -left-6 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-md rotate-12"
              animate={{
                rotate: [12, 0, 12],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-md -rotate-12"
              animate={{
                rotate: [-12, -24, -12],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5
              }}
            />
          </div>
          
          <div className="relative z-0 w-full h-full flex flex-col justify-center items-center">
            <motion.div 
              className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
              animate={{
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
              animate={{
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5
              }}
            />
          </div>
        </motion.div>

        {/* Animated Code Lines */}
        <motion.div 
          className="absolute bottom-12 md:bottom-4 left-8 right-8 h-14 md:h-20 overflow-hidden rounded-lg bg-n-10/30 backdrop-blur-sm border border-n-1/10"
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
            className="text-xs md:text-sm font-mono text-green-400/80 p-2 md:p-4"
          >
            <div className="mb-1">// GIGANXT Digital Innovation</div>
            <div className="mb-1">// Web Development Solutions</div>
            <div className="mb-1">// Mobile App Development</div>
            <div className="mb-1">// UI/UX Design Services</div>
            <div className="mb-1">// Enterprise Software Solutions</div>
            <div className="mb-1">// Advanced AI Integration</div>
            <div className="mb-1">// Machine Learning Models</div>
            <div className="mb-1">// Data Science & Analytics</div>
            <div className="mb-1">// Digital Transformation</div>
            <div className="mb-1">// www.giganxt.com</div>
          </motion.div>
        </motion.div>
        
        {/* Animated Code Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-10 top-1/3 w-1/4 h-px bg-gradient-to-r from-transparent via-n-1/10 to-transparent">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-n-1/50 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                ease: 'linear',
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          </div>
        </div>

        {/* Tech Icons with Proper Labels */}
        
        {/* Left Side - Development Services */}
        {/* Web Development */}
        <ScrollParallax isAbsolutelyPositioned>
          <motion.div 
            className="absolute -left-6 sm:-left-10 md:-left-20 top-[10%] md:top-[15%] px-2 md:px-3 py-1 md:py-2 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-xl flex items-center space-x-1 md:space-x-2 max-w-[110px] md:max-w-none z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs font-medium text-white truncate">Web Dev</span>
          </motion.div>
        </ScrollParallax>
        
        {/* Mobile Development */}
        <ScrollParallax isAbsolutelyPositioned>
          <motion.div 
            className="absolute -left-8 sm:-left-12 md:-left-24 top-[35%] md:top-[40%] px-2 md:px-3 py-1 md:py-2 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-xl flex items-center space-x-1 md:space-x-2 max-w-[130px] md:max-w-none z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm6 11a1 1 0 10-2 0 1 1 0 002 0z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-white truncate">Mobile Dev</span>
          </motion.div>
        </ScrollParallax>
        
        {/* UI/UX Design */}
        <ScrollParallax isAbsolutelyPositioned>
          <motion.div 
            className="absolute -left-6 sm:-left-10 md:-left-20 top-[60%] md:top-[65%] px-2 md:px-3 py-1 md:py-2 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-xl flex items-center space-x-1 md:space-x-2 max-w-[130px] md:max-w-none z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-cyan-500/30 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs font-medium text-white truncate">UI/UX Design</span>
          </motion.div>
        </ScrollParallax>

        {/* Right Side - AI & Data Services */}
        {/* AI Solutions */}
        <ScrollParallax isAbsolutelyPositioned>
          <motion.div 
            className="absolute -right-6 sm:-right-10 md:-right-20 top-[10%] md:top-[15%] px-2 md:px-3 py-1 md:py-2 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-xl flex items-center space-x-1 md:space-x-2 max-w-[110px] md:max-w-none z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-500/30 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-white truncate">AI Solutions</span>
          </motion.div>
        </ScrollParallax>

        {/* Machine Learning */}
        <ScrollParallax isAbsolutelyPositioned>
          <motion.div 
            className="absolute -right-8 sm:-right-12 md:-right-24 top-[35%] md:top-[40%] px-2 md:px-3 py-1 md:py-2 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-xl flex items-center space-x-1 md:space-x-2 max-w-[130px] md:max-w-none z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-yellow-500/30 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-white truncate">ML Models</span>
          </motion.div>
        </ScrollParallax>
        
        {/* Data Analytics */}
        <ScrollParallax isAbsolutelyPositioned>
          <motion.div 
            className="absolute -right-6 sm:-right-10 md:-right-20 top-[60%] md:top-[65%] px-2 md:px-3 py-1 md:py-2 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-xl flex items-center space-x-1 md:space-x-2 max-w-[110px] md:max-w-none z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-500/30 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs font-medium text-white truncate">Data Analytics</span>
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