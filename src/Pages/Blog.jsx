import React from "react";
import styles from "../constants/style";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { gradient } from "../assets";
import { Link } from "react-router-dom";

const Blog = () => {

  return (
    <>
      <Section className="pt-[12rem] -mt-[5.25rem]" crosses>
        <div className="container mx-auto px-4 py-16">
          {/* Animated background gradient effect */}
          <div className="relative">
            <div className="absolute top-0 -left-16 -right-16 h-full">
              <img 
                src={gradient} 
                className="w-full h-full object-cover opacity-40" 
                alt="Background gradient" 
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Giganxt <span className="text-[#1E50FF]">Blog</span>
            </motion.h1>
            <motion.p 
              className={`${styles.paragraph} max-w-3xl mx-auto`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Insights, updates, and innovations from our team of experts. Stay informed about the latest in technology and AI.
            </motion.p>
          </div>

          {/* Featured Blog Post - 25 Weeks, 25 Agents Challenge */}
          <div className="max-w-6xl mx-auto mb-20">
            <motion.div 
              className="bg-[#0F1524] border border-[#1E2D4A] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="/assets/benefits/image-2.png" 
                    alt="25 Weeks, 25 Agents Challenge" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#1E50FF] text-white text-xs px-3 py-1 rounded-full mr-3">Featured</span>
                    <span className="text-[#b7bac1] text-sm">June 15, 2023</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">25 Weeks, 25 Agents Challenge</h2>
                  <p className="text-[#b7bac1] mb-6">
                    At Giganxt Solutions, we're embarking on an exciting journey to showcase our AI expertise through our "25 Weeks, 25 Agents" challenge. Over the course of 25 weeks, our team is developing 25 unique AI agents, each designed to solve specific problems and demonstrate the versatility and power of artificial intelligence.
                  </p>
                  <div className="bg-[#151E32] border border-[#1E2D4A] rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">What is the Challenge?</h3>
                    <p className="text-[#b7bac1] mb-4">
                      The "25 Weeks, 25 Agents" challenge is our commitment to innovation and excellence in AI development. Each week, we release a new intelligent agent that showcases different capabilities and applications of AI technology.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="text-[#b7bac1]"><span className="font-bold text-[#1E50FF]">Diverse Applications</span> – From natural language processing to computer vision, our agents cover a wide range of AI capabilities.</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="text-[#b7bac1]"><span className="font-bold text-[#1E50FF]">Real-World Solutions</span> – Each agent is designed to solve practical problems that businesses face.</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="text-[#b7bac1]"><span className="font-bold text-[#1E50FF]">Innovation Showcase</span> – This challenge demonstrates our team's creativity and technical expertise.</p>
                      </li>
                    </ul>
                  </div>
                  <p className="text-[#b7bac1] mb-6">
                    Whether you're looking to implement AI solutions in your business or simply interested in the latest advancements in artificial intelligence, our "25 Weeks, 25 Agents" challenge offers valuable insights and demonstrations of what's possible with today's technology.
                  </p>
                  <div className="flex items-center">
                    <Link to="/contact">
                      <motion.button 
                        className="border border-[#1E50FF] text-[#1E50FF] font-medium py-3 px-6 rounded-full flex items-center hover:bg-[#1E50FF]/10 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Contact Us
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Subscription */}
          <motion.div 
            className="max-w-4xl mx-auto bg-[#151E32] border border-[#1E2D4A] rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with Our Latest Articles</h3>
              <p className="text-[#b7bac1]">Subscribe to our newsletter to receive updates on our blog posts, AI developments, and the "25 Weeks, 25 Agents" challenge.</p>
            </div>
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-[#0F1524] border border-[#1E2D4A] rounded-full px-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#1E50FF]"
              />
              <motion.button 
                type="submit"
                className="bg-[#1E50FF] hover:bg-[#1240D0] text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Blog; 