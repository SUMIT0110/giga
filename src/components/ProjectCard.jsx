import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, client, category, tags, techStack, projectLink, classes }) => {
    return (
        <div
            className={`relative p-3 bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-[1.02] max-w-sm w-full h-[360px] flex flex-col border border-gray-700 ${classes}`}
        >
            {/* Project Image */}
            <div className="relative w-full h-44 rounded-lg overflow-hidden">
                <img
                    src={imgSrc}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-500">
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 transition-all"
                    >
                        View Project
                    </a>
                </div>
            </div>

            {/* Project Details */}
            <div className="mt-3 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{client} | {category}</p>

                    {/* Tags */}
                    <div className="mt-2 flex flex-wrap gap-2">
                        {tags.map((label, index) => (
                            <span key={index} className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-lg">
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-2">
                    <h4 className="text-sm font-semibold text-gray-300">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {techStack.map((tech, index) => (
                            <span key={index} className="px-3 py-1 text-xs bg-[#28223f] text-white rounded-lg">
                            {tech} 
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    techStack: PropTypes.array.isRequired,
    projectLink: PropTypes.string.isRequired,
    classes: PropTypes.string,
};

export default ProjectCard;