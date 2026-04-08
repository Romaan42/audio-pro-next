import Product from '@/components/shop/Product';
import React from 'react'

export default async function RelatedProducts() {
    const res = await fetch(`${process.env.BASE_URL}/api/products`, {
        cache: "no-store",
    });
    const products = await res.json();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item) => (
                <Product key={item._id} product={item} />
            ))}
        </div>
    )
}
