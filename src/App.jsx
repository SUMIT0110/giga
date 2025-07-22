import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";

import Testimonials from "./components/Testimonials";
import Project from "./components/Project";
import About from "./Pages/About"; // Import the About page
import ChatBot from "./components/ChatBot"; // Import the ChatBot component
import SEO from "./components/SEO"; // Import the SEO component
import PrivacyPolicy from "./Pages/Privacypolicy";
import TermsConditions from "./Pages/TermsConditions";
import Career from "./Pages/Career"; // Import the Career page
import Contact from "./Pages/Contact"; // Import the Contact page
import Blog from "./Pages/Blog"; // Import the Blog page

const App = () => {
  return (
    <>
      {/* Global SEO settings */}
      <SEO />

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          
          {/* Define routes for the application */}
          <Route path="/" element={
            <>
              <SEO 
                title="Home" 
                description="GigaNXT Solutions - Innovating Web, App, Software, and AI Solutions to Empower Businesses for the Digital Future."
                keywords="web development, app development, software solutions, AI development, IT services, digital transformation"
              />
              <Hero />
              <AboutUs />
              <Benefits />

              <Project />
              <Testimonials />
              <Roadmap />
              <FAQs />
            </>
          } />
          

          <Route path="/about" element={
            <>
              <SEO 
                title="About Us" 
                description="Learn about GigaNXT Solutions - A dynamic IT service company specializing in web development, app development, software solutions, and AI-driven innovations."
                keywords="about GigaNXT, IT company, software development team, AI solutions provider, tech services"
                canonical="https://giganxt.com/about"
              />
              <About />
            </>
          } /> {/* About page route */}

          <Route path="/privacy-policy" element={
            <>
              <SEO 
                title="Privacy Policy" 
                description="GigaNXT Solutions Privacy Policy - Learn how we collect, use, and protect your personal information."
                keywords="privacy policy, data protection, personal information, cookies, GDPR compliance, data security"
                canonical="https://giganxt.com/privacy-policy"
              />
              <PrivacyPolicy />
            </>
          } /> {/* Privacy Policy route */}

          <Route path="/terms-conditions" element={
            <>
              <SEO 
                title="Terms & Conditions" 
                description="GigaNXT Solutions Terms and Conditions - Understand the rules, guidelines, and legal agreements for using our services."
                keywords="terms and conditions, user agreement, legal terms, service terms, usage policy, intellectual property"
                canonical="https://giganxt.com/terms-conditions"
              />
              <TermsConditions />
            </>
          } /> {/* Terms & Conditions route */}

          <Route path="/career" element={
            <>
              <SEO 
                title="Careers" 
                description="Join the GigaNXT Solutions team - Explore career opportunities and be part of our innovative technology company."
                keywords="careers, jobs, employment, tech jobs, IT careers, software development jobs, AI jobs"
                canonical="https://giganxt.com/career"
              />
              <Career />
            </>
          } /> {/* Career page route */}

          <Route path="/contact" element={
            <>
              <SEO 
                title="Contact Us" 
                description="Get in touch with GigaNXT Solutions - Contact us for web development, app development, software solutions, and AI services."
                keywords="contact us, get in touch, email us, contact form, software development contact, IT services contact"
                canonical="https://giganxt.com/contact"
              />
              <Contact />
            </>
          } /> {/* Contact page route */}

          <Route path="/blog" element={
            <>
              <SEO 
                title="Blog" 
                description="Explore the GigaNXT Solutions Blog - Insights, updates, and innovations in web development, app development, AI, and technology."
                keywords="tech blog, AI blog, web development blog, app development blog, 25 weeks 25 agents challenge, technology insights"
                canonical="https://giganxt.com/blog"
              />
              <Blog />
            </>
          } /> {/* Blog page route */}

        </Routes>
        <Footer />
      </div>

      <ButtonGradient />
      <ChatBot />
    </>
  );
};

export default App;

