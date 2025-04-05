import React, { useState, useRef, useEffect } from "react";
import styles from "../constants/style";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { gradient } from "../assets";
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Form reference for EmailJS
  const form = useRef();
  
  // EmailJS configuration
  const serviceId = 'Giganxt_Solutions'; // Your EmailJS service ID
  const templateId = 'template_3e32hsd'; // Your EmailJS template ID
  const publicKey = 'T3Bn8GG4RaGhc_aor'; // IMPORTANT: Replace with your actual EmailJS public key from your EmailJS dashboard
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(publicKey);
  }, []);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Validation state
  const [errors, setErrors] = useState({});
  
  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Map form field names to state properties
    let stateField = name;
    if (name === 'user_name') stateField = 'name';
    if (name === 'user_email') stateField = 'email';
    
    setFormData({
      ...formData,
      [stateField]: value,
    });
    
    // Clear error when user starts typing
    // Use the mapped state field name for error clearing
    if (errors[stateField]) {
      setErrors({
        ...errors,
        [stateField]: null,
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 2) {
      newErrors.message = "Message must be at least 2 characters long";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Make sure form field names match what EmailJS template expects
      // This ensures name and email are properly sent
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      };
      
      // Send email using EmailJS with template parameters
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      console.log('Email sent successfully:', result.text);
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setSubmitStatus('success');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus('error');
      
      // Log specific error details for debugging
      if (error.text) {
        console.error("EmailJS error details:", error.text);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section crosses className="!py-10 w-full relative overflow-hidden">
      {/* Animated background gradient effect */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
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
      
      <div className={`${styles.paddingX} ${styles.paddingY} relative z-10`}>
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact <span className="text-[#1E50FF]">Giganxt Solutions</span>
          </motion.h1>

          <motion.p 
            className="text-lg mb-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a question or want to work with us? Fill out the form below and we'll get back to you as soon as possible.
          </motion.p>

          {/* Contact Form */}
          <motion.div
            className="bg-n-8/80 backdrop-blur-sm rounded-2xl p-8 border border-n-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {submitStatus === 'success' && (
              <motion.div 
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <p className="font-medium">Message Sent Successfully!</p>
                <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <p className="font-medium">Message Not Sent</p>
                <p>There was an error sending your message. Please check your internet connection and try again later, or contact us directly at info@giganxt.com.</p>
              </motion.div>
            )}
            
            <form ref={form} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-n-1 mb-2 font-medium">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-n-7 border ${errors.name ? 'border-red-500' : 'border-n-6'} rounded-lg p-3 text-n-1 focus:outline-none focus:border-[#1E50FF] transition-colors`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-n-1 mb-2 font-medium">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-n-7 border ${errors.email ? 'border-red-500' : 'border-n-6'} rounded-lg p-3 text-n-1 focus:outline-none focus:border-[#1E50FF] transition-colors`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              
              {/* Subject Field */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-n-1 mb-2 font-medium">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-n-7 border ${errors.subject ? 'border-red-500' : 'border-n-6'} rounded-lg p-3 text-n-1 focus:outline-none focus:border-[#1E50FF] transition-colors`}
                  placeholder="How can we help you?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>
              
              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-n-1 mb-2 font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full bg-n-7 border ${errors.message ? 'border-red-500' : 'border-n-6'} rounded-lg p-3 text-n-1 focus:outline-none focus:border-[#1E50FF] transition-colors`}
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center px-8 py-3 rounded-lg font-bold text-white bg-[#1E50FF] hover:bg-[#1E50FF]/90 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Email */}
            <div className="bg-n-8/80 backdrop-blur-sm rounded-2xl p-6 border border-n-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#1E50FF]/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E50FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-n-3 mb-4">Our friendly team is here to help</p>
              <a href="mailto:contact@giganxt.com" className="text-[#1E50FF] hover:underline">contact@giganxt.com</a>
            </div>
            
            {/* Office */}
            <div className="bg-n-8/80 backdrop-blur-sm rounded-2xl p-6 border border-n-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#1E50FF]/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E50FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-n-3 mb-4">Come say hello at our office</p>
              <p className="text-n-1">Chhatrapati Sambhajinagar<br />Maharashtra, India 431001</p>
            </div>
            
            {/* Phone */}
            <div className="bg-n-8/80 backdrop-blur-sm rounded-2xl p-6 border border-n-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#1E50FF]/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E50FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-n-3 mb-4">We are Available 24/7</p>
              <a href="tel:+919373668746" className="text-[#1E50FF] hover:underline">+91 9373 668 746</a>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;