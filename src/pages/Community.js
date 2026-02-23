import React from 'react';
import { communities, communityInterests } from '../data';
import { Coffee, Users, ExternalLink, Globe, Heart } from 'lucide-react';

const Community = () => {
    return (
        <div className="relative pt-32 pb-24 px-8 md:px-16 max-w-full mx-auto">
            <div className="mb-20 space-y-8 max-w-4xl animate-reveal">
                <div className="inline-flex items-center space-x-4">
                    <Users className="w-5 h-5 text-cyan-electric" />
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-500">Networking_&_Ecosystems</span>
                </div>
                <h2 className="text-7xl md:text-9xl font-black tracking-tight text-white leading-[0.85] uppercase italic">
                    Tech & <br />
                    <span className="font-serif-personal lowercase italic font-medium text-cyan-electric not-italic">Community</span>.
                </h2>
                <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
                    Advocating for diverse perspectives in engineering and sharing knowledge through inclusive AI and sustainable tech initiatives.
                </p>
            </div>

            {/* High Impact Visual Grid */}
            <div className="grid grid-cols-1 gap-12 mb-32 animate-reveal">
                {communities.map((comm, idx) => (
                    <div key={idx} className="glass-premium p-12 md:p-16 rounded-[4rem] group hover:border-cyan-electric transition-all flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-20">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] bg-white/5 p-8 overflow-hidden group-hover:rotate-1 group-hover:scale-105 transition-transform flex-shrink-0">
                            <img src={comm.logo} alt={comm.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="space-y-8 flex-grow">
                            <div className="flex flex-col space-y-3">
                                <div className="flex items-center space-x-4 text-cyan-electric text-[10px] font-black uppercase tracking-[0.4em] opacity-60">
                                    <Globe className="w-4 h-4" />
                                    <span>Active_Impact_Member</span>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase group-hover:text-cyan-electric transition-colors leading-tight">
                                    {comm.name}
                                </h3>
                            </div>
                            <p className="text-slate-400 text-xl font-medium leading-relaxed italic border-l-2 border-cyan-electric/20 pl-8">
                                {comm.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
                {/* Interests Section */}
                <div className="lg:col-span-12 grid md:grid-cols-2 gap-12 animate-reveal">
                    <div className="glass-premium p-12 rounded-[4rem] border-white/5 relative overflow-hidden group">
                        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-cyan-electric/5 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
                        <div className="relative z-10 space-y-10">
                            <div className="p-5 bg-black/10 w-fit rounded-[2rem]">
                                <Coffee className="w-10 h-10 text-cyan-electric" />
                            </div>
                            <h4 className="text-5xl font-black text-white italic tracking-tighter uppercase leading-none">
                                Let's sync <br /> for a coffee.
                            </h4>
                            <p className="text-slate-400 text-lg font-bold leading-relaxed max-w-md">
                                Always open to chatting about data systems, ML research, or the best café spots in Boston.
                            </p>
                            <a href="https://www.linkedin.com/in/samyukthakapoor/" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-4 px-10 py-5 bg-cyan-electric text-black font-black rounded-full hover:bg-white transition-all transform hover:-translate-y-1">
                                <span>CONNECT_ON_LINKEDIN</span>
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="glass-premium p-12 rounded-[4rem] space-y-10 border-white/5">
                        <h3 className="text-xs uppercase tracking-[0.4em] font-black text-slate-500 border-b border-white/5 pb-4 italic">Ecosystem_Focus</h3>
                        <div className="grid gap-8">
                            {communityInterests.map((interest, idx) => (
                                <div key={idx} className="group space-y-2">
                                    <div className="flex items-center space-x-3">
                                        <Heart className="w-4 h-4 text-cyan-electric opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <h4 className="text-xl font-black text-white italic tracking-tighter uppercase group-hover:text-cyan-electric transition-colors">{interest.title}</h4>
                                    </div>
                                    <p className="text-slate-500 font-medium leading-relaxed pl-7 text-sm">
                                        {interest.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
