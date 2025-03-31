import React from "react";
import Header from "../components/Header";
import { privacyData } from "../constants";
import Heading from "../components/Heading";
import Section from "../components/Section";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />

      <Section>
        <div className="mt-3 min-h-screen bg-black text-white py-16 px-6 md:px-16 flex items-center justify-center">
          {/* Glassmorphic Card */}
          <div className="relative max-w-4xl mx-auto p-10 rounded-2xl shadow-lg border border-gray-700 bg-opacity-10 backdrop-blur-lg bg-white/5">
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 w-full h-full rounded-2xl border border-gray-500 blur-xl opacity-20"></div>

            {/* Main Title */}
            <Heading
              className="md:max-w-md lg:max-w-2xl text-blue-400"
              title="Privacy Policy"
            />

            {privacyData.map((section, index) => (
              <div key={index} className="mb-8">
                {/* Section Title */}
                <h2 className="text-2xl font-semibold text-blue-400 mt-6">
                  {section.title}
                </h2>
                
                {/* Section Content */}
                <p className="mt-2 text-gray-300 leading-relaxed">
                  {section.content}
                </p>

                {section.list && (
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-400">
                    {section.list.map((item, i) => (
                      <li key={i} className="text-lg">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default PrivacyPolicy;
