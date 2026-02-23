import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Linkedin, Github, Menu, X, Command } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Personal Story', path: '/' },
        { name: 'Engineering Projects', path: '/projects' },
        { name: 'Career Trajectory', path: '/experience' },
        { name: 'Research', path: '/research' },
        { name: 'Community', path: '/community' },
        { name: 'Connect', path: '/connect' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`glass-premium rounded-full px-8 py-3 flex justify-between items-center transition-all ${scrolled ? 'border-white/20' : 'border-white/5'}`}>
                    <NavLink to="/" className="flex items-center space-x-3 group">
                        <div className={`p-2 bg-cyan-electric/10 rounded-xl transition-all group-hover:bg-cyan-electric/20 group-hover:rotate-12`}>
                            <Command className="w-5 h-5 text-cyan-electric" />
                        </div>
                        <span className="font-serif-personal text-lg font-medium tracking-tight text-white group-hover:text-cyan-electric transition-colors">
                            Samyuktha Kapoor
                        </span>
                    </NavLink>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isActive ? 'text-white bg-cyan-electric/20 border border-cyan-electric/30' : 'text-slate-400 hover:text-white'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="w-[1px] h-4 bg-white/10 mx-4" />
                        <div className="flex items-center space-x-4">
                            <a href="https://github.com/SamyukthaKapoor" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/samyukthakapoor/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl p-10 animate-fade-in flex flex-col">
                    <div className="flex justify-between items-center mb-12">
                        <span className="font-serif-personal text-2xl text-white">Samyuktha</span>
                        <button onClick={() => setIsOpen(false)} className="text-white"><X /></button>
                    </div>
                    <div className="flex flex-col space-y-6 flex-grow">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className="text-3xl font-black text-white hover:text-cyan-electric uppercase tracking-tighter"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                    <div className="pt-10 border-t border-white/10 flex justify-center space-x-8">
                        <a href="https://github.com/SamyukthaKapoor" target="_blank" rel="noreferrer" className="text-slate-400">
                            <Github className="w-8 h-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/samyukthakapoor/" target="_blank" rel="noreferrer" className="text-slate-400">
                            <Linkedin className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
