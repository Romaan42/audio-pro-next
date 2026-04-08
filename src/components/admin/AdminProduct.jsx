"use client";

export default function AdminProduct({ product }) {

    return (
        <tr className="border-b" onClick={() => router.push(`/admin/edit-product/${product._id}`)}>
            <td className="p-2">{product._id}</td>

            <td className="p-2">{product.title}</td>

            <td className="p-2">
                {typeof product.price === "number"
                    ? `$${product.price.toFixed(2)}`
                    : product.price}
            </td>

            <td className="p-2">
                <a
                    href={`/admin/edit-product/${product._id}`}
                    className="mr-3 text-blue-600 hover:underline"
                >
                    Edit
                </a>

                <a
                    href={`/admin/products/${product._id}/delete`}
                    className="text-red-600 hover:underline"
                >
                    Delete
                </a>
            </td>
        </tr>
    )
}
