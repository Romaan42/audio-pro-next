
export default function AdminDashboard() {

    return (
        <div className="flex-1">
            {/* Header */}
            <header className="bg-white shadow p-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold">Dashboard</h1>
                {/* <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogout}>
                    Logout
                </button> */}
            </header>

            {/* Content */}
            <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-gray-500">Total Users</h2>
                    <p className="text-2xl font-bold">1,245</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-gray-500">Orders</h2>
                    <p className="text-2xl font-bold">320</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-gray-500">Revenue</h2>
                    <p className="text-2xl font-bold">$12,300</p>
                </div>
            </main>
        </div>
    );
}
