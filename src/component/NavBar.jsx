import React from 'react';
import Container from './Container';

const NavBar = () => {
    return (
        <div>
     
               <Container>
            <nav className="shadow-b-sm border-b border-gray-200 ">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">

                            <div className="text-xl font-bold text-black">
                                CS — Ticket System
                            </div>


                            <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
                                <li><a href="#" className="hover:text-black">Home</a></li>
                                <li><a href="#" className="hover:text-black">FAQ</a></li>
                                <li><a href="#" className="hover:text-black">Changelog</a></li>
                                <li><a href="#" className="hover:text-black">Blog</a></li>
                                <li><a href="#" className="hover:text-black">Download</a></li>
                                <li><a href="#" className="hover:text-black">Contact</a></li>
                            </ul>


                            <a
                                href="#"
                                className=" sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90"
                            >
                                <span className='mr-2 text-2xl'>+</span>   New Ticket
                            </a>


                          
                        </div>
                    </div>
            </nav>
               </Container>


        </div>
    );
};

export default NavBar;