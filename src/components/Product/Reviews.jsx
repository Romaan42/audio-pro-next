"use client"
import React, { useState } from "react";


const ReviewsSystem = ({ productId, reviews }) => {

    const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" });
    const [hover, setHover] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newReview.name || !newReview.comment) return alert("Please fill out all fields!");

        // setReviews([reviewToAdd, ...reviews]);
        const res = await fetch("/api/put-review", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId, ...newReview }),
        });
        const data = await res.json();
        console.log(data)
        setNewReview({ name: "", rating: 5, comment: "" }); // Reset form
    };

    // Star Component for reuse
    const StarIcon = ({ fill, onMouseEnter, onMouseLeave, onClick, className }) => (
        <svg
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`cursor-pointer transition-all duration-200 ${className}`}
            fill={fill ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
    );

    return (
        <div className="max-w-5xl mx-auto my-12 grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">

            {/* --- LEFT COLUMN: ADD REVIEW FORM --- */}
            <div className="lg:col-span-1">
                <form
                    onSubmit={handleSubmit}
                    className="sticky top-8 bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
                >
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Write a Review</h3>
                    <p className="text-sm text-slate-500 mb-6">Share your experience with the community.</p>

                    <div className="space-y-4">
                        {/* Rating Selector */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Rating</label>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <StarIcon
                                        key={star}
                                        className={`w-7 h-7 ${(hover || newReview.rating) >= star ? "text-amber-400" : "text-slate-200"}`}
                                        fill={(hover || newReview.rating) >= star}
                                        onMouseEnter={() => setHover(star)}
                                        onMouseLeave={() => setHover(0)}
                                        onClick={() => setNewReview({ ...newReview, rating: star })}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Name Input */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Your Name</label>
                            <input
                                type="text"
                                placeholder="e.g. Alex Rivera"
                                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                                value={newReview.name}
                                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                            />
                        </div>

                        {/* Comment Input */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Review</label>
                            <textarea
                                rows="4"
                                placeholder="What did you think of the quality?"
                                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                                value={newReview.comment}
                                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-[0.98]"
                        >
                            Post Review
                        </button>
                    </div>
                </form>
            </div>

            {/* --- RIGHT COLUMN: REVIEWS LIST --- */}
            <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-slate-900">Recent Feedback</h2>
                    <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full border border-indigo-100">
                        {reviews.length} Total Reviews
                    </span>
                </div>

                {reviews.length === 0 ? (
                    <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                        <p className="text-slate-400 font-medium">No reviews yet. Be the first!</p>
                    </div>
                ) : (
                    reviews?.map((review, i) => {
                        const date = new Date(review.createdAt);
                        review.createdAt = date.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        });

                        return (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-1 duration-300"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
                                            {review.name}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 tracking-tight">{review.name}</h4>
                                            <span className="text-[10px] uppercase font-bold text-slate-400">{review.createdAt}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} fill={i < review.rating} className={`w-4 h-4 ${i < review.rating ? "text-amber-400" : "text-slate-100"}`} />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed italic border-l-4 border-indigo-50 pl-4">
                                    "{review.comment}"
                                </p>
                            </div>)
                    })
                )}
            </div>
        </div>
    );
};

export default ReviewsSystem;