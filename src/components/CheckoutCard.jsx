import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CheckoutSuccessCard({ success }) {
    const router = useRouter()

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
                <div className="flex justify-center mb-4">
                    <CheckCircle className="text-green-500 w-16 h-16" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Payment Successful
                </h2>
                <p className="text-gray-600 mb-6">
                    Thank you for your purchase! Your order has been placed and is being processed. You will receive an email confirmation shortly.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="font-medium text-gray-800">#{success.orderId}</p>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition" onClick={() => router.push('/shop')}>
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}
