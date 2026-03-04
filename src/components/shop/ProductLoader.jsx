import React from 'react'

export default function ProductLoader() {
    return (
        <div className="group relative">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative">
                <div
                    className="w-full h-full bg-slate-200 animate-pulse flex items-center justify-center text-gray-400">
                    Loading Image...</div>
            </div>
            <div className="mt-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
        </div>
    )
}
