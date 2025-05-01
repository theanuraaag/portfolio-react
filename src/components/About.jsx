import React from 'react'
import AboutImg from "../assets/about1.jpg"
import AboutImg2 from "../assets/about2.jpg"

const About = () => {
    return (
        <div className=' flex flex-col lg:flex-row my-20'>
            {/* left side  */}
            <div className='w-full lg:w-1/2 p-6 lg:pl-30'>
                <div className='flex mb-5'>
                    <div>
                        <h2 className='text-8xl font-bold'>2+</h2>
                        <h5 className='text-xl tracking-[30px] font-semibold'>Years</h5>
                    </div>
                    <h3 className='text-2xl/normal font-semibold'>Experience in Frontend Web Development</h3>
                </div>
                <p className='mb-4 text-base text-[#5A5A5A]'>I'm Anurag Bhardwaj, a passionate and detail-oriented Frontend Developer with over two years of hands-on experience building scalable and responsive web applications. I specialize in React.js, Tailwind CSS, and modern JavaScript frameworks, and I&apos;m proficient in full stack development with Node.js, Express, and MongoDB.</p>
                <p className='mb-4 text-[#5A5A5A]'>With a strong foundation in both design and logic, I aim to deliver user-first interfaces that not only look great but also function smoothly. Whether it&apos;s building a dynamic notes app, a multiplayer game, or an ID card generator with user customization, my goal is to turn ideas into intuitive and efficient digital products.</p>
                <div className='mb-4'>
                    <h3 className='text-xl font-semibold mb-2'>What I Offer</h3>
                    <ul className='text-[#5A5A5A] list-disc ml-5'>
                        <li>Clean, maintainable, and scalable code</li>
                        <li>Fully responsive designs across devices</li>
                        <li>Fast, SEO-friendly, and optimized websites </li>
                        <li>Affordable and on-time delivery</li>
                    </ul>
                </div>
                <p className='mb-4 text-[#5A5A5A]'>My experience spans across real-world internships, personal projects, and leadership roles in technical societies. I&apos;ve developed solutions for a variety of domains — from education and productivity tools to gaming interfaces and blogging platforms.

                </p>
                <div className='mb-4'>
                    <h3 className='text-xl font-semibold mb-2'>Tech Stack:</h3>
                    <p className='mb-4 text-[#5A5A5A]'>
                        React.js, JavaScript (ES6+), Tailwind CSS, Node.js, Express, MongoDB, Firebase, HTML, CSS, C++, Python, Git</p>
                </div>
            </div>

            {/* right side  */}
            <div className='w-full lg:w-1/2 p-6 lg:pr-30'>
                <div className='flex flex-col md:flex-row gap-5 mb-6'>
                    <img src={AboutImg} className='w-full md:w-1/2 rounded-2xl' alt="" />
                    <img src={AboutImg2} className='w-full md:w-1/2 rounded-2xl' alt="" />
                </div>
                <div className='text-xl font-semibold mb-2'>Projects Completed</div>
                <p className='mb-4 text-[#5A5A5A]'>Throughout my academic journey and web development internships, I&apos;ve built and contributed to over 15 projects — from dynamic single-page apps to full-stack platforms. These include tools like a Notes App, a Multiplayer Tic-tac-toe game, and an ID Card Generator with customization features.
                    I&apos;ve worked with real-world teams to develop responsive, interactive, and user-friendly solutions using technologies like React.js, Node.js, and MongoDB.</p>
                <div className='text-xl font-semibold mb-2'>Collaborative Experience</div>
                <p className='mb-4 text-[#5A5A5A]'>3 Web Development Internships
                    While I haven&apos;t freelanced professionally yet, I&apos;ve gained solid real-world experience through internships at Avricus Pvt. Ltd., Ezinore Pvt. Ltd., and USIP-DTU. I&apos;ve collaborated with teams to develop scalable applications and enhance existing platforms, contributing both frontend and backend features.

                    These experiences strengthened my skills in clean coding, agile development, and client-oriented problem-solving — and I&apos;m excited to bring that into professional or freelance environments going forward.</p>
            </div>
        </div>
    )
}

export default About