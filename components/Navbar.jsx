import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClasses = `fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-neutral-950/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
        }`;

    return (
        <nav className={navClasses}>
            <div className="container mx-auto px-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-serif font-bold text-white tracking-[0.15em]">SAVOR</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-12 items-center">
                    <a href="#about" className="text-[10px] uppercase tracking-[0.25em] text-neutral-300 hover:text-gold-400 transition-colors duration-300 font-medium">Story</a>
                    <a href="#menu" className="text-[10px] uppercase tracking-[0.25em] text-neutral-300 hover:text-gold-400 transition-colors duration-300 font-medium">Menu</a>
                    <a href="#contact" className="px-6 py-2 border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-neutral-950 transition-all duration-500 text-[10px] tracking-[0.25em] uppercase font-bold">
                        Reservations
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gold-400 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-neutral-950 border-b border-neutral-800 animate-fade-in-down shadow-2xl">
                    <div className="flex flex-col px-6 py-10 space-y-8 text-center">
                        <a href="#about" className="text-xs uppercase tracking-[0.25em] text-neutral-300 hover:text-gold-400" onClick={() => setIsMobileMenuOpen(false)}>Story</a>
                        <a href="#menu" className="text-xs uppercase tracking-[0.25em] text-neutral-300 hover:text-gold-400" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
                        <a href="#contact" className="text-gold-400 font-bold uppercase tracking-[0.25em] text-xs" onClick={() => setIsMobileMenuOpen(false)}>Reservations</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
