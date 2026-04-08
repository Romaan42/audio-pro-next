import React from "react";
import { Calendar } from "lucide-react"; // Optional icons
import { cookies } from "next/headers";

export default async function OrdersPage() {
    try {
        const cookiesStore = await cookies();
        const data = await fetch(`${process.env.BASE_URL}/api/admin/orders`, {
            headers: {
                "Cookie": cookiesStore.toString(),
            },
        });
        const orders = await data.json();

        const getStatusStyles = (status) => {
            switch (status) {
                case "Completed":
                    return "bg-green-100 text-green-700 border-green-200";
                case "Pending":
                    return "bg-yellow-100 text-yellow-700 border-yellow-200";
                case "Cancelled":
                    return "bg-red-100 text-red-700 border-red-200";
                default:
                    return "bg-gray-100 text-gray-700 border-gray-200";
            }
        };

        return (
            <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-900">
                <div className="max-w-6xl mx-auto">
                    <header className="mb-8 flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight">Orders</h1>
                            <p className="text-slate-500 mt-1">Manage and track your recent store transactions.</p>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                            Export CSV
                        </button>
                    </header>

                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase text-xs font-semibold">
                                    <th className="px-6 py-4 text-left">Order Details</th>
                                    <th className="px-6 py-4 text-left">Customer</th>
                                    <th className="px-6 py-4 text-left">Products</th>
                                    <th className="px-6 py-4 text-left">Revenue</th>
                                    <th className="px-6 py-4 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {orders?.map((order) => (
                                    <tr key={order.id} className="hover:bg-slate-50 transition-colors group">
                                        {/* Order ID & Date */}
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-blue-600">{order.id}</div>
                                            <div className="text-slate-400 text-xs mt-1 flex items-center">
                                                <Calendar className="w-3 h-3 mr-1" /> {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "N/A"}
                                            </div>
                                        </td>

                                        {/* Customer Info */}
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-700">{order.name}</div>
                                            <div className="text-slate-400 text-xs">{order.email}</div>
                                        </td>

                                        {/* Improved Products Column */}
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-xs font-medium text-slate-500">
                                                    {order?.items?.length} {order.items.length > 1 ? 'Items' : 'Item'}
                                                </span>
                                                <div className="flex flex-wrap gap-1">
                                                    {order?.items?.map((item, i) => (
                                                        <span key={i} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
                                                            {item.title}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </td>

                                        {/* Pricing */}
                                        <td className="px-6 py-4">
                                            <div className="font-semibold text-slate-800">
                                                ${order.totalPrice.toFixed(2)}
                                            </div>
                                        </td>

                                        {/* Status Pill */}
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${getStatusStyles(order.status)}`}>
                                                <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5" />
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );

    } catch (error) {
        console.log(error)
        return (<div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-red-600">Failed to Load Orders</h2>
                <p className="text-slate-500 mt-2">An error occurred while fetching the orders. Please try again later.</p>
            </div>
        </div>
        );
    }
}