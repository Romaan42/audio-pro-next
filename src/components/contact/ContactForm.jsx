"use client"

import { contactFormSubmit } from "@/actions/userActions";
import { useActionState, useEffect, useState } from "react";

export default function ContactForm() {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const [state, action, loading] = useActionState(contactFormSubmit)

    useEffect(() => {
        if (state?.error) {
            setError(state.error);
            setSuccess(null);
        } else if (state?.success) {
            setError(null);
            setSuccess(state.message);
        }
    }, [state]);

    const submitAction = (formData) => {
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        if (!name || !email || !message) {
            setError("All fields are required.");
            setSuccess(null);
            return;
        }
        return action({ name, email, message })
    };

    if (success) return (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> {success}</span>
        </div>
    )

    return (
        <form className="space-y-6" action={submitAction}>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    name='name'
                    placeholder="Your name"
                    className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    name='email'
                    placeholder="you@example.com"
                    className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Message
                </label>
                <textarea
                    rows="5"
                    name='message'
                    placeholder="Write your message..."
                    className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                ></textarea>
            </div>
            <div>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <strong className="font-bold">Error!</strong>
                        <span className="block sm:inline"> {error}</span>
                    </div>
                )}
            </div>
            {
                loading ? <button
                    type="button"
                    className="w-full bg-purple-500 text-white py-3 rounded-lg font-medium cursor-not-allowed hover:bg-purple-900 transition"
                >
                    Send Message
                </button> :
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
                    >
                        Send Message
                    </button>
            }
        </form>
    )
}
