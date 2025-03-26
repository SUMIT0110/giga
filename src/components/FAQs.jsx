"use client";

import React from 'react';
import Section from './Section';
import Heading from './Heading';
import { faqs_items } from '../constants';
// import { div } from 'framer-motion/client';
import { PlusIcon, MinusIcon } from "../assets";
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { gradient } from "../assets";
 


const AccordionItem =({ question, answer }) => {
  const [ isOpen, setIsOpen ] = React.useState(false);
  return (
     < div className = 'py-7 border-b border-white/30' 
       onClick={() => setIsOpen(!isOpen)}
     >
        <div className='flex items-center '>
          <span className='flex-1 text-lg font-bold'>{question}</span>
          {isOpen ? <img src={MinusIcon}/> : <img src={PlusIcon} />}
       </div>
       <AnimatePresence>
          {isOpen && (
              <motion.div
                
                initial={{
                  opacity:0,
                  height:0,
                  marginTop:0,
                }}
                animate={{
                  opacity:1,
                  height: 'auto',
                  marginTop: '16px'
                }}
                exit={{
                  opacity:0,
                  height:0,
                  marginTop: 0,
                }}
              >
                {answer}
              </motion.div>

          )}  
      </AnimatePresence>
    </div >
  );
};


const FAQs = () => {
  return (
    <Section 
      className="overflow-hidden pt-[12rem]     "
          crosses
          crossesOffset="lg:translate-y-[5.25rem]"
          customPaddings
          id="FAQs"
    >
        
      <div className="container -mt-[6rem] py-[72px]  ">
            <Heading 
                title="Frequently asked Question"
            />
        <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
          <img
            className="w-full"
            src={gradient}
            width={942}
            height={942}
            alt="Gradient"
          />
      </div>
      </div>
        

        <div className='mt-12 max-w-[642px] mx-auto relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15 '>
          {faqs_items.map(({ question, answer }) => (

            <AccordionItem question={question} answer={answer} key={question} />
                     
          ))}
        </div>
        
        
      </div>

    </Section>
  )
}

export default FAQs