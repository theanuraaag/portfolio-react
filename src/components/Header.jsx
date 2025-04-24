import React from 'react'

const Header = () => {
    return (
        <header className="w-full py-4 bg-white shadow-md">
            <nav className="flex justify-center items-center">
                <ul className="flex gap-10 text-lg font-medium text-gray-800">
                    <li className="cursor-pointer hover:text-[#6244C5] transition">Home</li>
                    <li className="cursor-pointer hover:text-[#6244C5] transition">About</li>
                    <li className="cursor-pointer hover:text-[#6244C5] transition">Skills</li>
                    <li className="cursor-pointer hover:text-[#6244C5] transition">Projects</li>
                    <li className="cursor-pointer hover:text-[#6244C5] transition">Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
