import React from 'react';
import Section from './Section';
import Heading from "./Heading";
import { Work } from "../constants";
import ProjectCard from "./ProjectCard";



const Project = () => {
  return (
    <Section id="project">
        <div className="container relative z-2">
           <Heading
             className="md:max-w-md lg:max-w-2xl"
             title="Project"
           />

           <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))]">
                  {Work.map(({imgSrc, title, tags, projectLink},
                    key) => (
                        <ProjectCard 
                         key={key}
                         imgSrc={imgSrc}
                         title={title}
                         tags={tags}
                         projectLink={projectLink}
                        />
                  ))}
           </div>



        </div>
    </Section>
  )
}

export default Project