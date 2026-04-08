'use client'
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "@/store/slices/checkLoginSlice";
import { useEffect, useState } from "react";
import Link from "next/link";
import { logoutUser } from "@/actions/userActions";
import { FaUserCircle } from "react-icons/fa";

export default function LoginRegisterBtn() {
    const dispatch = useDispatch();
    const { user, loading } = useSelector((state) => state.user);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(checkLogin());
    }, []);

    const handleLogout = async () => {
        const result = await logoutUser();
        if (result.success) {
            dispatch(checkLogin());
            setOpen(false);
        }
    };

    if (loading) {
        return (
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full">
                Loading...
            </button>
        );
    }

    return (
        <div className="relative">

            {/* Main Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
            >
                <FaUserCircle size={18} />
                {user ? user.name : "Account"}
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-xl border overflow-hidden z-50">

                    {user ? (
                        <>
                            <Link
                                href="/orders"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                My Orders
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-500"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                Register
                            </Link>
                        </>
                    )}

                </div>
            )}
        </div>
    );
}
