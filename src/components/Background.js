import React from 'react';

const Background = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
            {/* Animated Mesh Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-electric/10 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/10 blur-[120px] rounded-full animate-pulse delay-700" />

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

            {/* Dynamic Noise */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />
        </div>
    );
};

export default Background;
