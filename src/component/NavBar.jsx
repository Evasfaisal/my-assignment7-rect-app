import React from 'react';

const NavBar = () => {
    return (
        <div>
     
            <nav className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="text-xl font-bold text-black">
                        CS — Ticket System
                    </div>

                    {/* Menu Items */}
                    <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
                        <li><a href="#" className="hover:text-black">Home</a></li>
                        <li><a href="#" className="hover:text-black">FAQ</a></li>
                        <li><a href="#" className="hover:text-black">Changelog</a></li>
                        <li><a href="#" className="hover:text-black">Blog</a></li>
                        <li><a href="#" className="hover:text-black">Download</a></li>
                        <li><a href="#" className="hover:text-black">Contact</a></li>
                    </ul>

                    {/* Button */}
                    <a
                        href="#"
                        className="ml-6 inline-flex items-center px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90"
                    >
                        New Ticket
                    </a>
                </div>
            </nav>

        </div>
    );
};

export default NavBar;