import AdminProduct from '@/components/admin/AdminProduct'
import React from 'react'

export default async function page() {
    const res = await fetch(`${process.env.BASE_URL}/api/products`, {
        cache: 'no-store'
    })
    const products = await res.json()

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Admin Products</h1>

                <a
                    href="/admin/products/new"
                    className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    + Add Product
                </a>
            </div>

            {Array.isArray(products) && products.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left p-2">ID</th>
                                <th className="text-left p-2">Title</th>
                                <th className="text-left p-2">Price</th>
                                <th className="text-left p-2">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((product) => (
                                <AdminProduct key={product._id} product={product} />
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-500">No products available.</p>
            )}
        </div>
    )
}
