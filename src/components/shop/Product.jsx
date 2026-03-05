import React from 'react'

export default function Product({ product }) {
    return (
        <div className="group relative">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative">
                <img src={product.images[0]} alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div
                    className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                        className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold shadow-xl cursor-pointer   ">Quick
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
    )
}
