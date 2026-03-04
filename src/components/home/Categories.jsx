import React from 'react'

export default function Categories() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-3xl font-bold">Shop by Category</h2>
                    <p className="text-gray-500 mt-2">Find the perfect gear for your setup.</p>
                </div>
                <a href="#" className="text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <div className="absolute inset-0 bg-black/30 flex items-end p-8">
                        <h3 className="text-white text-2xl font-bold">Headphones</h3>
                    </div>
                </div>
                <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&q=80&w=800"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <div className="absolute inset-0 bg-black/30 flex items-end p-8">
                        <h3 className="text-white text-2xl font-bold">Wireless Speakers</h3>
                    </div>
                </div>
                <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=800"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <div className="absolute inset-0 bg-black/30 flex items-end p-8">
                        <h3 className="text-white text-2xl font-bold">Accessories</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
