'use client'
import { FaShoppingCart } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiHeadphones } from "react-icons/ci";
import Link from 'next/link';
import LoginRegisterBtn from './LoginRegisterBtn';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from "@/store/slices/cartItemsSlice";
import { setOpen } from "@/store/slices/cartSidebar";
import CartSidebar from "./CartSidebar";

export default function Header() {
    const dispatch = useDispatch()
    const { items, loading } = useSelector(state => state.cart)

    useEffect(() => {
        dispatch(getCartItems())
    }, [])

    const setIsOpen = () => {
        dispatch(setOpen())
    }

    return (
        <>
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">

                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex justify-center items-center">
                                <CiHeadphones size={20} className='text-white' />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter">
                                AUDIO<span className="text-indigo-600">PRO</span>
                            </span>
                        </div>

                        {/* Navigation */}
                        <div className="hidden md:flex space-x-8 font-medium text-gray-600">
                            <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
                            <Link href="/shop" className="hover:text-indigo-600 transition">Shop All</Link>
                            <Link href="/headphones" className="hover:text-indigo-600 transition">Headphones</Link>
                            <Link href="/speakers" className="hover:text-indigo-600 transition">Speakers</Link>
                            <Link href="/sale" className="hover:text-indigo-600 transition">Sale</Link>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-4">

                            {/* Search */}
                            <div className="hidden lg:block relative">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="bg-gray-100 border-none rounded-full py-2 px-5 w-64 focus:ring-2 focus:ring-indigo-500 transition"
                                />
                            </div>

                            {/* Login Register */}

                            <LoginRegisterBtn />

                            {/* Cart */}
                            <button className="p-2 hover:bg-gray-100 cursor-pointer rounded-full relative" onClick={setIsOpen}>
                                <FaShoppingCart size={22} />
                                <span className="absolute top-1 right-1 bg-indigo-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                    {loading ? "..." : items?.length}
                                </span>
                            </button>

                            {/* Mobile Menu */}
                            <button className="md:hidden p-2">
                                <FaBarsStaggered size={20} />
                            </button>

                        </div>

                    </div>
                </div>
            </nav>
            <CartSidebar />
        </>
    )
}