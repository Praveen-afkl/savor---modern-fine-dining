import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-gold-400/20 selection:text-gold-400">
            <Navbar />
            <Hero />
            <div
                id="about"
                className="relative py-32 md:py-40 text-center px-6 border-b border-neutral-900/50 bg-cover bg-center bg-fixed bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop")',
                }}
            >
                <div className="absolute inset-0 bg-neutral-950/70"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <span className="text-gold-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold block mb-8 opacity-80">Our Philosophy</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-12 leading-snug font-light tracking-wide">
                        "Food is not just sustenance. <br /> It is a story told through flavor."
                    </h2>
                    <div className="w-12 h-px bg-gold-400 mx-auto mb-10 opacity-50"></div>
                    <p className="text-neutral-400 text-lg md:text-xl leading-loose font-light max-w-2xl mx-auto">
                        At Savor, we believe in the power of ingredients to evoke memory and emotion.
                        Our kitchen is a laboratory of taste, where we respect tradition but are never bound by it.
                        Every plate is a canvas, and every meal is a performance.
                    </p>
                    <div className="mt-16">
                        <span className="font-serif italic text-gold-400 text-2xl md:text-3xl opacity-90">- Chef Alexander Vance</span>
                    </div>
                </div>
            </div>
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
