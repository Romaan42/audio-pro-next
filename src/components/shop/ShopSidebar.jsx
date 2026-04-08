'use client'

import { useState } from "react"

export default function ShopSidebar() {
    const [range, setRange] = useState(10)

    const handlePriceChange = (e) => {
        const priceValue = e.target.value;

        if (priceValue % 10 === 0) {
            setRange(priceValue)
        }
    }


    return (
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
                    <input type="range" min={10} max={300}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" value={range} onChange={handlePriceChange} />
                    <div className="flex justify-between text-sm text-gray-500 font-medium"

                    >
                        <span>${range}</span>
                        <span>$300+</span>
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
    )
}
