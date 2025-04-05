import React, { useState } from "react";
import Section from "./Section";
import { socialMedia } from "../constants";
import styles from "../constants/style";
import { logo, gradient } from "../assets";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [activeSection, setActiveSection] = useState(null);




  // Animation variants for links
  const linkVariants = {
    initial: {
      x: 0
    },
    hover: {
      scale: 1.05,
      x: 5,
      color: "#1E50FF",
      transition: { duration: 0.2 }
    }
  };

  // Animation variants for notification
  const notificationVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 }
    }
  };

  // Animation variants for social icons
  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };
  
  // Animation variants for social container
  const socialContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  // Animation variants for individual social icons
  const socialItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  // Animation variants for footer links
  const footerLinkVariants = {
    initial: { opacity: 0.8, x: 0 },
    hover: { 
      opacity: 1, 
      x: 5, 
      color: "#1E50FF",
      transition: { duration: 0.2 } 
    }
  };
  
  // Animation variants for section headers
  const headerVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    },
    hover: {
      scale: 1.05,
      color: "#1E50FF",
      transition: { duration: 0.2 }
    }
  };
  
  // Animation variants for newsletter form
  const formVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 } 
    },
    hover: {
      boxShadow: "0 0 20px rgba(30, 80, 255, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <Section crosses colorfulBorder className="!py-10 w-full px-6 md:px-16 relative overflow-hidden" id="footer">
      {/* Animated background gradient effect */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 20%, rgba(30, 80, 255, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle at 70% 60%, rgba(30, 80, 255, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle at 40% 80%, rgba(30, 80, 255, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle at 30% 20%, rgba(30, 80, 255, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <img src={gradient} alt="background gradient" className="w-full h-full object-cover" />
      </motion.div>
      
      {/* Main Footer Container */}
      <div className="container mx-auto relative z-10">
        {/* Footer Top Section - Logo, Navigation, and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and Company Description */}
          <motion.div 
            className="md:col-span-4 flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={logo}
              alt="Giganxt"
              className="w-[250px] h-[100px] object-contain" 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.p 
              className={`${styles.paragraph} mt-4 max-w-[350px]`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-[#1E50FF] font-semibold">Empower</span> Your Business With Giganxt Solution.
            </motion.p>
            
            {/* Social Media Icons */}
            <motion.div 
              className="flex mt-6"
              variants={socialContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialMedia.map((social) => (
                <motion.div
                  key={social.id}
                  variants={socialItemVariants}
                  whileHover="hover"
                  onMouseEnter={() => setHoveredSocial(1)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className="relative group mr-4"
                >
                  <motion.div
                    className="relative z-10 bg-[#1A2337] p-2 rounded-full flex items-center justify-center"
                    variants={socialVariants}
                  >
                    <img
                      src={social.icon}
                      alt={social.id}
                      className="w-[20px] h-[20px] object-contain cursor-pointer"
                      onClick={() => window.open(social.link)}
                    />
                  </motion.div>
                  <AnimatePresence>
                    {hoveredSocial === social.id && (
                      <motion.div 
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#1E50FF] text-white text-xs py-1 px-2 rounded whitespace-nowrap"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {social.id.replace('social-media-', '')}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Quick Links Section */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
              onMouseEnter={() => setActiveSection('company')}
              onMouseLeave={() => setActiveSection(null)}
            >
              <motion.h4 
                className="text-xl font-bold text-white mb-6 relative inline-block"
                variants={headerVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
              >
                Company
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-[#1E50FF] transition-all duration-300 w-0"
                  animate={{ width: activeSection === 'company' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.h4>
              <ul className="space-y-4">
                <motion.li variants={footerLinkVariants} initial="initial" whileHover="hover">
                  <Link to="/about" onClick={() => url} className="text-dimWhite flex items-center group">
                    <span className="mr-2 text-[#1E50FF] transform group-hover:translate-x-1 transition-transform duration-200">›</span>
                    <span>About Us</span>
                  </Link>
                </motion.li>
                <motion.li variants={footerLinkVariants} initial="initial" whileHover="hover">
                  <Link to="/career" onClick={() => url} className="text-dimWhite flex items-center group">
                    <span className="mr-2 text-[#1E50FF] transform group-hover:translate-x-1 transition-transform duration-200">›</span>
                    <span>Careers</span>
                  </Link>
                </motion.li>

              </ul>
            </motion.div>
            
            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col"
              onMouseEnter={() => setActiveSection('legal')}
              onMouseLeave={() => setActiveSection(null)}
            >
              <motion.h4 
                className="text-xl font-bold text-white mb-6 relative inline-block"
                variants={headerVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
              >
                Legal & Policies
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-[#1E50FF] transition-all duration-300 w-0"
                  animate={{ width: activeSection === 'legal' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.h4>
              <ul className="space-y-4">
                <motion.li variants={footerLinkVariants} initial="initial" whileHover="hover">
                  <Link to="/privacy-policy" onClick={() => url} className="text-dimWhite flex items-center group">
                    <span className="mr-2 text-[#1E50FF] transform group-hover:translate-x-1 transition-transform duration-200">›</span>
                    <span>Privacy Policy</span>
                  </Link>
                </motion.li>
                <motion.li variants={footerLinkVariants} initial="initial" whileHover="hover">
                  <Link to="/terms-conditions" onClick={() => url} className="text-dimWhite flex items-center group">
                    <span className="mr-2 text-[#1E50FF] transform group-hover:translate-x-1 transition-transform duration-200">›</span>
                    <span>Terms & Conditions</span>
                  </Link>
                </motion.li>
                <motion.li variants={footerLinkVariants} initial="initial" whileHover="hover">

                </motion.li>
              </ul>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col"
              onMouseEnter={() => setActiveSection('contact')}
              onMouseLeave={() => setActiveSection(null)}
            >
              <motion.h4 
                className="text-xl font-bold text-white mb-6 relative inline-block"
                variants={headerVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
              >
                Contact Us
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-[#1E50FF] transition-all duration-300 w-0"
                  animate={{ width: activeSection === 'contact' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.h4>
              <ul className="space-y-4">
                <motion.li 
                  className="text-dimWhite flex items-start"
                  whileHover={{ x: 5, color: "#1E50FF", transition: { duration: 0.2 } }}
                >
                  <span className="mr-3 text-[#1E50FF] mt-1">✉</span> 
                  <a  className="hover:text-[#1E50FF] transition-colors duration-300">
                    contact@giganxt.com
                  </a>
                </motion.li>
                <motion.li 
                  className="text-dimWhite flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <span className="mr-3 text-[#1E50FF] mt-1">📍</span> 
                  <span>Chhatrapati Sambhaji Nagar, Maharashtra, India</span>
                </motion.li>
                <motion.li 
                  className="text-dimWhite flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
        


        {/* Footer Bottom - Copyright and Social Media */}
        <motion.div 
          className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-t-[#3F3E45]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-center text-[15px] leading-[27px] text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Copyright Ⓒ {new Date().getFullYear()} <span className="text-[#1E50FF]">Giganxt Solutions</span>. All Rights Reserved.
          </motion.p>

          <motion.div 
            className="flex items-center md:mt-0 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
           
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Footer;
