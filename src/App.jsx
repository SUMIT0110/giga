import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Project from "./components/Project";
import About from "./Pages/About"; // Import the About page
import ChatBot from "./components/ChatBot"; // Import the ChatBot component
import SEO from "./components/SEO"; // Import the SEO component



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
              <Benefits />
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
                canonical="https://giganxt.me/about"
              />
              <About />
            </>
          } /> {/* About page route */}
        </Routes>
        <Footer />
      </div>

      <ButtonGradient />
      <ChatBot />
    </>
  );
};

export default App;

