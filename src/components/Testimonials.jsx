"use client";
// import { div } from "framer-motion/client";
import { motion } from "framer-motion";
import { testimonials } from "../constants";
import { twMerge } from "tailwind-merge";
import Heading from "./Heading";
import Section from "./Section";
import React from "react";


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6,9);


const TestimonialsCloumn = (props) => {
    const { className, testimonials, duration } = props;
    return(
        <div className={className}>
    <motion.div animate={{
        translateY: "-50%",
    }}
    transition={{
        duration: duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
    }}
    className=" bg-n-11 flex flex-col gap-6 pb-6">
       
       {[...new Array(2)].fill(0).map((_, index) =>(
         <React.Fragment key={index}>
               {testimonials.map(({ text, imageSrc, name, username }, index) => (
                   <div className="card" key={index}>
                       <div>{text}</div>
                       <div className="flex items-center gap-2 mt-5">
                           <img
                               src={imageSrc}
                               alt={name}
                               width={40}
                               height={40}
                               className="h-10 w-10 rounded-full"
                           />
                           <div className="flex flex-col">
                               <div className="font-medium tracking-tight leading-5">{name}</div>
                               <div className="leading-5 tracking-tighter">{username}</div>
                           </div>
                       </div>
                   </div>
               ))}

         </React.Fragment>
       ))}  
    </motion.div>
    </div>
)};



const Testimonials = () => {
  return ( 

      <Section className="overflow-hidden pt-[12rem] -mt-[5.25rem]"
          crosses
          crossesOffset="lg:translate-y-[5.25rem]"
          customPaddings
          id="Testimonials">
    
    
     <div className="container ">
            <div className="container">
                <Heading
                    tag="Testimonials"
                      title="What our Customer say"
                      text="Testimonials are a powerful way to build trust and credibility with your audience by showcasing positive feedback and experiences from your customers. This section highlights real people sharing their thoughts, satisfaction, and success stories related to your products or services."
                />     
     </div>
     </div>
          <div className=" bg-n-8 flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.25)5%,rgba(0,0,0,0.75)75%,transparent)] max-h-[738px] overflow-hidden">
            <TestimonialsCloumn testimonials={firstColumn} duration={15}/>
            <TestimonialsCloumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsCloumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>     
      </Section>
    

  );
};

export default Testimonials