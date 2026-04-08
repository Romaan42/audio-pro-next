import { cookies } from 'next/headers';


export default async function OrdersPage() {
    const cookieStore = await cookies();
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/orders`, {
            cache: "no-store",
            headers: {
                Cookie: cookieStore.toString()
            }
        });

        const data = await res.json() || [];

        console.log(data)
        return (
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-2xl font-semibold mb-6">My Orders</h1>

                    <div className="grid gap-4">
                        {data?.orders?.length === 0 ? (
                            <p className="text-gray-500">No orders yet.</p>
                        ) : (
                            data?.orders?.map((order) => {
                                const upDate = new Date(order.createdAt);
                                const formattedDate = upDate.toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                });
                                order.date = formattedDate;
                                return (
                                    <div
                                        key={order._id}
                                        className="bg-white p-5 rounded-2xl shadow flex justify-between items-center"
                                    >
                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Order #{order._id}
                                            </p>
                                            <p className="text-sm text-gray-500">{order.date}</p>
                                        </div>

                                        <div className="text-right">
                                            <p className="font-semibold text-gray-800">
                                                ${order.totalPrice}
                                            </p>
                                            <p
                                                className={`text-sm ${order.status === "Completed"
                                                    ? "text-green-500"
                                                    : "text-yellow-500"
                                                    }`}
                                            >
                                                {order.status}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })

                        )}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        return <h1>failed to load the orders</h1>
    }
}