import React, { useState } from 'react';
import { portfolioData } from '../data';
import { Mail, Linkedin, Github, ArrowRight, CheckCircle2, Waves, Check } from 'lucide-react';

const Connect = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(portfolioData.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);

        // Secondary action: attempt mailto
        window.location.href = `mailto:${portfolioData.email}`;
    };

    return (
        <div className="relative pt-32 pb-24 px-8 md:px-16 max-w-full mx-auto">
            <div className="grid lg:grid-cols-12 gap-24 items-center mb-48 animate-reveal">
                <div className="lg:col-span-7 space-y-12">
                    <div className="inline-flex items-center space-x-4">
                        <Waves className="w-5 h-5 text-cyan-electric font-bold" />
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-500">The_Final_Packet</span>
                    </div>
                    <h2 className="text-7xl md:text-9xl font-black tracking-tight text-white leading-[0.85] uppercase italic">
                        Final <br />
                        <span className="font-serif-personal lowercase italic font-medium text-cyan-electric not-italic">Connection</span>.
                    </h2>
                    <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl italic">
                        "Data is only as good as the impact it creates."
                    </p>
                </div>

                <div className="lg:col-span-5">
                    <div className="p-16 glass-premium rounded-[5rem] border-cyan-electric/20 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 text-cyan-electric opacity-5 group-hover:opacity-10 transition-opacity">
                            <CheckCircle2 className="w-48 h-48" />
                        </div>
                        <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase leading-none mb-10">
                            Ready to solve <br /> meaningful <br /> problems.
                        </h3>
                        <ul className="space-y-6 mb-12">
                            {['Resilient Data Systems', 'Clinical ML Diagnostics', 'Scalable ETL Pipelines'].map((item, i) => (
                                <li key={i} className="flex items-center space-x-4 text-slate-400 font-bold italic">
                                    <span className="w-2 h-2 rounded-full bg-cyan-electric" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={handleCopy}
                            className={`flex items-center justify-between w-full p-8 rounded-[2.5rem] group/btn transition-all hover:scale-[1.02] ${copied ? 'bg-emerald-500' : 'bg-cyan-electric'}`}
                        >
                            <span className="text-2xl font-black text-black italic uppercase">
                                {copied ? 'Email_Copied!' : 'Get_In_Touch'}
                            </span>
                            <div className="p-4 bg-black rounded-full text-white transform group-hover/btn:translate-x-2 transition-transform">
                                {copied ? <Check className="w-6 h-6" /> : <ArrowRight className="w-6 h-6" />}
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer-like Conclusion */}
            <div className="border-t border-white/5 pt-24 grid md:grid-cols-3 gap-20 items-start opacity-60 hover:opacity-100 transition-opacity animate-reveal delay-200">
                <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">Core_Values</h4>
                    <p className="text-slate-400 font-medium leading-relaxed italic">
                        Building for resilience, documenting for clarity, and innovating for human impact.
                    </p>
                </div>
                <div className="space-y-8">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">Connectivity</h4>
                    <div className="flex space-x-6">
                        <a href={portfolioData.links.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-2xl text-white hover:text-cyan-electric transition-all"><Linkedin className="w-6 h-6" /></a>
                        <a href={portfolioData.links.github} target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-2xl text-white hover:text-cyan-electric transition-all"><Github className="w-6 h-6" /></a>
                        <a href={`mailto:${portfolioData.email}`} className="p-4 bg-white/5 rounded-2xl text-white hover:text-cyan-electric transition-all"><Mail className="w-6 h-6" /></a>
                    </div>
                </div>
                <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">Location_Sync</h4>
                    <p className="text-white font-serif-personal text-2xl italic">Boston, Massachusetts</p>
                </div>
            </div>
        </div>
    );
};

export default Connect;
