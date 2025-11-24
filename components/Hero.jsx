import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Darker Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/50 to-neutral-950"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto mt-12">
                <p className="text-gold-400 text-[10px] md:text-xs tracking-[0.5em] uppercase mb-8 animate-fade-in-up font-medium">
                    Taste the Extraordinary
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-10 leading-[1.05] animate-fade-in-up delay-100 tracking-tight">
                    Culinary Art <br /> <span className="italic font-light text-gold-100 opacity-90">Redefined</span>
                </h1>
                <p className="text-neutral-300 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200 tracking-wide text-opacity-90">
                    Experience a symphony of flavors where traditional French techniques meet modern global innovation in an atmosphere of timeless elegance.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-8 animate-fade-in-up delay-300">
                    <a href="#menu" className="group relative px-10 py-4 overflow-hidden border border-gold-400/40 text-gold-400 font-bold uppercase tracking-[0.25em] text-[11px] transition-all duration-500 hover:text-neutral-950 hover:bg-gold-400">
                        <span className="relative z-10">View Menu</span>
                    </a>
                    <a href="#contact" className="group relative px-10 py-4 overflow-hidden border border-white/20 text-white font-bold uppercase tracking-[0.25em] text-[11px] transition-all duration-500 hover:bg-white hover:text-neutral-950 hover:border-white">
                        <span className="relative z-10">Book Table</span>
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
};

export default Hero;
