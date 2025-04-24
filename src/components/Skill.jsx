import React, { useState } from 'react'

const Skill = () => {
    const [activeTab, setActiveTab] = useState("experience");
    return (
        <div className='border-2 border-blue-500 '>
            {/* left  */}
            <div className='flex lg:px-30 gap-5'>
                <div className='w-1/2 p-6 border-2'>
                    <h2 className='text-5xl font-bold mb-12 border-2'>Skills & Experience</h2>
                    <p className='mb-4 text-[#5A5A5A]'>My name is Anurag Bhardwaj, and I am a passionate web developer with experience building responsive and user-centric applications. With a solid foundation in computer science through my B.Tech from DTU, combined with three web development internships, I&apos;ve honed my ability to craft intuitive digital experiences.</p>
                    <p className='mb-4 text-[#5A5A5A]'>I specialize in frontend development using React.js, and I have practical knowledge of full stack technologies including Node.js, Express, and MongoDB. I&apos;ve worked with real-time databases and authentication using Firebase, and I enjoy styling interfaces with Tailwind CSS to create clean, modern UI designs.</p>
                    <p className='mb-4 text-[#5A5A5A]'>My core focus is to develop high-performance, dynamic web applications that deliver value to users. From building a Notes App with login functionality to creating a customizable ID Card Generator, I approach every project with creativity, scalability, and usability in mind.</p>
                    <p className='mb-4 text-[#5A5A5A]'>I also follow best coding practices and aim for readable, maintainable code. Whether it&apos;s through contributing to mini-projects or solving 500+ problems on LeetCode, I&apos;m continuously learning and refining my problem-solving skills.</p>
                    <p className='mb-4 text-[#5A5A5A]'>Throughout my journey, I&apos;ve built everything from mini tools to multi-user games like Multiplayer Tic Tac Toe, and this diversity of work has strengthened my adaptability and confidence as a developer. I&apos;m eager to keep growing, stay updated with new technologies, and bring impactful ideas to life in the ever-evolving tech landscape.

                    </p>
                </div>
                {/* right  */}
                <div className='w-1/2 p-6'>
                    <div className='flex rounded-xl border-2 border-[#6244C5] text-xl'>
                        <button className={`py-3 w-1/2 rounded-xl transition-all 
                        ${activeTab === 'experience'
                                ? 'bg-[#6244C5] text-white'
                                : 'bg-white text-black'
                            }`}
                            onClick={() => setActiveTab('experience')}
                        >Experience</button>
                        <button className={`py-3 w-1/2 rounded-xl transition-all 
                        ${activeTab === 'education'
                                ? 'bg-[#6244C5] text-white'
                                : 'bg-white text-black'
                            }`}
                            onClick={() => setActiveTab('education')}>Education</button>
                    </div>
                    <div className='mt-6'>
                        {activeTab === 'experience' ? (
                            <div className='flex flex-wrap'>
                                <div className='w-full md:w-1/2 p-4 '>
                                    <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
                                    <p>2020</p>
                                    <p>Avricus Pvt. Ltd</p>
                                </div>
                                <div className='w-full md:w-1/2 p-4 '>
                                    <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
                                    <p>2020</p>
                                    <p>Avricus Pvt. Ltd</p>
                                </div>
                                <div className='w-full md:w-1/2 p-4'>
                                    <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
                                    <p>2020</p>
                                    <p>Avricus Pvt. Ltd</p>
                                </div>
                            </div>
                        ) : (
                            <div className='flex flex-wrap'>
                                <div className='w-full md:w-1/2 p-4 '>
                                    <h3 className="text-xl font-semibold mb-2">B.Tech Electrical Engineering</h3>
                                    <p>2020-24</p>
                                    <p>Delhi Technological University</p>
                                </div>
                                <div className='w-full md:w-1/2 p-4 '>
                                    <h3 className="text-xl font-semibold mb-2">Class 12 (Computer Science)</h3>
                                    <p>2018-20</p>
                                    <p>GSBV E Block Nand Nagri</p>
                                </div>
                                
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skill