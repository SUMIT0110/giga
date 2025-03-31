import React from "react";
import styles from "../constants/style"; // Import your styles if needed

const About = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-black-100 text-white`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Giganxt Solutions</h1>

        <p className="text-lg mb-6">
          At <span className="font-bold">Giganxt Solutions</span>, we are passionate about leveraging cutting-edge technology to transform businesses. As a dynamic IT service company, we specialize in <span className="font-bold">web development, app development, software solutions, and AI-driven innovations</span>. Our mission is to empower businesses with scalable, efficient, and high-performance digital solutions tailored to their unique needs.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Who We Are</h2>
        <p className="text-lg mb-6">
          Founded with a vision to bridge the gap between technology and business growth, <span className="font-bold">Giganxt Solutions</span> is a team of highly skilled professionals dedicated to delivering excellence. We bring together creativity, innovation, and technical expertise to craft solutions that drive success.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Services</h2>
        <ul className="list-disc list-inside mb-6">
          <li className="text-lg mb-2"><span className="font-bold">Web Development</span> – Stunning, responsive, and user-friendly websites that enhance your brand’s online presence.</li>
          <li className="text-lg mb-2"><span className="font-bold">App Development</span> – High-performance mobile applications designed for seamless user experiences.</li>
          <li className="text-lg mb-2"><span className="font-bold">Software Development</span> – Customized software solutions to streamline operations and enhance efficiency.</li>
          <li className="text-lg mb-2"><span className="font-bold">AI & Data Science</span> – Cutting-edge AI solutions, including NLP, computer vision, and automation tools.</li>
          <li className="text-lg mb-2"><span className="font-bold">Digital Marketing</span> – Strategic marketing solutions to enhance brand visibility and customer engagement.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside mb-6">
          <li className="text-lg mb-2"><span className="font-bold">Innovation-Driven Approach</span> – We stay ahead of the curve by integrating the latest technology trends.</li>
          <li className="text-lg mb-2"><span className="font-bold">Client-Centric Solutions</span> – Your business goals are our priority, and we tailor solutions to meet your unique needs.</li>
          <li className="text-lg mb-2"><span className="font-bold">Experienced Team</span> – Our team comprises skilled professionals with expertise in various technological domains.</li>
          <li className="text-lg mb-2"><span className="font-bold">Global Reach</span> – While we are rooted in innovation, we serve clients worldwide, helping businesses scale efficiently.</li>
          <li className="text-lg mb-2"><span className="font-bold">Affordable Excellence</span> – High-quality solutions at competitive prices, ensuring maximum ROI.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Vision</h2>
        <p className="text-lg mb-6">
          To be a global leader in IT solutions, revolutionizing industries through AI, software development, and digital transformation.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p className="text-lg mb-6">
          To provide businesses with cutting-edge technology solutions that drive growth, efficiency, and long-term success.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Let’s Build Something Great Together!</h2>
        <p className="text-lg mb-6">
          Whether you're a startup looking to establish a digital presence or a growing business in need of advanced AI solutions, <span className="font-bold">Giganxt Solutions</span> is your trusted partner. Let’s innovate, scale, and succeed together!
        </p>

        <div className="text-center mt-10">
          <p className="text-lg mb-2">📩 <span className="font-bold">Get in Touch:</span> contact@giganxt.com</p>
          <p className="text-lg mb-2">🌐 <span className="font-bold">Website:</span> www.giganxt.com</p>
        </div>
      </div>
    </div>
  );
};

export default About;
