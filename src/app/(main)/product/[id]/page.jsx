import React from "react";
import RelatedProducts from "./RelatedProducts";
import Reviews from "@/components/Product/Reviews";

export default async function ProductDetail({ params }) {
    const { id } = await params;
    // try {
    const result = await fetch(`${process.env.BASE_URL}/api/product/${id}`, {
        cache: "no-store",
    })
    const { product } = await result.json()
    console.log()

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Image */}
                <div>
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-125 object-cover rounded-xl"
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

                    <p className="text-2xl text-indigo-600 font-semibold mb-4">
                        ${product.price}
                    </p>

                    <p className="text-gray-600 mb-6">{product.description}</p>

                    <p className="text-sm text-gray-500 mb-4">
                        Category: {product.category}
                    </p>

                    <p
                        className={`text-sm mb-6 ${product.stock > 0 ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                        <h3>Color:</h3>
                        <div className="flex items-center gap-2">
                            {Array(product.colors).map((color, index) => (
                                <div
                                    key={index}
                                    className="w-6 h-6 rounded-full cursor-pointer border-2 border-gray-300"
                                    style={{ backgroundColor: color }}
                                />
                            ))}


                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="font-medium">Quantity:</span>
                        <button className="bg-gray-200 cursor-pointer text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
                            -
                        </button>
                        <input
                            type="number"
                            min="1"
                            max={product.qty}
                            defaultValue="1"
                            className="w-16 border border-gray-300 rounded px-2 py-1"
                            readOnly
                        />
                        <button className="bg-gray-200 cursor-pointer text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
                            +
                        </button>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                            Add to Cart
                        </button>

                        <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            <Reviews productId={id} />
            {/* Related Products */}
            <div className="mt-20">
                <h2 className="text-2xl font-bold mb-6">Related Products</h2>
                <RelatedProducts />
            </div>
        </div>
    );
    // } catch (error) {
    //     return (
    //         <div>
    //             <h1>Failed to find the product! </h1>
    //         </div>
    //     )
    // }


}
