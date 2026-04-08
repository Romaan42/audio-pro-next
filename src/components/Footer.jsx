import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                <div className="col-span-2 md:col-span-1">
                    <div className="text-white text-2xl font-bold mb-6">AUDIO<span className="text-indigo-500">PRO</span></div>
                    <p className="text-sm leading-relaxed">Top-tier audio equipment for creators, gamers, and audiophiles around
                        the world. Quality you can hear.</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Shop</h4>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-white transition">All Products</a></li>
                        <li><a href="#" className="hover:text-white transition">Featured</a></li>
                        <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
                        <li><a href="#" className="hover:text-white transition">Discounts</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Support</h4>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                        <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">Returns</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Social</h4>
                    <div className="flex gap-4">
                        <div
                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition cursor-pointer">
                            <FaInstagram /></div>
                        <div
                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition cursor-pointer">
                            <FaTwitter /></div>
                        <div
                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition cursor-pointer">
                            <FaFacebook /></div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-8 text-sm text-center">
                © 2026 AudioPro. All rights reserved. Built for performance.
            </div>
        </footer>
    )
}
