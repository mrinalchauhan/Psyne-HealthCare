"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const EventHeading = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        // Handle the subscription logic here
        console.log('Email subscribed:', email);
    };

    // Animation variants for heading and input
    const headingVariant = {
        hidden: { opacity: 0, y: -50 },  // Start offscreen above
        visible: { opacity: 1, y: 0 }    // Slide in and fade in
    };

    const inputVariant = {
        hidden: { opacity: 0, scale: 0.9 },  // Start scaled down
        visible: { opacity: 1, scale: 1 }    // Scale up and fade in
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                {/* Animating Heading and Subheading */}
                <motion.div
                    className="text-center mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={headingVariant}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl font-bold mb-4">
                        Stay Informed with Latest News and Events
                    </h1>
                    <h2 className="text-2xl font-semibold mb-6">
                        Subscribe to learn about new news and events
                    </h2>
                </motion.div>

                {/* Animating Input and Button */}
                <motion.div
                    className="flex justify-center"
                    initial="hidden"
                    animate="visible"
                    variants={inputVariant}
                    transition={{ duration: 0.8, delay: 0.3 }} // Slight delay for staggered effect
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="border border-gray-300 rounded-full px-5 shadow-2xl py-4 mr-2 w-full max-w-xs"
                    />
                    <motion.button
                        onClick={handleSubscribe}
                        whileHover={{ scale: 1.05 }}  // Button hover animation
                        className="bg-blue-500 text-white px-10 py-4 shadow-2xl rounded-full hover:bg-blue-600"
                    >
                        Subscribe
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default EventHeading;
