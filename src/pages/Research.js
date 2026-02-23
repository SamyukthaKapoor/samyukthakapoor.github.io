import React from 'react';
import { publications, experience } from '../data';
import { ExternalLink, BookOpen, BrainCircuit, Activity, FlaskConical } from 'lucide-react';

const Research = () => {
    // Extract only researchers-focused roles (NeuroVEP)
    const researchExperience = experience.filter(exp =>
        exp.company.includes("Northeastern") || exp.role.includes("Research")
    );

    return (
        <div className="relative pt-32 pb-24 px-8 md:px-16 max-w-full mx-auto">
            <div className="mb-32 grid lg:grid-cols-2 gap-20 items-center animate-reveal">
                <div className="space-y-12">
                    <div className="inline-flex items-center space-x-4">
                        <FlaskConical className="w-5 h-5 text-cyan-electric" />
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-500">Scientific_Foundation</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-none uppercase italic">
                        Research <br />
                        <span className="font-serif-personal lowercase italic font-medium text-cyan-electric not-italic">& Publications</span>.
                    </h2>
                    <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl italic">
                        Bridging clinical neuroscience with scalable artificial intelligence. Focused on brain signal classification and visual field defect detection using SOTA CNN architectures.
                    </p>
                </div>

                {/* Neural Network Topology SVG */}
                <div className="hidden lg:block relative group">
                    <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                        {/* Nodes */}
                        <circle cx="200" cy="150" r="10" fill="#06b6d4" className="animate-pulse" /> {/* Core: Neural AI */}

                        <circle cx="100" cy="80" r="6" fill="white" opacity="0.2" /> {/* Node: Vision */}
                        <circle cx="300" cy="80" r="6" fill="white" opacity="0.2" /> {/* Node: Diagnostics */}
                        <circle cx="100" cy="220" r="6" fill="white" opacity="0.2" /> {/* Node: CNN */}
                        <circle cx="300" cy="220" r="6" fill="white" opacity="0.2" /> {/* Node: Signal Proc */}

                        {/* Connecting Lines */}
                        <line x1="200" y1="150" x2="100" y2="80" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.3" className="animate-pulse" />
                        <line x1="200" y1="150" x2="300" y2="80" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.3" />
                        <line x1="200" y1="150" x2="100" y2="220" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.3" />
                        <line x1="200" y1="150" x2="300" y2="220" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.3" />

                        {/* Floating Text Labels */}
                        <text x="70" y="65" fill="#06b6d4" fontSize="10" fontWeight="900" className="uppercase tracking-widest opacity-60">VISION_FIELDS</text>
                        <text x="280" y="65" fill="#06b6d4" fontSize="10" fontWeight="900" className="uppercase tracking-widest opacity-60">DIAGNOSTICS</text>
                        <text x="180" y="130" fill="white" fontSize="12" fontWeight="900" className="uppercase tracking-widest">NEURAL_HUB</text>
                        <text x="70" y="245" fill="#06b6d4" fontSize="10" fontWeight="900" className="uppercase tracking-widest opacity-60">CNN_ARCH</text>
                        <text x="280" y="245" fill="#06b6d4" fontSize="10" fontWeight="900" className="uppercase tracking-widest opacity-60">VEP_SIGNAL</text>
                    </svg>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-20">
                {/* Publications Column */}
                <div className="lg:col-span-12 mb-32">
                    <div className="flex items-center space-x-4 mb-16">
                        <h3 className="text-xs uppercase tracking-[0.4em] font-black text-cyan-electric italic">Peer_Reviewed_Publications</h3>
                        <div className="flex-grow h-[1px] bg-white/5" />
                    </div>

                    <div className="grid md:grid-cols-1 gap-12">
                        {publications.map((pub, idx) => (
                            <div key={idx} className="glass-premium p-12 md:p-16 rounded-[4rem] group hover:border-cyan-electric/30 transition-all animate-reveal relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
                                <div className="absolute top-[-5%] right-[-5%] opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 rotate-12">
                                    <BookOpen className="w-72 h-72 text-cyan-electric" />
                                </div>

                                <div className="w-32 h-32 rounded-[2.5rem] bg-cyan-electric/5 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-electric/10 transition-colors">
                                    <BookOpen className="w-12 h-12 text-cyan-electric" />
                                </div>

                                <div className="relative z-10 space-y-6 flex-grow">
                                    <div className="flex items-center justify-between">
                                        <span className="px-5 py-2 bg-white/5 border border-white/5 rounded-full text-[10px] font-black text-cyan-electric uppercase tracking-widest">{pub.venue}</span>
                                        <span className="text-slate-500 text-xs font-black italic">{pub.date}</span>
                                    </div>
                                    <h4 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase italic group-hover:text-cyan-electric transition-colors">
                                        {pub.title}
                                    </h4>
                                    <p className="text-slate-400 text-xl leading-relaxed font-bold italic lowercase border-l-2 border-cyan-electric/10 pl-8 group-hover:border-cyan-electric transition-colors">
                                        {pub.description}
                                    </p>
                                    <a href={pub.link} target="_blank" rel="noreferrer" className="inline-flex items-center space-x-4 px-8 py-4 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-cyan-electric hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl">
                                        <span>ACCESS_PUBLICATION</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lab Focus Section */}
                <div className="lg:col-span-12">
                    <div className="flex items-center space-x-4 mb-16">
                        <h3 className="text-xs uppercase tracking-[0.4em] font-black text-cyan-electric italic">NeuroVEP_Lab_Research</h3>
                        <div className="flex-grow h-[1px] bg-white/5" />
                    </div>

                    <div className="space-y-16">
                        {researchExperience.map((exp, idx) => (
                            <div key={idx} className="grid lg:grid-cols-12 gap-12 p-12 glass-premium rounded-[4rem] border-white/10 group animate-reveal">
                                <div className="lg:col-span-5 space-y-8">
                                    <div className="p-6 bg-cyan-electric/10 rounded-[2.5rem] w-fit group-hover:bg-cyan-electric/20 transition-all">
                                        <BrainCircuit className="w-12 h-12 text-cyan-electric" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none">{exp.role}</h4>
                                        <p className="text-slate-500 font-serif-personal text-xl italic">{exp.company} • {exp.period}</p>
                                    </div>
                                </div>
                                <div className="lg:col-span-7">
                                    <ul className="space-y-8">
                                        {exp.achievements.map((ach, i) => (
                                            <li key={i} className="flex items-start space-x-6">
                                                <Activity className="w-6 h-6 text-cyan-electric mt-1 flex-shrink-0 opacity-40" />
                                                <span className="text-slate-400 text-xl leading-relaxed font-medium">{ach}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;
