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
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        damping: 12, 
        stiffness: 100, 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.3,
        duration: 0.5
      }
    }
  };
  
  const imageReveal = {
    hidden: { scale: 0.8, opacity: 0, y: 40 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 80,
        duration: 1, 
        ease: [0.6, 0.01, -0.05, 0.95] 
      } 
    }
  };
  
  const iconFadeIn = {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 0.6 
      } 
    }
  };
  
  // Removed floating animation as it was causing positioning issues
  
  const backgroundReveal = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 0.35,
      transition: { 
        duration: 1.5, 
        ease: "easeOut", 
        delay: 0.3 
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
              GIGANXT{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
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
