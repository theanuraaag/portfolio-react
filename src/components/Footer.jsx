import React from 'react'
import { RiCopyrightLine } from "react-icons/ri";


const Footer = () => {
  return (
    <div className='flex items-center px-20 py-10 bg-black text-white justify-between'>
      <div className='px-10 text-left'>
        <p className='flex items-center'>
          <RiCopyrightLine/> <a href='https://www.linkedin.com/in/theanuraaag/' target="_blank" className='text-yellow-300 underline mx-2'>Anurag Bhardwaj  </a><span> | All rights reserved</span>
        </p>
        <p>Empowering your digital journey since 2025.</p>
      </div>
      <div className='px-10 text-right'>
        <p> Designed and Developed by  <a href='https://www.linkedin.com/in/theanuraaag/' target="_blank" className='text-yellow-300 underline mx-2'>Anurag Bhardwaj  </a></p>
        <p>Pioneering innovative web solutions for modern businesses.</p>
      </div>
    </div>
  )
}

export default Footer