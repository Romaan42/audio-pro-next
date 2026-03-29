// ProductDetailSkeleton.jsx
import React from "react";

const ProductDetailSkeleton = () => {
    return (
        <div className="animate-pulse max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-gray-300 h-80 w-full rounded-md"></div>

            {/* Product Info */}
            <div className="space-y-4">
                {/* Title */}
                <div className="h-6 bg-gray-300 rounded w-2/3"></div>

                {/* Price */}
                <div className="h-5 bg-gray-300 rounded w-1/4"></div>

                {/* Description */}
                <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                </div>

                {/* Category & Stock */}
                <div className="flex gap-4">
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                </div>

                {/* Quantity */}
                <div className="h-4 bg-gray-300 rounded w-1/6"></div>

                {/* Buttons */}
                <div className="flex gap-4">
                    <div className="h-10 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-10 bg-gray-300 rounded w-1/3"></div>
                </div>
            </div>

            {/* Review Section */}
            <div className="md:col-span-2 mt-10 space-y-6">
                {/* Write a Review */}
                <div className="space-y-3">
                    <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>

                {/* Recent Feedback */}
                <div className="space-y-4">
                    <div className="h-5 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailSkeleton;
