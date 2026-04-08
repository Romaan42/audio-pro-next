import React from "react";

export default function Banner() {
    return (
        <section className="relative bg-gray-900 h-[600px] flex items-center">
            <div className="absolute inset-0 opacity-60">
                <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1920"
                    alt="Hero"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative max-w-7xl mx-auto px-6 text-white">
                <span className="uppercase tracking-widest text-sm font-semibold text-indigo-400">
                    New Arrival
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold mt-4 mb-6 leading-tight">
                    Immersive Sound,
                    <br />
                    Everywhere.
                </h1>
                <p className="text-lg text-gray-300 max-w-lg mb-8">
                    Experience studio-quality audio with our latest noise-canceling
                    collection. Designed for comfort, built for sound.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                    <a
                        href="#"
                        className="w-full sm:w-auto text-center bg-indigo-600 text-sm sm:text-base md:text-lg 
        hover:bg-indigo-700 text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 
        rounded-md font-semibold md:font-bold transition"
                    >
                        Shop Collection
                    </a>

                    <a
                        href="#"
                        className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 
        backdrop-blur-md text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 
        rounded-md font-semibold md:font-bold transition border border-white/30 
        text-sm sm:text-base md:text-lg"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}
