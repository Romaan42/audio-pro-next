import React from 'react'

export default async function page() {
    try {
        const res = await fetch("http://localhost:3000/api/products", {
            cache: "no-store",
        });
        const products = await res.json();
        return (
            <div>
                <main className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex flex-col lg:flex-row gap-12">

                        <aside className="w-full lg:w-64 space-y-8">
                            <div>
                                <h3 className="font-bold text-lg mb-4">Categories</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li><label className="flex items-center gap-3 cursor-pointer hover:text-indigo-600"><input
                                        type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" /> All
                                        Headphones</label></li>
                                    <li><label className="flex items-center gap-3 cursor-pointer hover:text-indigo-600"><input
                                        type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" /> Wireless
                                        Earbuds</label></li>
                                    <li><label className="flex items-center gap-3 cursor-pointer hover:text-indigo-600"><input
                                        type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" /> Studio
                                        Monitors</label></li>
                                    <li><label className="flex items-center gap-3 cursor-pointer hover:text-indigo-600"><input
                                        type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" /> Bluetooth
                                        Speakers</label></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-4">Price Range</h3>
                                <div className="space-y-4">
                                    <input type="range"
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
                                    <div className="flex justify-between text-sm text-gray-500 font-medium">
                                        <span>$0</span>
                                        <span>$1,000+</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-4">Color</h3>
                                <div className="flex gap-3">
                                    <div className="w-6 h-6 rounded-full bg-black border border-gray-300 cursor-pointer"></div>
                                    <div className="w-6 h-6 rounded-full bg-white border border-gray-300 cursor-pointer"></div>
                                    <div className="w-6 h-6 rounded-full bg-indigo-600 border border-gray-300 cursor-pointer"></div>
                                    <div className="w-6 h-6 rounded-full bg-slate-400 border border-gray-300 cursor-pointer"></div>
                                </div>
                            </div>
                        </aside>

                        <div className="grow">
                            <div className="flex justify-between items-center mb-8 bg-gray-50 p-4 rounded-lg">
                                <span className="text-sm font-medium text-gray-600">Showing 12 of 48 products</span>
                                <select className="bg-transparent font-bold text-sm focus:outline-none cursor-pointer">
                                    <option>Sort by: Featured</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest Arrivals</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                                {products.map((product) => (
                                    <div key={product._id} className="group relative">
                                        <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative">
                                            <img src={product.images[0]} alt={product.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                            <div
                                                className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                <button
                                                    className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold shadow-xl">Quick
                                                    Add +</button>
                                            </div>
                                            <span
                                                className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm italic">Bestseller</span>
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm font-bold text-gray-700">{product.title}</h3>
                                                <p className="text-xs text-gray-500 mt-1">{product.category}</p>
                                            </div>
                                            <p className="text-sm font-bold text-indigo-600">${product.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-20 flex justify-center gap-2">
                                <button
                                    className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center font-bold hover:bg-indigo-600 hover:text-white transition">1</button>
                                <button
                                    className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center font-bold hover:bg-indigo-600 hover:text-white transition">2</button>
                                <button
                                    className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center font-bold hover:bg-indigo-600 hover:text-white transition">3</button>
                                <span className="px-2 self-center">...</span>
                                <button
                                    className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center font-bold hover:bg-indigo-600 hover:text-white transition">8</button>
                            </div>
                        </div>
                    </div>
                </main>


            </div>
        )
    } catch (error) {
        return <h1>products loading failed!</h1>
    }

}
