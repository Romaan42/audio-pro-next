'use client'
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiHeadphones } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import LoginRegisterBtn from './LoginRegisterBtn';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCartItems } from "@/store/slices/cartItemsSlice";
import { setOpen } from "@/store/slices/cartSidebar";
import CartSidebar from "./CartSidebar";

export default function Header() {
    const dispatch = useDispatch()
    const { items, loading } = useSelector(state => state.cart)

    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        dispatch(getCartItems())
    }, [])

    return (
        <>
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex justify-between items-center h-16 md:h-20">

                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex justify-center items-center">
                                <CiHeadphones size={18} className='text-white' />
                            </div>
                            <span className="text-xl md:text-2xl font-bold">
                                AUDIO<span className="text-indigo-600">PRO</span>
                            </span>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex space-x-6 font-medium text-gray-600">
                            <Link href="/" className="hover:text-indigo-600">Home</Link>
                            <Link href="/shop" className="hover:text-indigo-600">Shop</Link>
                            <Link href="/orders" className="hover:text-indigo-600">Orders</Link>
                            <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-2 md:gap-4">

                            {/* Search */}
                            <div className="hidden lg:block">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-gray-100 rounded-full py-2 px-4 w-56 focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            {/* Mobile Search Icon */}
                            <button className="lg:hidden p-2">
                                <FaSearch size={18} />
                            </button>

                            {/* Login */}
                            <div className="hidden sm:block">
                                <LoginRegisterBtn />
                            </div>

                            {/* Cart */}
                            <button
                                onClick={() => dispatch(setOpen())}
                                className="relative p-2 hover:bg-gray-100 rounded-full"
                            >
                                <FaShoppingCart size={20} />
                                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                                    {loading ? "..." : items?.length}
                                </span>
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMobileMenu(true)}
                                className="md:hidden p-2"
                            >
                                <FaBarsStaggered size={20} />
                            </button>

                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 left-0 w-full h-full bg-black/40 z-50 transition ${mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}>

                <div className={`bg-white w-64 h-full p-5 transition-transform ${mobileMenu ? "translate-x-0" : "-translate-x-full"}`}>

                    {/* Close */}
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-bold text-lg">Menu</span>
                        <button onClick={() => setMobileMenu(false)}>
                            <IoClose size={22} />
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-4 text-gray-700 font-medium">
                        <Link href="/" onClick={() => setMobileMenu(false)}>Home</Link>
                        <Link href="/shop" onClick={() => setMobileMenu(false)}>Shop</Link>
                        <Link href="/orders" onClick={() => setMobileMenu(false)}>Orders</Link>
                        <Link href="/contact" onClick={() => setMobileMenu(false)}>Contact</Link>
                    </div>

                    {/* Login Button */}
                    <div className="mt-6 block sm:hidden">
                        <LoginRegisterBtn />
                    </div>
                </div>
            </div>

            <CartSidebar />
        </>
    )
}