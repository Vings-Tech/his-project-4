'use client';

import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 w-full border-t border-gray-200 bg-white/50 backdrop-blur-xl py-12 mt-auto">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">

                <div className="flex flex-col md:flex-row justify-between items-center gap-10">

                    {/* Left Side */}
                    <div className="flex flex-col items-center md:items-start gap-4">

                        <div className="flex items-center gap-3 group">
                            <div className="flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                                <img
                                    src="/icon.png"
                                    alt="VingsTech Logo"
                                    className="h-10 w-auto object-contain"
                                />
                            </div>

                            <h2 className="text-xl font-black tracking-tight text-gray-800 uppercase">
                                VINGS<span className="text-blue-600">TECH</span>
                            </h2>
                        </div>

                        <div className="text-center md:text-left">
                            <p className="text-gray-500 font-medium italic leading-tight">
                                "The best code is the code that goes unnoticed,
                                <br />
                                because it works so flawlessly."
                            </p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col gap-4 items-center md:items-end w-full md:w-auto">

                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                            Chat with Developer
                        </h3>

                        <div className="flex items-center justify-center md:justify-end gap-4 w-full md:w-auto">

                            <a
                                href="https://www.instagram.com/vingstech.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-2xl text-gray-600 hover:text-blue-600 transition-all shadow-sm"
                            >
                                <Instagram size={18} />
                                <span className="text-sm font-bold">Instagram</span>
                            </a>

                            <a
                                href="https://wa.me/918778264166"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-2xl text-gray-600 hover:text-green-600 transition-all shadow-sm"
                            >
                                <MessageCircle size={18} />
                                <span className="text-sm font-bold">WhatsApp</span>
                            </a>

                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">

                    <p className="text-xs font-medium text-gray-500 text-center sm:text-left">
                        © {new Date().getFullYear()} Vings Tech. Crafted with passion.
                    </p>

                    <img
                        src="/icon.png"
                        alt="Vings Tech Logo"
                        className="h-10 w-auto object-contain"
                    />

                    <p className="text-xs font-medium text-gray-500 text-center sm:text-right">
                        Powered by Vings Tech Projects
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;