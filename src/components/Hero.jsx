import { curve, job, plante } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons, heroIcons1  } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";


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
          className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24"
          initial="hidden"
          animate={controls}
          variants={imageReveal}
        >
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <motion.img
                  src={job}
                  className="w-full aspect-[33/40] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] "
                  width={1024}
                  height={490}
                  alt="GigaNXT Digital Solutions - Empowering Business Innovation"
                  loading="eager"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                      duration: 1,
                      ease: "easeOut",
                      delay: 0.4
                    }
                  }}
                  whileInView={{ 
                    boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 30px rgba(0,0,0,0.1)", "0px 0px 0px rgba(0,0,0,0)"],
                    transition: {
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                />

                {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}

                <ScrollParallax isAbsolutelyPositioned>
                  <motion.ul 
                    className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      type: "spring",
                      damping: 15,
                      stiffness: 70,
                      duration: 0.8, 
                      delay: 0.8 
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {heroIcons.map((icon, index) => (
                      <motion.li 
                        className="p-5" 
                        key={index}
                        variants={iconFadeIn}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.8 + (index * 0.1) }}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, 5, -5, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <img src={icon} width={35} height={35} alt="Technology Icon" loading="lazy" />
                      </motion.li>
                    ))}
                  </motion.ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <motion.ul 
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      type: "spring",
                      damping: 15,
                      stiffness: 70,
                      duration: 0.8, 
                      delay: 1 
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {heroIcons1.map((icon, index) => (
                      <motion.li 
                        className="p-5" 
                        key={index}
                        variants={iconFadeIn}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 + (index * 0.1) }}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, 5, -5, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <img src={icon} width={50} height={50} alt="Service Icon" loading="lazy" />
                      </motion.li>
                    ))}
                  </motion.ul>
                  {/* <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  /> */}
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={plante}
              className="w-full opacity-35"
              width={1440}
              height={1800}
              alt="Digital Transformation Background"
              loading="lazy"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            <BackgroundCircles />
          </motion.div>
        </motion.div>

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
