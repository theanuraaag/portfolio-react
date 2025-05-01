import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import IDCard from "../assets/id-card-generator.png"
import NotesApp from "../assets/notes-app.png"
import TicTacToe from "../assets/tic-tac-toe.png"

const projects = [
    {
        id: 1,
        title: "ID Card Generator",
        image: IDCard,
        live: "https://id-card-generator-react.netlify.app/",
        code: "https://github.com/theanuraaag/id-card-generator",
    },
    {
        id: 2,
        title: "Notes App",
        image: NotesApp,
    },
    {
        id: 3,
        title: "Multiplayer Tic Tac Toe",
        image: TicTacToe,
    },
   
];

const Projects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentProjects = projects.slice(startIndex, endIndex);

    const totalPages = Math.ceil(projects.length / cardsPerPage);


    return (
        <div className='py-10'>
            {/* container */}
            <div className='lg:px-30'>
                {/* title  */}
                <div className='flex flex-col lg:flex-row p-6 '>
                    <h1 className='lg:w-1/2 text-5xl font-bold mb-8'>My Projects</h1>
                    <div className='lg:w-1/2 font-medium flex items-center'>
                        <ul className='flex items-center lg:justify-end w-full'>
                            <li className='mr-3 pb-2 border-b-2 border-[#6244c5] text-[#6244c5]'>All projects</li>
                            <li className='mx-3'>Reacts.js</li>
                            <li className='mx-3'>Next.js</li>
                        </ul>
                    </div>
                </div>
                {/* cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-10'>
                    {currentProjects.map((project) => <ProjectCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        live={project.live}
                        code={project.code}
                        
                    />)}
                </div>
                <div className='flex justify-center mb-10 '>
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 border border-gray-400 rounded-l-xl hover:cursor-pointer
                            ${currentPage === 1 ? 'text-gray-400' : 'text-[#6244C5]'}
                            disabled:opacity-50`}>
                        Previous
                    </button>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 border-t border-b border-r border-gray-400 rounded-r-xl hover:cursor-pointer 
                            ${currentPage === totalPages ? 'text-gray-400' : 'text-[#6244C5]'}
                            disabled:opacity-50`}>
                        Next
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Projects