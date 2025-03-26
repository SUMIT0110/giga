import React from 'react'

import PropTypes from 'prop-types';
import { label } from 'framer-motion/client';

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {
  return (
      <div className={`relative p-4 rounded-2xl bg-n-8 
       hover:bg-n-7 active:bg-n-6 ring-1 ring-inset ring-n-5 transition-colors 
      ${classes}`} >


        <figure className="img-box aspect-square rounded-lg mb-4">
            <img 
            src={imgSrc}
             alt={title}
             loading='lazy'
             className='img-cover'
             />
        </figure>

        <div className="flex items-center justify-between gap-4">

            <div>
                <h3 className="text-[22px] from-normal mb-3 ">
                    {title}
                </h3>

                <div className="flex flex-warp items-center   gap-2">
                    {tags.map((label, key) => (
                        <span 
                        key={key} 
                            className="h-8 text-sm text-zinc-400 bg-zinc-50/5 px-3 rounded-lg flex items-center">
                            {label}
                        </span>
                    ))}
                </div>
            </div>

              <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                  <span className="material-symbols-rounded" aria-hidden="true">
                      arrow_outward
                  </span>
              </div>

        </div>

        <a 
        href={projectLink}
        target="_blank"
        className="absolute inset-0 "
        ></a>

    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard
