import React from "react";
import styles from "../constants/style";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { gradient } from "../assets";

const About = () => {
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
              About <span className="text-[#1E50FF]">Giganxt Solutions</span>
            </motion.h1>
            <motion.p 
              className={`${styles.paragraph} max-w-3xl mx-auto`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At Giganxt Solutions, we are passionate about leveraging cutting-edge technology to transform businesses.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0F1524] border border-[#1E2D4A] rounded-2xl p-8 shadow-xl">
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Who We Are</h3>
                <p className="text-[#b7bac1] mb-4">
                  At <span className="font-bold text-[#1E50FF]">Giganxt Solutions</span>, we are passionate about leveraging cutting-edge technology to transform businesses. As a dynamic IT service company, we specialize in <span className="font-bold">web development, app development, software solutions, and AI-driven innovations</span>. Our mission is to empower businesses with scalable, efficient, and high-performance digital solutions tailored to their unique needs.
                </p>
                <p className="text-[#b7bac1] mb-4">
                  Founded with a vision to bridge the gap between technology and business growth, <span className="font-bold text-[#1E50FF]">Giganxt Solutions</span> is a team of highly skilled professionals dedicated to delivering excellence. We bring together creativity, innovation, and technical expertise to craft solutions that drive success.
                </p>
              </motion.div>

              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Our Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[#b7bac1]"><span className="font-bold text-[#1E50FF]">Web Development</span> – Stunning, responsive, and user-friendly websites that enhance your brand's online presence.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[#b7bac1]"><span className="font-bold text-[#1E50FF]">App Development</span> – High-performance mobile applications designed for seamless user experiences.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[#b7bac1]"><span className="font-bold text-[#1E50FF]">Software Development</span> – Customized software solutions to streamline operations and enhance efficiency.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[#b7bac1]"><span className="font-bold text-[#1E50FF]">AI & Data Science</span> – Cutting-edge AI solutions, including NLP, computer vision, and automation tools.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[#b7bac1]"><span className="font-bold text-[#1E50FF]">Digital Marketing</span> – Strategic marketing solutions to enhance brand visibility and customer engagement.</p>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[#b7bac1]"><span className="font-bold text-[#1E50FF]">Innovation-Driven Approach</span> – We stay ahead of the curve by integrating the latest technology trends.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[#b7bac1]"><span className="font-bold text-[#1E50FF]">Client-Centric Solutions</span> – Your business goals are our priority, and we tailor solutions to meet your unique needs.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[#b7bac1]"><span className="font-bold text-[#1E50FF]">Experienced Team</span> – Our team comprises skilled professionals with expertise in various technological domains.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[#b7bac1]"><span className="font-bold text-[#1E50FF]">Global Reach</span> – While we are rooted in innovation, we serve clients worldwide, helping businesses scale efficiently.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[#b7bac1]"><span className="font-bold text-[#1E50FF]">Affordable Excellence</span> – High-quality solutions at competitive prices, ensuring maximum ROI.</p>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-[#b7bac1] mb-4">
                  To be a global leader in IT solutions, revolutionizing industries through AI, software development, and digital transformation.
                </p>
              </motion.div>

              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-[#b7bac1] mb-4">
                  To provide businesses with cutting-edge technology solutions that drive growth, efficiency, and long-term success.
                </p>
              </motion.div>

              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Great Together!</h3>
                <p className="text-[#b7bac1] mb-4">
                  Whether you're a startup looking to establish a digital presence or a growing business in need of advanced AI solutions, <span className="font-bold text-[#1E50FF]">Giganxt Solutions</span> is your trusted partner. Let's innovate, scale, and succeed together!
                </p>
              </motion.div>

              <motion.div 
                className="text-center mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.p 
                  className="text-lg mb-2 text-[#b7bac1]"
                  whileHover={{ scale: 1.05, color: "#1E50FF" }}
                  transition={{ duration: 0.2 }}
                >
                  📩 <span className="font-bold">Get in Touch:</span> <a href="mailto:contact@giganxt.com" className="text-[#1E50FF] hover:underline">contact@giganxt.com</a>
                </motion.p>
                <motion.p 
                  className="text-lg mb-2 text-[#b7bac1]"
                  whileHover={{ scale: 1.05, color: "#1E50FF" }}
                  transition={{ duration: 0.2 }}
                >
                  🌐 <span className="font-bold">Website:</span> <a href="https://www.giganxt.com" target="_blank" rel="noopener noreferrer" className="text-[#1E50FF] hover:underline">www.giganxt.com</a>
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
    </>
   );
};

export default About;
