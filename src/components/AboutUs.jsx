import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import Button from "./Button";
import { about1, about2 } from "../assets";

const AboutUs = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
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
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const imageReveal = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 80,
        duration: 0.8, 
        ease: [0.6, 0.01, -0.05, 0.95] 
      } 
    }
  };

  return (
    <Section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="h2 mb-4"
            variants={fadeInUp}
          >
            About <span className="text-color-1">GigaNXT</span>
          </motion.h2>
          <motion.p 
            className="body-1 max-w-3xl mx-auto text-n-3"
            variants={fadeInUp}
          >
            Empowering businesses with innovative technology solutions
          </motion.p>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageReveal}
          >
            <div className="relative z-1 p-1 rounded-2xl bg-conic-gradient overflow-hidden">
              <div className="bg-n-8 rounded-[1rem] overflow-hidden">
                <img 
                  src={about1} 
                  alt="GigaNXT Team" 
                  className="w-full h-auto rounded-[0.9rem] hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 z-0 w-64 h-64 rounded-full bg-[#1E50FF]/10 blur-3xl"></div>
          </motion.div>

          {/* Right column - Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h3 
              className="h4 mb-6"
              variants={fadeInUp}
            >
              Driving Digital Transformation
            </motion.h3>
            
            <motion.p 
              className="body-2 mb-6 text-n-3"
              variants={fadeInUp}
            >
              At GigaNXT Solutions, we are passionate about leveraging cutting-edge technology to transform businesses. As a dynamic IT service company, we specialize in web development, app development, software solutions, and AI-driven innovations.
            </motion.p>
            
            <motion.p 
              className="body-2 mb-8 text-n-3"
              variants={fadeInUp}
            >
              Our mission is to empower businesses with scalable, efficient, and high-performance digital solutions tailored to their unique needs. We bring together creativity, innovation, and technical expertise to craft solutions that drive success.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#1E50FF]"></div>
                  <span className="text-n-1 font-medium">Web Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#1E50FF]"></div>
                  <span className="text-n-1 font-medium">App Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#1E50FF]"></div>
                  <span className="text-n-1 font-medium">Software Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#1E50FF]"></div>
                  <span className="text-n-1 font-medium">AI Innovation</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button href="/about">
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-n-7/40 backdrop-blur border border-n-1/10">
            <h4 className="h3 mb-1 text-color-1">10+</h4>
            <p className="text-n-3">Projects Completed</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-n-7/40 backdrop-blur border border-n-1/10">
            <h4 className="h3 mb-1 text-color-1">7+</h4>
            <p className="text-n-3">Happy Clients</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-n-7/40 backdrop-blur border border-n-1/10">
            <h4 className="h3 mb-1 text-color-1">10+</h4>
            <p className="text-n-3">Team Members</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-n-7/40 backdrop-blur border border-n-1/10">
            <h4 className="h3 mb-1 text-color-1">1+</h4>
            <p className="text-n-3">Years Experience</p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutUs;