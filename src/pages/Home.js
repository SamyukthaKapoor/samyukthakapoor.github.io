import React from 'react';
import { portfolioData, aboutImages } from '../data';
import { Camera, ArrowRight, MousePointer2 } from 'lucide-react';

const Home = () => {

    return (
        <div className="relative min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-full mx-auto overflow-hidden">

            {/* Intro Section */}
            <div className="grid lg:grid-cols-12 gap-16 items-center mb-48">
                <div className="lg:col-span-12 space-y-12 animate-reveal">
                    <div className="inline-flex items-center space-x-4">
                        <span className="w-12 h-[1px] bg-cyan-electric" />
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-cyan-electric">Data Systems & ML Engineer</span>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter text-white">
                        Scalable Data <br />
                        <span className="font-serif-personal italic font-medium text-slate-400">&</span> ML Pipelines. <br />
                        <span className="text-cyan-electric">Intelligence</span>.
                    </h1>

                    <p className="max-w-2xl text-xl text-slate-400 leading-relaxed font-medium">
                        {portfolioData.bio}
                    </p>

                    <div className="flex flex-wrap gap-8 items-center pt-8">
                        <a href={portfolioData.links.resume} download className="px-10 py-5 bg-white text-black font-black rounded-full hover:bg-cyan-electric hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl">
                            COLLECT_CV
                        </a>
                        <div className="flex items-center space-x-4 text-slate-500 animate-bounce cursor-default">
                            <ArrowRight className="w-5 h-5" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Scroll to Story</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual Narrative Section (The Story) */}
            <div className="space-y-48">
                <div className="max-w-5xl space-y-12 animate-reveal">
                    <div className="inline-flex items-center space-x-4">
                        <Camera className="w-5 h-5 text-cyan-electric" />
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500">The_Visual_Story</h2>
                    </div>
                    <h3 className="text-5xl md:text-7xl font-black text-white italic leading-tight uppercase">
                        Engineering <br />
                        meets <span className="font-serif-personal lowercase italic font-medium text-cyan-electric not-italic">empathy</span>.
                    </h3>
                    <p className="text-2xl text-slate-400 font-medium leading-relaxed italic">
                        "I see engineering as the art of making the complex feel simple. Good data systems should work so well that they become invisible. Engineering is at its best when it serves a human purpose."
                    </p>
                </div>

                <div className="space-y-64 max-w-6xl mx-auto">
                    {aboutImages.map((story, idx) => (
                        <div key={idx} className="grid lg:grid-cols-12 gap-20 items-center animate-reveal">
                            {/* Text Side (Left) */}
                            <div className="lg:col-span-5 space-y-10">
                                <div className="flex items-center space-x-6 mb-4">
                                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-electric/60">
                                        <MousePointer2 className="w-4 h-4 rotate-45" />
                                    </div>
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Story_Pckt_{idx + 1}</span>
                                </div>
                                <h4 className="text-3xl md:text-5xl font-serif-personal italic text-white/90 leading-[1.1] lowercase">
                                    {story.title}
                                </h4>
                                <p className="text-lg text-slate-400 leading-relaxed font-normal text-justify">
                                    {story.caption}
                                </p>
                                <div className="pt-4 flex items-center space-x-4 opacity-30">
                                    <div className="w-12 h-[1px] bg-white" />
                                    <span className="text-[9px] font-black text-white uppercase tracking-widest">End_Log_{idx + 1}</span>
                                </div>
                            </div>

                            {/* Image Side (Right) */}
                            <div className="lg:col-span-7 group">
                                <div className="image-lens bg-slate-900 shadow-2xl relative overflow-hidden aspect-[16/10] rounded-[2rem] border border-white/5">
                                    <img
                                        src={story.url}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                        alt={story.title}
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000';
                                        }}
                                    />
                                    <div className="absolute top-8 right-8">
                                        <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-xl px-5 py-2 rounded-full border border-white/10">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-electric animate-pulse" />
                                            <span className="text-[9px] font-black text-white/60 uppercase tracking-widest">0{idx + 1}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
