import { useState } from "react";
import { benefits } from "../constants"; // Use benefits array
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Model from "./Model";

const Benefits = () => {
  const [showModel, setShowModel] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  const handleExploreMore = (benefitId) => {
    const benefitData = benefits.find((item) => item.id === benefitId);
    if (benefitData) {
      setSelectedBenefit(benefitData);
      setShowModel(true);
    }
  };

  return (
    <Section id="Services">
      <div className="container relative z-1 mx-auto px-4">
        {/* Updated Heading with "Services" label */}
        <Heading 
          className="md:max-w-md lg:max-w-2xl mx-auto text-center" 
          tag="Services"  // Added Services label
          title="Our Services" 
        />

        {/* Benefits Grid */}
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="relative p-0.5 bg-no-repeat bg-cover overflow-hidden group rounded-lg shadow-lg md:max-w-[22rem] w-full sm:w-[20rem] lg:w-[24rem]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}

              key={item.id}
            >
              {/* Content inside card */}
              <div className="relative z-2 flex flex-col min-h-[20rem] p-6 bg-opacity-90 group-hover:bg-opacity-100 transition-all duration-300 rounded-lg">
                <h5 className="h5 mb-4 text-center">{item.title}</h5>
                <p className="body-2 mb-5 text-n-3 text-center">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-6 drop-shadow-lg"
                  />
                  <button
                    className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider"
                    onClick={() => handleExploreMore(item.id)}
                  >
                    Explore more
                  </button>
                  <Arrow />
                </div>
              </div>

              {/* Background image hover effect */}
              <div className="absolute inset-0.5 bg-n-8 rounded-lg" style={{ clipPath: "url(#benefits)" }}>
                <div className="absolute inset-0 opacity-20 group-hover:opacity-70 transition-opacity duration-500">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-50"
                    />
                  )}
                </div>
              </div>

              {item.light && <GradientLight />}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
      <Model
        isVisible={showModel}
        handleClose={() => {
          setShowModel(false);
          setSelectedBenefit(null);
        }}
        data={selectedBenefit}
      />
    </Section>
  );
};

export default Benefits;