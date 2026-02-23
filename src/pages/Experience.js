import React from 'react';
import { experience, education } from '../data';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
    return (
        <div className="relative pt-32 pb-24 px-8 md:px-16 max-w-full mx-auto">
            <div className="mb-24 grid lg:grid-cols-2 gap-16 items-end animate-reveal">
                <div className="space-y-10">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-none uppercase italic">
                        Career <br />
                        <span className="font-serif-personal lowercase italic font-medium text-cyan-electric not-italic">Trajectory</span>.
                    </h2>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
                        A precision engineered progression across distributed data systems and architectural research, focused on scaling intelligence from local development to cloud production.
                    </p>
                </div>

                {/* Career Velocity Visualization */}
                <div className="hidden lg:block relative group">
                    <svg viewBox="0 0 400 200" className="w-full h-auto drop-shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                        {/* Grid Lines */}
                        <line x1="0" y1="180" x2="400" y2="180" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                        <line x1="0" y1="130" x2="400" y2="130" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                        <line x1="0" y1="80" x2="400" y2="80" stroke="white" strokeOpacity="0.05" strokeWidth="1" />

                        {/* Velocity Curve */}
                        <path
                            d="M 0 180 Q 100 170, 150 140 T 250 80 T 400 20"
                            fill="none"
                            stroke="url(#grad-velocity)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            className="animate-pulse"
                        />

                        {/* Pulsing Nodes */}
                        <circle cx="150" cy="140" r="4" fill="#06b6d4" className="animate-bounce" />
                        <circle cx="250" cy="80" r="4" fill="#06b6d4" />
                        <circle cx="390" cy="25" r="5" fill="#06b6d4" className="animate-ping" />

                        {/* Labels */}
                        <text x="5" y="170" fill="white" fontSize="8" fontWeight="900" opacity="0.3" className="uppercase tracking-widest">Foundation</text>
                        <text x="155" y="130" fill="#06b6d4" fontSize="10" fontWeight="900" className="uppercase tracking-tighter">Scale_Impact</text>
                        <text x="320" y="45" fill="white" fontSize="8" fontWeight="900" opacity="0.3" className="uppercase tracking-widest">SOTA_Engineering</text>

                        <defs>
                            <linearGradient id="grad-velocity" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="absolute inset-x-0 -bottom-8 flex justify-between px-4 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                        <span>Systems_Growth</span>
                        <span>2021 to Present</span>
                    </div>
                </div>
            </div>

            <div className="space-y-32">
                {experience.map((exp, idx) => (
                    <div key={idx} className="relative group animate-reveal">
                        <div className="grid md:grid-cols-12 gap-12 items-start">

                            {/* Date & Meta */}
                            <div className="md:col-span-4 flex flex-col items-start space-y-4 pt-4">
                                <div className="px-4 py-2 bg-cyan-electric/10 border border-cyan-electric/20 rounded-full text-cyan-electric text-xs font-black tracking-[0.2em] uppercase">
                                    {exp.period}
                                </div>
                                <div className="flex items-center space-x-2 text-slate-500 text-[10px] font-black uppercase tracking-widest pl-4 border-l border-white/10">
                                    <MapPin className="w-3 h-3 text-cyan-electric" />
                                    <span>{exp.location || 'Remote'}</span>
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="md:col-span-8 glass-premium rounded-[3.5rem] p-12 hover:border-cyan-electric/30 transition-all group-hover:shadow-cyan-electric/5 relative overflow-hidden">
                                {/* Subtle Background Data Grain */}
                                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px]" />

                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-10 gap-6">
                                        <div className="space-y-3">
                                            <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none group-hover:text-cyan-electric transition-colors">
                                                {exp.role}
                                            </h3>
                                            <p className="text-white font-serif-personal text-xl italic opacity-50">{exp.company}</p>
                                        </div>
                                        <div className="p-5 bg-white/5 rounded-3xl text-white transform group-hover:rotate-12 group-hover:bg-cyan-electric/20 transition-all">
                                            <Briefcase className="w-8 h-8 text-cyan-electric" />
                                        </div>
                                    </div>

                                    <ul className="grid gap-6 pl-4 border-l border-white/5">
                                        {exp.achievements.map((ach, i) => (
                                            <li key={i} className="group/item flex items-start">
                                                <div className="mt-2.5 w-1.5 h-1.5 bg-cyan-electric rounded-full mr-5 flex-shrink-0 opacity-20 group-hover/item:opacity-100 transition-opacity" />
                                                <span className="text-slate-400 text-lg leading-relaxed font-bold group-hover/item:text-slate-200 transition-colors lowercase tracking-tight">{ach}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-48 pt-32 border-t border-white/5">
                <div className="flex items-center space-x-4 mb-16">
                    <h3 className="text-xs uppercase tracking-[0.4em] font-black text-slate-500 italic">Academic_Foundations</h3>
                    <div className="flex-grow h-[1px] bg-white/5" />
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    {education.map((edu, idx) => (
                        <div key={idx} className="glass-premium p-12 rounded-[3.5rem] relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-10 text-9xl font-black text-white/5 group-hover:text-cyan-electric/10 transition-colors italic leading-none">{edu.gpa}</div>
                            <div className="relative z-10 space-y-6">
                                <div className="p-4 bg-cyan-electric/10 w-fit rounded-2xl text-cyan-electric"><GraduationCap className="w-8 h-8" /></div>
                                <h4 className="text-3xl font-black text-white uppercase italic tracking-tight leading-tight">{edu.degree}</h4>
                                <p className="text-slate-400 text-lg font-medium">{edu.school} • {edu.period}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
