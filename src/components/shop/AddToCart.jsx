'use client'

import { addToCart, getCartItems } from "@/store/slices/cartItemsSlice"
import { useDispatch, useSelector } from "react-redux"

export default function AddToCart({ id }) {
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.user)

    const handleAddToCart = () => {
        if (!user) {
            alert("Please log in to add items to your cart.")
            return
        }
        dispatch(addToCart({ id }))
    }
    return (
        <div
            className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold shadow-xl cursor-pointer" onClick={handleAddToCart}>
                Quick
                Add +</button>
        </div>
    )
}
