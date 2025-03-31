import React from "react";
import Section from "./Section";
import { socialMedia } from "../constants";
import styles from "../constants/style";
import { logo } from "../assets";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <Section crosses colorfulBorder className="!py-10 w-full px-6 md:px-16" id="footer">
      <div className={`${styles.flexCenter} ${styles.paddingY} flex-col w-full`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className="flex-1 flex flex-col justify-start mr-10"
          >
            <img
              src={logo}
              alt="Giganxt"
              className="w-[250px] h-[100px] object-contain " 
              
            />
            <p className={`${styles.paragraph} ml-4 mt-4 max-w-[312px]`}>
              Empower Your Business With Giganxt Solution.
            </p>
          </div>

          <div className="flex-[1.5] w-full flex flex-wrap justify-start md:gap-20 gap-[100px] md:mt-0 mt-10">


            {/* Services Column */}

            {/* Company Column */}
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-bold text-[20px] leading-[27px] text-white">
                Company
              </h4>
              <ul className="list-none mt-4">
                <li className="font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                  <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
                </li>
      
              </ul>
            </div>
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-bold text-[20px] leading-[27px] text-white">
                Legal & Policies
              </h4>
              <ul className="list-none mt-4">
                <li className="font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                  <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link> {/* Use Link for navigation with scroll to top */}
                </li>
                <li className="font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                  <Link to="/terms-conditions" onClick={() => window.scrollTo(0, 0)}>Terms & Conditions</Link> {/* Use Link for navigation with scroll to top */}
                </li>
              </ul>
            </div>
            

            {/* Contact Column */}
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-bold text-[20px] leading-[27px] text-white">
                Contact Us
              </h4>
              <ul className="list-none mt-4">
                <li className="font-normal text-[16px] leading-[24px] text-dimWhite  mb-4">
                  contact@giganxt.com
                </li>
                <li className="font-normal text-[16px] leading-[24px] text-dimWhite ">
                  Chhatrapati Sambhaji Nagar,<br/> Maharashtra, India
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-t-[#3F3E45]">
          <p className="text-center text-[15px] leading-[27px] text-white">
            Copyright Ⓒ {new Date().getFullYear()} Giganxt Solutions. All Rights Reserved.
          </p>

          <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[25px] h-[25px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                  }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
