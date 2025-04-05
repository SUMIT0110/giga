import React from "react";
import { privacyData } from "../constants";
import Section from "../components/Section";
import styles from "../constants/style";
import { gradient } from "../assets";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </motion.h1>
            <motion.p 
              className={`${styles.paragraph} max-w-3xl mx-auto`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At Giganxt Solutions, we respect your privacy and are committed to protecting your personal data.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0F1524] border border-[#1E2D4A] rounded-2xl p-8 shadow-xl">
              {privacyData.map((section, index) => (
                <motion.div 
                  key={index} 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                  <p className="text-[#b7bac1] mb-4">{section.content}</p>
                  
                  {section.list && (
                    <ul className="space-y-4">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="text-[#b7bac1]">{item}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PrivacyPolicy;
