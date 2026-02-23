import React from 'react';
import { portfolioData } from '../data';

const Footer = () => {
    return (
        <footer className="relative z-10 py-12 px-6 border-t border-white/5 bg-slate-950/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-slate-500 text-xs font-black uppercase tracking-[0.3em]">
                <div className="flex items-center space-x-4">
                    <span className="text-white font-serif-personal lowercase italic text-lg leading-none tracking-tight">samyuktha.</span>
                    <span className="hidden md:inline text-white/10">|</span>
                    <span>&copy; {new Date().getFullYear()} ALL_RIGHTS_RESERVED</span>
                </div>

                <div className="flex items-center space-x-12">
                    <a href={portfolioData.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-electric transition-colors">LINKEDIN</a>
                    <a href={portfolioData.links.github} target="_blank" rel="noreferrer" className="hover:text-cyan-electric transition-colors">GITHUB</a>
                    <a href={`mailto:${portfolioData.email}`} className="hover:text-cyan-electric transition-colors">EMAIL</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
