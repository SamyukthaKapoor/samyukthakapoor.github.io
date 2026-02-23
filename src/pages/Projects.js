import React from 'react';
import { projects } from '../data';
import { ArrowUpRight, Code2 } from 'lucide-react';

const Projects = () => {
    return (
        <div className="relative pt-32 pb-24 px-8 md:px-16 max-w-full mx-auto">
            <div className="mb-24 space-y-10 max-w-3xl animate-reveal">
                <h2 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-none uppercase italic">
                    Engineering <br />
                    <span className="font-serif-personal lowercase italic font-medium text-cyan-electric not-italic">Repository</span>.
                </h2>
                <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
                    Deep dives into data lifecycles, ML diagnostics, and scalable infrastructure. Each project is a solution to a real-world friction point.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
                {projects.map((project, idx) => (
                    <div key={idx} className={`group relative flex flex-col space-y-10 animate-reveal delay-${(idx % 3) * 100}`}>
                        <div className="image-lens bg-slate-900 shadow-2xl aspect-[16/10]">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-x-8 bottom-8 flex justify-between items-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="space-y-1">
                                    {project.isGithub ? <Code2 className="w-8 h-8 text-white/20" /> : <Globe className="w-8 h-8 text-white/20" />}
                                </div>
                                <div className="flex space-x-3">
                                    <a href={project.link} target="_blank" rel="noreferrer" className="p-4 bg-white text-black rounded-full hover:bg-cyan-electric transition-all shadow-2xl">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 space-y-8">
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <span className="w-8 h-[1px] bg-cyan-electric" />
                                    <span className="text-[10px] font-black text-cyan-electric uppercase tracking-widest">{project.impact}</span>
                                </div>
                                <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter leading-none group-hover:text-cyan-electric transition-colors">
                                    {project.title}
                                </h3>
                            </div>

                            <p className="text-slate-400 text-lg leading-relaxed font-medium">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-slate-300 text-[9px] uppercase font-black tracking-widest">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Internal Globe Icon Placeholder
const Globe = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
);

export default Projects;
