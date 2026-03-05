'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function page() {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setMessage(null);

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.message || 'Registration failed');
            } else {
                router.push("/")
            }
        } catch (err) {
            console.error(err);
            setError('Server error');
        }
    };

    return (
        <div className="max-w-md mx-auto my-16 p-4 shadow rounded">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            {message && <p className="text-green-500 mb-2">{message}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">

                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 px-2 py-1"
                        required
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border-gray-300 border px-2 py-1"
                        required
                    />
                </label>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
