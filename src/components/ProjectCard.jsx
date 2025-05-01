import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ image, title, live, code }) => {
  return (
    <div className='relative w-full max-w-sm m-auto group overflow-hidden k rounded-md'>
      <img src={image} alt={title} className='w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110' />
      <div className='absolute inset-0 bg-[#6244C5]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
        <a href={live} target='_blank' className='text-white text-2xl hover:scale-110 transition-transform' title="View Project">
          <FaExternalLinkAlt />
        </a>
        <a href={code} target='_blank' className='text-white text-2xl hover:scale-110 transition-transform' title="View Code">
          <FaGithub />
        </a>
      </div>
      <div className='mt-4 py-2 text-center text-white bg-[#6244C5]'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-sm '>Short project description</p>
      </div>
    </div>
  )
}

export default ProjectCard