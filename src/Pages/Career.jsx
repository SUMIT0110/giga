import React from "react";
import Section from "../components/Section";
import styles from "../constants/style";
import { gradient } from "../assets";
import { motion } from "framer-motion";

const Career = () => {
  // Sample job listings - currently not displayed as we're not hiring
  const jobListings = [ // Keeping the data structure for future use when hiring resumes
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / Chhatrapati Sambhaji Nagar",
      type: "Full-time",
      description: "We're looking for a talented Frontend Developer to join our team. You'll be responsible for building beautiful, responsive user interfaces using React and modern web technologies.",
      requirements: [
        "3+ years of experience with React.js",
        "Strong proficiency in JavaScript, HTML, and CSS",
        "Experience with responsive design and mobile-first approaches",
        "Familiarity with modern frontend build pipelines and tools",
        "Knowledge of UI/UX design principles"
      ]
    },
    {
      id: 2,
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote / Chhatrapati Sambhaji Nagar",
      type: "Full-time",
      description: "We're seeking a Backend Developer to help build and maintain our server-side applications. You'll work on API development, database design, and server infrastructure.",
      requirements: [
        "3+ years of experience in backend development",
        "Proficiency in Node.js, Express, and RESTful APIs",
        "Experience with database design and ORM frameworks",
        "Knowledge of server deployment and cloud services",
        "Understanding of security best practices"
      ]
    },
    {
      id: 3,
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "Remote / Chhatrapati Sambhaji Nagar",
      type: "Full-time",
      description: "Join our AI team to develop cutting-edge machine learning solutions. You'll work on implementing and optimizing ML models for various applications.",
      requirements: [
        "MS/PhD in Computer Science, AI, or related field",
        "Experience with TensorFlow, PyTorch, or similar frameworks",
        "Strong understanding of machine learning algorithms",
        "Programming skills in Python",
        "Experience with NLP or computer vision is a plus"
      ]
    }
  ];

  return (
    <>
      <Section className="pt-[12rem] -mt-[5.25rem]" crosses>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Join Our Team
            </h1>
            <p className={`${styles.paragraph} max-w-3xl mx-auto`}>
              At Giganxt Solutions, we're building the future of technology. Join our team of passionate innovators and help us create solutions that empower businesses worldwide.
            </p>
          </div>

          {/* Company Culture Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Our Culture</h2>
                <p className={`${styles.paragraph} mb-6`}>
                  We believe in fostering a collaborative, inclusive, and innovative environment where every team member can thrive. Our culture is built on these core values:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Innovation</h3>
                      <p className="text-[#b7bac1]">We encourage creative thinking and embrace new technologies to solve complex problems.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Collaboration</h3>
                      <p className="text-[#b7bac1]">We work together across teams, sharing knowledge and supporting each other to achieve our goals.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3 mt-1">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Growth</h3>
                      <p className="text-[#b7bac1]">We invest in our team's professional development and provide opportunities to learn and advance.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute top-0 -left-16 -right-16 h-full">
                  <img 
                    src={gradient} 
                    className="w-full h-full object-cover opacity-40" 
                    alt="Background gradient" 
                  />
                </div>
                <div className="relative bg-[#0F1524] border border-[#1E2D4A] rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Benefits & Perks</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3">
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-[#b7bac1]">Competitive salary and equity packages</p>
                    </li>
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3">
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-[#b7bac1]">Flexible work arrangements</p>
                    </li>
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3">
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-[#b7bac1]">Health and wellness benefits</p>
                    </li>
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3">
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-[#b7bac1]">Professional development budget</p>
                    </li>
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-[#1E50FF] flex items-center justify-center mr-3">
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-[#b7bac1]">Team retreats and social events</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Closed Positions Section */}
          <div>
            <h2 className="text-3xl font-bold mb-10 text-white text-center">Closed Positions</h2>
            <div className="space-y-8">
              {/* No positions available message */}
                <div className="bg-[#0F1524] border border-[#1E2D4A] rounded-2xl p-8 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">We Are Not Hiring Currently</h3>
                <p className={`${styles.paragraph} max-w-2xl mx-auto`}>
                  We are not accepting applications at this time. All positions are currently closed.
                  Please check back at a later date when we resume our hiring process.
                </p>
              </div>

            {/* Contact section */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Future Opportunities</h3>
              <p className={`${styles.paragraph} max-w-2xl mx-auto mb-8`}>
                While we are not currently hiring, you can check back in the future for new opportunities at Giganxt Solutions.
              </p>
            </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Career;