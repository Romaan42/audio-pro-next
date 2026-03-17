import React from 'react'

export default function CartLoader() {
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-4 animate-pulse">

                    {/* Image */}
                    <div className="w-16 h-16 bg-gray-300 rounded"></div>

                    {/* Text */}
                    <div className="flex-1 space-y-2">
                        <div className="h-4 w-32 bg-gray-300 rounded"></div>
                        <div className="h-3 w-16 bg-gray-200 rounded"></div>
                        <div className="h-4 w-20 bg-gray-300 rounded"></div>
                    </div>

                    {/* Remove button */}
                    <div className="h-6 w-6 bg-gray-300 rounded"></div>

                </div>
            ))}

        </div>
    )
}
