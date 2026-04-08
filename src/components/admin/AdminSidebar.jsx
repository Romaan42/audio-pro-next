"use client"
import { adminLogout } from '@/actions/userActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowRightFromBracket } from 'react-icons/fa6'

const AdminSidebar = () => {
    const router = useRouter()
    const handleLogout = async () => {
        const result = await adminLogout()

        if (result.success) {
            alert(result.message)
            router.push("/i-am-admin")
        }

    };
    return (
        <aside className='min-h-screen'>
            <div className="w-64 h-screen bg-gray-800 text-white flex flex-col  fixed top-0">
                <div className="p-4 text-2xl font-bold">Admin Panel</div>
                <nav className="flex-1">
                    <ul className='p-4 space-y-2'>
                        <li><Link className=' block p-2 rounded-2xl hover:bg-blue-500' href="/admin">Dashboard</Link></li>
                        <li><Link className=' block p-2 rounded-2xl hover:bg-blue-500' href="/admin/products">Products</Link></li>
                        <li><Link className=' block p-2 rounded-2xl hover:bg-blue-500' href="/admin/add-new">Add New Product</Link></li>
                        <li><Link className=' block p-2 rounded-2xl hover:bg-blue-500' href="/admin/orders">Orders</Link></li>
                    </ul>
                </nav>
                <button className='p-2 bg-red-300 rounded-2xl hover:bg-red-500 m-4 cursor-pointer flex justify-center items-center gap-3' onClick={handleLogout}>
                    Logout <FaArrowRightFromBracket className='mt-1' />
                </button>
            </div>
        </aside>
    )
}

export default AdminSidebar