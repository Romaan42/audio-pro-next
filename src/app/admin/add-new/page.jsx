'use client'

import { useRef, useState } from "react";
import { FaImage } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function page() {
    const imageRef = useRef()
    const [clientImage, setClientImage] = useState(null)
    const [serverImage, setServerImage] = useState(null)
    const [message, setMessage] = useState()
    const [uploading, setUploading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true)
        console.log({ serverImage })
        const title = e.target.title.value
        const description = e.target.description.value
        const price = e.target.price.value
        const stock = e.target.stock.value
        const category = e.target.category.value
        const inputTags = e.target.tags.value
        const tags = inputTags.split(",").map(tag => tag.trim()) // tags ko trim karna zaroori hai


        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("stock", stock);
        formData.append("category", category);
        formData.append("tags", JSON.stringify(tags)); // array ko stringify karna zaroori hai
        formData.append("image", serverImage); // 👈 image yahan add karein

        const res = await fetch("/api/admin/add-product", {
            method: "POST",
            body: formData
        })
        setUploading(false)
        const data = await res.json()
        if (data.success) {
            setMessage({ type: "success", text: data.message })
        } else {
            setMessage({ type: "error", text: data.error || "Failed to add product" })
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setClientImage(URL.createObjectURL(file));
        setServerImage(file);
    }

    const handleRemoveImages = () => {
        setClientImage(null);
        setServerImage(null);
        imageRef.current.value = null; // input field ko reset karna
    }

    return (
        <main className="flex-grow md:ml-64 p-8">
            {uploading && <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-gray-700 font-bold">Uploading...</p>
                </div>
            </div>}
            <form className="grid grid-cols-1 lg:grid-cols-3 gap-8" onSubmit={handleSubmit}>

                <div className="lg:col-span-2 space-y-8">
                    {message && (
                        <div className={`p-4 rounded-lg ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                            {message.text}
                        </div>
                    )}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="font-bold text-lg mb-6">General Information</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Product Name</label>
                                <input type="text" name="title" placeholder="e.g. Studio Pro-X Wireless"
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                                <textarea name="description" rows="5" placeholder="Highlight the key features of the product..."
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="font-bold text-lg mb-6">Product Images</h2>
                        {clientImage ?
                            <div className="relative group border-2 border-dashed border-gray-200 rounded-xl p-6 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition">

                                <img
                                    src={clientImage}
                                    alt="product preview"
                                    className="max-h-40 max-w-full object-contain rounded-lg"
                                />

                                {/* Dark overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

                                {/* Delete Button */}
                                <button
                                    type="button"
                                    onClick={handleRemoveImages}
                                    className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 scale-90 group-hover:scale-100"
                                >
                                    <MdDeleteForever size={22} />
                                </button>

                            </div> :
                            <div onClick={() => imageRef.current.click()}
                                className="border-2 border-dashed border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                                <FaImage className="h-12 w-12 text-gray-400 mb-4" />
                                <p className="font-bold text-gray-600">Click to upload or drag and drop</p>
                                <p className="text-xs text-gray-400 mt-1">PNG, JPG, JPEG up to 10MB</p>
                            </div>
                        }

                        <input ref={imageRef} type="file" name="image" onChange={handleImageChange} className="hidden" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="font-bold text-lg mb-6">Pricing</h2>
                            <div className="flex gap-4">
                                <div className="flex-grow">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Base Price</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-3 text-gray-400">$</span>
                                        <input type="number" name="price" placeholder="0.00"
                                            className="w-full pl-8 p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="font-bold text-lg mb-6">Inventory</h2>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">SKU Stock</label>
                                <input type="number" name="stock" placeholder="Quantity in warehouse"
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="font-bold text-lg mb-6">Status</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                <span className="text-sm font-bold text-green-700">Active</span>
                                <div className="w-10 h-5 bg-green-500 rounded-full relative">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow"></div>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed">Setting a product to "Active" will immediately
                                display it on your live storefront.</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="font-bold text-lg mb-6">Organize</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                                <select name="category" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none">
                                    <option>Headphones</option>
                                    <option>Speakers</option>
                                    <option>Microphones</option>
                                    <option>Cables</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Tags</label>
                                <input type="text" name="tags" placeholder="Sale, Wireless, New"
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none" />
                                <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-wide">Separate with commas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <header className="flex justify-between items-center mb-10">

                    <div className="flex gap-3">

                        <button
                            className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-lg transition" type='submit'>Save
                            Product</button>
                    </div>
                </header>
            </form>
        </main>
    )
}
