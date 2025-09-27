

import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Container from "./Container";

const Footer = () => {
    return (

        <div>
                <footer className="bg-black text-gray-400">
            <Container>

                    <div className=" px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">

                        <div>
                            <h2 className="text-white text-lg font-semibold mb-3">
                                CS — Ticket System
                            </h2>
                            <p className="text-sm ">
                                Our customer support ticket system helps users report issues, track progress, and receive timely updates. Each ticket stores details like  description, priority, and status. Agents can respond, resolve, or escalate requests. Customers stay informed and satisfied while businesses streamline workflow, improve response time, and maintain service quality effectively.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-medium mb-3">Company</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">About Us</a></li>
                                <li><a href="#" className="hover:text-white">Our Mission</a></li>
                                <li><a href="#" className="hover:text-white">Contact Sales</a></li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="text-white font-medium mb-3">Services</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">Products & Services</a></li>
                                <li><a href="#" className="hover:text-white">Customer Stories</a></li>
                                <li><a href="#" className="hover:text-white">Download Apps</a></li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="text-white font-medium mb-3">Information</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:text-white">Join Us</a></li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="text-white font-medium mb-3">Social Links</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2 hover:text-white">
                                    <FaTwitter size={16} /> @CS — Ticket System
                                </li>
                                <li className="flex items-center gap-2 hover:text-white">
                                    <FaLinkedin size={16} /> @CS — Ticket System
                                </li>
                                <li className="flex items-center gap-2 hover:text-white">
                                    <FaFacebook size={16} /> @CS — Ticket System
                                </li>
                                <li className="flex items-center gap-2 hover:text-white">
                                    <MdEmail size={16} /> support@cst.com
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-6 pb-4 text-center">
                        <p className="text-xs text-gray-500">
                            © 2025 CS — Ticket System. All rights reserved.
                        </p>
                    </div>
            </Container>
                </footer>
        </div>

    );
};

export default Footer;
