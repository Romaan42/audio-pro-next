import React from 'react'
import AddToCart from './AddToCart'
import Image from 'next/image'

export default function Product({ product }) {
    return (
        <div className="group relative">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative">
                <Image width={371} height={371} quality={36} src={product.images[0]} alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <AddToCart id={product._id} />
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
