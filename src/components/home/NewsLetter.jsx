import React from 'react'

export default function NewsLetter() {
    return (
        <section className="bg-gray-100 py-20 px-6 my-10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Join the Audio Club</h2>
                <p className="text-gray-600 mb-8 text-lg">Subscribe to get special offers, free giveaways, and
                    once-in-a-lifetime deals.</p>
                <form className="flex flex-col sm:flex-row gap-4">
                    <input type="email" placeholder="Enter your email"
                        className="flex-grow py-4 px-6 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
                    <button
                        className="bg-indigo-600 text-white px-10 py-4 rounded-md font-bold hover:bg-indigo-700 transition">Subscribe</button>
                </form>
            </div>
        </section>
    )
}
