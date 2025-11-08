import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BottomLine } from "./design/Hero";
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeroScene from "./HeroScene";

const Hero = () => {
  const parallaxRef = useRef(null);
  const controls = useAnimation();
  
  useEffect(() => {
    // Start the animations as soon as the component mounts
    controls.start("visible");
  }, [controls]);
  
  // Animation variants matching AboutUs page
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        damping: 20, 
        stiffness: 100, 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.08,
        duration: 0.5
      }
    }
  };

  const imageReveal = {
    hidden: { 
      scale: 0.9, 
      opacity: 0
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 80,
        duration: 0.8, 
        ease: [0.6, 0.01, -0.05, 0.95] 
      } 
    }
  };

  // Curve animation variants - appearing slowly with proper curve
  const curveReveal = {
    hidden: { 
      scaleX: 0,
      opacity: 0,
      transformOrigin: "left center"
    },
    visible: { 
      scaleX: 1,
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 80,
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    }
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <motion.div 
          className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.h1 
            className="h1 mb-6"
            variants={fadeInUp}
          >
            Empower Your &nbsp;Business&nbsp; With {` `}
            <span className="inline-block relative">
              {/* GIGANXT with same gradient text effect as AboutUs */}
              <motion.span 
                className="bg-gradient-to-r from-[#1E50FF] to-purple-400 bg-clip-text text-transparent"
                variants={fadeInUp}
              >
                GIGANXT
              </motion.span>
              {" "}
              {/* Proper curved line with SVG */}
              <motion.div 
                className="absolute top-full left-0 w-full xl:-mt-1"
                variants={curveReveal}
                initial="hidden"
                animate="visible"
              >
                <svg 
                  width="100%" 
                  height="12" 
                  viewBox="0 0 400 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M2 10 C100 2, 300 2, 398 10" 
                    stroke="url(#gradient)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1E50FF" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </span>
          </motion.h1>
          
          <motion.p 
            className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8"
            variants={fadeInUp}
          >
            Innovating Web, App, Software, and AI Solutions to 
            Empower Businesses for the Digital Future.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <Button href="/contact" white>
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={imageReveal}
        >
          <HeroScene />
        </motion.div>

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;