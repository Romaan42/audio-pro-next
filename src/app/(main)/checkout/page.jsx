"use client";
import { useState } from "react";
import { CreditCard, Truck, ShieldCheck, ShoppingBag } from "lucide-react"; // Assuming Lucide icons
import { useDispatch, useSelector } from "react-redux";
import Loading from "../shop/loading";
import Image from "next/image";
import axios from "axios";
import CheckoutSuccessCard from "@/components/CheckoutCard";
import { getCartItems } from "@/store/slices/cartItemsSlice";

export default function CheckoutPage() {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        address: "",
    });

    const [success, setSuccess] = useState({ success: null, message: "", orderId: null });
    const [formLoading, setLoading] = useState(false);

    const { items, loading, error } = useSelector((state) => state.cart);

    const subtotal = items?.reduce((acc, item) => acc + item.price * item.qty, 0);
    const shipping = 5.0;
    const total = subtotal + shipping;


    const handleCheckout = async () => {
        try {
            setLoading(true);
            // Simulate an API call
            const result = await axios.post("/api/checkout", {
                ...formData,
                items,
                totalPrice: total,
            });
            if (result.data.success) {
                setSuccess({ success: true, message: result.data.message, orderId: result.data.orderId });
                dispatch(getCartItems())
            }
        } catch (error) {
            setSuccess({ success: false, message: "Failed to process checkout" });
        } finally {
            setLoading(false);

        }

    }

    if (success.success) return <CheckoutSuccessCard success={success} />;

    if (!items || loading) return <Loading />;
    if (error)
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <h1>{error}</h1>
            </div>
        );
    if (items?.length === 0)
        return (
            <div>
                <h1>Your cart Is empty</h1>
            </div>
        );

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-12 font-sans text-slate-900">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
                {/* Left Column: Billing & Shipping */}
                <div className="lg:col-span-2 space-y-6">
                    <header className="mb-8">
                        <h1 className="text-3xl font-extrabold tracking-tight">Checkout</h1>
                        <p className="text-slate-500">
                            Please enter your details to complete your purchase.
                        </p>
                    </header>

                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex items-center gap-2 mb-6 text-blue-600">
                            <Truck size={20} />
                            <h2 className="text-xl font-semibold text-slate-800">
                                Shipping Information
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-slate-600">
                                    Full Name
                                </label>
                                <input
                                    className="border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                    placeholder="John Doe"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-slate-600">
                                    Email Address
                                </label>
                                <input
                                    className="border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                    placeholder="john@example.com"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                                />
                            </div>
                            <input
                                className="border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                placeholder="Phone Number"
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                            <input
                                className="border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                placeholder="City"
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            />
                        </div>

                        <textarea
                            className="border border-slate-200 p-3 rounded-xl w-full mt-4 h-32 focus:ring-2 focus:ring-blue-500 outline-none transition"
                            placeholder="Detailed Street Address"
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        />
                    </section>

                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex items-center gap-2 mb-6 text-blue-600">
                            <CreditCard size={20} />
                            <h2 className="text-xl font-semibold text-slate-800">
                                Payment Method
                            </h2>
                        </div>
                        <div className="flex gap-4">
                            <button className="flex-1 border-2 border-blue-500 bg-blue-50 p-4 rounded-xl flex flex-col items-center gap-2">
                                <span className="font-bold">Credit Card</span>
                            </button>
                            <button className="flex-1 border-2 border-slate-100 p-4 rounded-xl flex flex-col items-center gap-2 hover:border-slate-200 transition">
                                <span className="font-bold text-slate-400">PayPal</span>
                            </button>
                        </div>
                    </section>
                </div>

                {/* Right Column: Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 sticky top-8">
                        <div className="flex items-center gap-2 mb-6">
                            <ShoppingBag size={20} className="text-slate-400" />
                            <h2 className="text-xl font-bold">Order Summary</h2>
                        </div>

                        <div className="space-y-4 mb-6">
                            {items?.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={48}
                                            height={48}
                                            className="bg-slate-100 rounded-lg"
                                        />
                                        <div>
                                            <p className="font-semibold text-slate-800">
                                                {item.title.slice(0, 20)}...
                                            </p>
                                            <p className="text-xs text-slate-500 italic">
                                                Qty: {item.qty}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="font-medium">${item.price * item.qty}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3 pt-6 border-t border-slate-100">
                            <div className="flex justify-between text-slate-500">
                                <span>Subtotal</span>
                                <span>${subtotal?.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-slate-500">
                                <span>Shipping</span>
                                <span>${shipping?.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-xl font-extrabold text-slate-900 pt-2">
                                <span>Total</span>
                                <span>${total?.toFixed(2)}</span>
                            </div>
                        </div>

                        {formLoading ? <button
                            className="w-full mt-8 bg-blue-300 cursor-not-allowed hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-blue-200 shadow-lg transition-all transform hover:-translate-y-1 active:scale-95"
                        >
                            Complete Purchase
                        </button> :

                            <button
                                className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-blue-200 shadow-lg transition-all transform hover:-translate-y-1 active:scale-95"
                                onClick={handleCheckout}
                            >
                                Complete Purchase
                            </button>}

                        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                            <ShieldCheck size={14} />
                            <span>Secure encrypted checkout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
