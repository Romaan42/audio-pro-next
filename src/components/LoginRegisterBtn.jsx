import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "@/store/slices/checkLoginSlice";
import { useEffect } from "react";
import Link from "next/link";

export default function LoginRegisterBtn() {
    const dispatch = useDispatch();

    const { user, loading } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(checkLogin());
    }, []);

    if (!user && loading) return <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">loading..</button>
    return (
        <>
            {user ? (
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">
                    {user?.name}
                </button>
            ) : (
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/login"
                        className="text-gray-600 hover:text-indigo-600 font-medium"
                    >
                        Login
                    </Link>

                    <Link
                        href="/register"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
                    >
                        Register
                    </Link>
                </div>
            )}
        </>
    );
}
