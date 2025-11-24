import React from 'react';

const featuredItems = [
    {
        id: 1,
        name: "Truffle & Scallop Risotto",
        description: "Arborio rice, black winter truffle shavings, pan-seared Hokkaido scallops",
        price: "$42",
        category: "main",
        imageUrl: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Wagyu Beef Carpaccio",
        description: "A5 Japanese Wagyu, ponzu gel, crispy garlic, micro cilantro, truffle oil drizzle.",
        price: "$36",
        category: "starter",
        imageUrl: "https://images.unsplash.com/photo-1546241072-48010ad2862c?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Miso Glazed Black Cod",
        description: "Sustainably sourced black cod, 48-hour miso marinade, bok choy, ginger dashi broth.",
        price: "$48",
        category: "main",
        imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Gold Leaf Chocolate Sphere",
        description: "Dark Valrhona chocolate, hazelnut praline, warm caramel pour-over, 24k gold leaf.",
        price: "$28",
        category: "dessert",
        imageUrl: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=800&auto=format&fit=crop"
    }
];

const Menu = () => {
    return (
        <section
            id="menu"
            className="py-32 md:py-40 relative bg-cover bg-center bg-fixed bg-no-repeat"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop")',
            }}
        >
            <div className="absolute inset-0 bg-neutral-950/80"></div>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent z-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <p className="text-gold-400 uppercase tracking-[0.4em] text-[10px] font-bold mb-6 opacity-80">Seasonal Selections</p>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 font-light tracking-wide">Curated For Perfection</h2>
                    <div className="w-16 h-px bg-gold-400/50 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {featuredItems.map((item) => (
                        <div key={item.id} className="group relative">
                            <div className="overflow-hidden h-80 relative grayscale-[70%] group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/10 transition-colors duration-700"></div>
                            </div>
                            <div className="bg-neutral-900/60 p-8 border border-neutral-800 border-t-0 group-hover:border-gold-400/20 transition-colors duration-500 backdrop-blur-sm">
                                <div className="flex justify-between items-baseline mb-4">
                                    <h3 className="text-xl font-serif text-neutral-200 group-hover:text-gold-100 transition-colors duration-300">{item.name}</h3>
                                </div>
                                <div className="w-8 h-px bg-gold-400/30 mb-4 group-hover:w-full transition-all duration-700"></div>
                                <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-light">{item.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-gold-400 font-serif text-lg italic">{item.price}</span>
                                    <button className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 group-hover:text-gold-400 transition-colors">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-24">
                    <button className="px-12 py-4 border border-neutral-800 text-neutral-400 hover:text-white hover:border-gold-400 hover:bg-gold-400/5 transition-all duration-500 uppercase tracking-[0.25em] text-[10px] font-bold">
                        View Full Menu
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Menu;
