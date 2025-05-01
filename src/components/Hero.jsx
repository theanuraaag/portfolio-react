import React from 'react'
import BackgroundHero from "../assets/bg-header.png"
import HeroImg from "../assets/HeroImg.svg"

const Hero = () => {
    return (
        <div className='bg-[#FAFAFB] h-screen flex flex-col lg:flex-row items-center overflow-hidden ' >
            <img
                src={BackgroundHero}
                alt="Background"
                className="absolute top-0 left-0 w-[500px] h-[400px]  pointer-events-none z-0 object-cover"
            />

            <div className='flex flex-col relative z-10 text-left mt-20 lg:mt-0 lg:ml-30 '>
                <h3 className='text-xl lg:text-3xl font-semibold'>I&apos;am</h3>
                <h1 className='text-4xl/normal lg:text-6xl/normal font-bold'>Anurag Bhardwaj</h1>
                <h2 className='text-2xl lg:text-4xl font-semibold'>Frontend Web Developer</h2>
                <button className='bg-[#6244C5] w-fit text-white font-normal text-base py-4 px-6 rounded-md mt-10 hover:bg-[#6958a2] cursor-pointer '>Download Resume</button>
            </div>
            <div className='w-[50%] mt-30 lg:mt-0 lg:ml-5'>
                <img src={HeroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero