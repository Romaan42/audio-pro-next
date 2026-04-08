"use client";

import { adminLogin } from '@/actions/userActions';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useActionState, useEffect } from 'react'

export default function page() {
    const router = useRouter()
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [state, action, loading] = useActionState(adminLogin)

    useEffect(() => {
        if (state?.success) {
            router.push("/admin")
        }
    }, [state])

    const handleOnSubmit = () => {
        action({ email, password });
    }
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <form className='shadow-xl p-4' action={handleOnSubmit}>
                <input type="email" placeholder='email' className='border-2 border-gray-300 rounded-md px-4 py-2 mb-4 w-full' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='password' className='border-2 border-gray-300 rounded-md px-4 py-2 mb-4 w-full' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' className='bg-blue-500 text-white rounded-md px-4 py-2 w-full'>Login</button>
            </form>
        </div>
    )
}
