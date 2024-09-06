"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HomeAbout = () => {
    // Define animation variants
    const textVariants = {
        hidden: { opacity: 0, x: 50 }, // Slide in from right
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 text-center">
                {/* Animated Section Title */}
                <motion.h2
                    className="lg:text-4xl md:text-3xl text-3xl mb-2 p-5 font-bold text-black font-serif text-center"
                    initial="hidden"
                    whileInView="visible"
                    variants={textVariants}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
                >
                    About Us
                </motion.h2>
                {/* Animated Section Description */}
                <motion.p
                    className="text-gray-700 mb-6 p-5 px-5"
                    initial="hidden"
                    whileInView="visible"
                    variants={textVariants}
                    transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 80 }}
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quod delectus fugiat veritatis sapiente deleniti iure atque neque iste ipsam in error, fugit enim culpa dolores maiores, sint laudantium doloremque soluta labore? Architecto libero velit cupiditate, hic debitis fuga ab quibusdam minus inventore consectetur quas! Alias, ratione sed, aspernatur pariatur repellendus repudiandae numquam quam incidunt tenetur ex quis error perferendis dolores ipsum tempore quisquam facere rem? Perferendis corporis quos facere, nulla est modi sint porro. Vitae cum neque, omnis at rerum non odio aliquid placeat, minima necessitatibus molestias numquam alias exercitationem eligendi doloribus libero ratione, laborum dolorum autem. Nostrum, nulla!
                </motion.p>
                {/* Animated Explore More Button */}
                <Link href="/AboutUs" legacyBehavior>
                    <motion.a
                        className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600"
                        initial="hidden"
                        whileInView="visible"
                        variants={textVariants}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Explore More
                    </motion.a>
                </Link>
            </div>
        </section>
    );
};

export default HomeAbout;
