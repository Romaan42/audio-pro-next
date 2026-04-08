import React from 'react'

import "./loader.css"

export default function Loading() {
    return (
        <main className="loader-container flex items-center justify-center min-h-screen bg-gray-100">
            <div className="loader"></div>
        </main>
    )
}
