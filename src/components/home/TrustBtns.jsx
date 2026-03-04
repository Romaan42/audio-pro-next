import { FaFire } from "react-icons/fa";
import { PiVanDuotone } from "react-icons/pi";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { MdSupportAgent } from "react-icons/md";


export default function TrustBtns() {
    return (
        <section className="py-12 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-full"><PiVanDuotone size={23} />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Free Delivery</p>
                        <p className="text-xs text-gray-500">Orders over $150</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-full"><FaFire size={23} />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Secure Payment</p>
                        <p className="text-xs text-gray-500">100% SSL Secure</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-full"><HiMiniArrowPathRoundedSquare size={23} />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Easy Returns</p>
                        <p className="text-xs text-gray-500">30-day window</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-full"><MdSupportAgent size={23} />
                    </div>
                    <div>
                        <p className="font-bold text-sm">24/7 Support</p>
                        <p className="text-xs text-gray-500">Dedicated help</p>
                    </div>
                </div>
            </div>
        </section>)
}
