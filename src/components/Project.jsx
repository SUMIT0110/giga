import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { Work } from "../constants";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <Section id="projects">
      <div className="container mx-auto px-4 max-w-screen-xl">
        {/* Updated Heading with "Projects" label */}
        <Heading 
          tag="Projects"  // Added Projects label
          title="Our Projects" 
          className="text-center text-white mb-8" 
        />

        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-items-center">
          {Work.map(({ imgSrc, title, client, category, tags, techStack, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              client={client}
              category={category}
              tags={tags}
              techStack={techStack}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Project;