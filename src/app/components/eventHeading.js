"use client";
import React, { useState } from 'react';

const EventHeading = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        // Handle the subscription logic here
        console.log('Email subscribed:', email);
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">Stay Informed with Latest News and Events</h1>
                    <h2 className="text-2xl font-semibold mb-6">Subscribe to learn about new news and events</h2>
                </div>
                <div className="flex justify-center">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="border border-gray-300 rounded-full px-5 shadow-2xl py-4 mr-2 w-full max-w-xs"
                    />
                    <button
                        onClick={handleSubscribe}
                        className="bg-blue-500 text-white px-5 py-4 shadow-2xl rounded-full hover:bg-blue-600"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EventHeading;
