'use client'

import { setClose } from "@/store/slices/cartSidebar"
import { useDispatch, useSelector } from "react-redux"
import CartProduct from "./CartProduct"
import { useRouter } from "next/navigation"


export default function CartSidebar() {
    const router = useRouter()
    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.cartSidebar)
    const { items } = useSelector(state => state.cart)

    const totalPrice = items?.reduce((i, val) => {
        return i + val.price * val.qty;
    }, 0)
    return (
        <div>
            {/* Overlay */}
            <div className={`${isOpen ? "fixed" : "hidden"} inset-0 bg-gray-100 z-40`} style={{ opacity: isOpen ? 0.3 : 0 }}></div>

            {/* Sidebar */}
            <aside className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 duration-75 flex flex-col ${isOpen ? "mr-0" : "-mr-100"}`}>

                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">Shopping Cart</h2>
                    <button className="text-gray-500 text-2xl cursor-pointer hover:text-gray-700" onClick={() => dispatch(setClose())}>
                        <span className="sr-only">Close</span>
                        &times;
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    <CartProduct />
                </div>

                {/* Footer */}
                <div className="p-4 border-t">
                    <div className="flex justify-between mb-4">
                        <span className="font-medium">Subtotal</span>
                        <span className="font-semibold">${totalPrice?.toFixed(2)}</span>
                    </div>
                    <button onClick={() => {
                        router.push("/checkout")
                        dispatch(setClose())
                    }
                    } className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                        Checkout
                    </button>
                </div>
            </aside>
        </div>
    )
} 