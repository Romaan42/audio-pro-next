"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProductPage() {
    const { id } = useParams();
    const router = useRouter();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch product data
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/product/${id}`);
                const data = await res.json();
                if (data.success) {

                    setProduct(data.product);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchProduct();
    }, [id]);

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch(`/api/product/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });

            alert("Product updated!");
            router.push("/admin/products");
        } catch (err) {
            console.error(err);
            alert("Error updating product");
        }
    };

    if (loading) return <p className="p-6">Loading...</p>;

    return (
        <div className="p-6 max-w-xl">
            <h1 className="text-2xl font-semibold mb-4">Edit Product</h1>

            <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">

                {/* Title */}
                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        type="text"
                        value={product.title}
                        onChange={(e) =>
                            setProduct({ ...product, title: e.target.value })
                        }
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter product title"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                        value={product.description || ""}
                        onChange={(e) =>
                            setProduct({ ...product, description: e.target.value })
                        }
                        rows={4}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter product description"
                    />
                </div>

                {/* Price + Stock */}
                <div className="grid grid-cols-2 gap-4">

                    <div>
                        <label className="block mb-1 font-medium">Price ($)</label>
                        <input
                            type="number"
                            value={product.price}
                            onChange={(e) =>
                                setProduct({ ...product, price: e.target.value })
                            }
                            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Stock</label>
                        <input
                            type="number"
                            value={product.stock || ""}
                            onChange={(e) =>
                                setProduct({ ...product, stock: e.target.value })
                            }
                            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
                            placeholder="Quantity"
                        />
                    </div>

                </div>

                {/* Category */}
                <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <select
                        value={product.category || ""}
                        onChange={(e) =>
                            setProduct({ ...product, category: e.target.value })
                        }
                        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="home">Home</option>
                    </select>
                </div>

                {/* Image URL */}
                <div>
                    <label className="block mb-1 font-medium">Image URL</label>
                    <input
                        type="text"
                        value={product.image || ""}
                        onChange={(e) =>
                            setProduct({ ...product, image: e.target.value })
                        }
                        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                {/* Status */}
                <div>
                    <label className="block mb-1 font-medium">Status</label>
                    <select
                        value={product.status || "active"}
                        onChange={(e) =>
                            setProduct({ ...product, status: e.target.value })
                        }
                        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Update Product
                    </button>

                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="bg-gray-300 px-5 py-2 rounded hover:bg-gray-400 transition"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}