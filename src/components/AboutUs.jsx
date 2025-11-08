import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import Button from "./Button";
import Heading from "./Heading";
import { about1, about2 } from "../assets";

const AboutUs = () => {
  // Enhanced animation variants with reduced blur effects
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
  
  const fadeInLeft = {
    hidden: { 
      opacity: 0, 
      x: -40
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        damping: 20, 
        stiffness: 100, 
        duration: 0.6
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

  const scaleOnHover = {
    hover: {
      scale: 1.02,
      y: -3,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300
      }
    }
  };

  // Curve animation variants - same as Hero page
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

  // Enhanced stats data with more detailed information
  const statsData = [
    { 
      number: "10+", 
      label: "Completed Projects", 
      icon: "🚀",
      description: "Successfully delivered solutions"
    },
    { 
      number: "8+", 
      label: "Happy Clients", 
      icon: "😊",
      description: "Satisfied customers worldwide"
    },
    { 
      number: "10+", 
      label: "Team Members", 
      icon: "👥",
      description: "Expert professionals"
    },
    { 
      number: "6+", 
      label: "Month Experience", 
      icon: "⭐",
      description: "Industry expertise"
    }
  ];

  // All 6 capabilities
  const capabilities = [
    { name: "Artificial Intelligence", gradient: "from-blue-400 to-purple-500" },
    { name: "Machine Learning Models", gradient: "from-purple-400 to-pink-500" },
    { name: "Full-Stack Development", gradient: "from-green-400 to-blue-500" },
    { name: "Mobile Applications", gradient: "from-yellow-400 to-orange-500" },
    { name: "Enterprise Solutions", gradient: "from-red-400 to-purple-500" },
    { name: "Data Science & Analytics", gradient: "from-cyan-400 to-blue-500" }
  ];

  return (
    <Section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Reduced background blur effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-n-8/30 via-transparent to-n-7/20"></div>
      <div className="absolute top-1/4 -left-48 w-72 h-72 rounded-full bg-gradient-to-r from-[#1E50FF]/10 to-purple-500/10 blur-xl"></div>
      <div className="absolute bottom-1/4 -right-48 w-72 h-72 rounded-full bg-gradient-to-l from-[#1E50FF]/10 to-cyan-500/10 blur-xl"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        {/* UPDATED SECTION HEADING - PROPER LIKE TESTIMONIALS */}
        <div className="container mb-16">
          <Heading
            tag="About Us"
            title={
              <span className="inline-block relative">
                Innovation with{" "}
                <span className="inline-block relative">
                  {/* GigaNXT with same gradient text effect as Hero page */}
                  <motion.span 
                    className="bg-gradient-to-r from-[#1E50FF] to-purple-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    GigaNXT
                  </motion.span>
                  {" "}
                  {/* Curved underline same as Hero page */}
                  <motion.div 
                    className="absolute top-full left-0 w-full mt-2"
                    variants={curveReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
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
              </span>
            }
            text="Empowering businesses with smart technology and digital innovation. Our mission is to deliver scalable, intelligent solutions tailored to your unique needs."
          />
        </div>

        {/* Enhanced main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image section with reduced blur */}
          <motion.div 
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageReveal}
          >
            <motion.div 
              className="relative z-10 p-1.5 rounded-2xl bg-gradient-to-r from-[#1E50FF]/15 via-purple-500/15 to-cyan-500/15"
              whileHover="hover"
              variants={scaleOnHover}
            >
              <div className="relative bg-n-8/90 rounded-xl overflow-hidden border border-n-1/10">
                <motion.img 
                  src={about1} 
                  alt="GigaNXT Team" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-n-8/40 via-transparent to-transparent"></div>
              </div>
            </motion.div>
            
            {/* Reduced decorative blur effects */}
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-gradient-to-br from-[#1E50FF]/20 to-purple-500/20"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/10 to-[#1E50FF]/10"></div>
          </motion.div>

          {/* Enhanced content section */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInLeft}>
              <h3 className="h4 mb-3 bg-gradient-to-r from-n-1 to-n-3 bg-clip-text text-transparent">
                Digital Excellence
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#1E50FF] to-purple-400 rounded-full mb-4"></div>
            </motion.div>
            
            <motion.p 
              className="body-2 text-n-2 leading-relaxed"
              variants={fadeInLeft}
            >
              At <span className="font-semibold text-[#1E50FF]">GigaNXT Solutions</span>, we specialize in 
              web development, mobile applications, and AI-driven technologies that drive business growth.
            </motion.p>
            
            <motion.p 
              className="text-sm text-n-3 leading-relaxed"
              variants={fadeInLeft}
            >
              Our team of experts is dedicated to creating innovative solutions that transform ideas into 
              powerful digital experiences. We combine cutting-edge technology with creative design to 
              deliver exceptional results.
            </motion.p>

            {/* Enhanced capabilities grid - all 6 services */}
            <motion.div variants={fadeInLeft} className="mt-6">
              <h4 className="text-sm font-semibold mb-4 text-n-1">Core Services</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability.name}
                    className="group flex items-center gap-2.5 p-3 rounded-lg bg-n-7/40 border border-n-1/10 hover:border-[#1E50FF]/30 transition-all duration-300"
                    whileHover={{ scale: 1.015, y: -1.5 }}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${capability.gradient} group-hover:scale-110 transition-transform duration-300`}></div>
                    <span className="text-n-1 font-medium text-xs group-hover:text-[#1E50FF] transition-colors duration-300">
                      {capability.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Updated Button - Same style as Hero page */}
            <motion.div variants={fadeInLeft} className="pt-3">
              <Button 
                href="/about" 
                white
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Cleaner Achievement Cards Section */}
        <motion.div 
          className="relative mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Section heading for stats */}
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h3 className="h4 mb-3 bg-gradient-to-r from-n-1 to-n-3 bg-clip-text text-transparent">
              Our Achievements
            </h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#1E50FF] to-purple-400 rounded-full mx-auto mb-4"></div>
            <p className="text-sm text-n-3 max-w-lg mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </motion.div>

          {/* Clean stats cards without heavy blur effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E50FF]/3 via-purple-500/3 to-cyan-500/3 rounded-3xl"></div>
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl border border-n-1/10 bg-n-8/30">
            {statsData.map((stat, index) => (
              <motion.div 
                key={stat.label}
                variants={fadeInUp}
                className="group text-center p-6 rounded-2xl bg-n-7/40 border border-n-1/10 hover:border-[#1E50FF]/40 hover:bg-[#1E50FF]/5 transition-all duration-500 hover:shadow-lg hover:shadow-[#1E50FF]/10"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <motion.div 
                  className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.h4 
                  className="h3 mb-2 bg-gradient-to-r from-[#1E50FF] to-purple-400 bg-clip-text text-transparent font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                >
                  {stat.number}
                </motion.h4>
                
                <p className="text-n-1 text-sm font-semibold mb-2 group-hover:text-[#1E50FF] transition-colors duration-300">
                  {stat.label}
                </p>
                
                <p className="text-n-3 text-xs leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutUs;