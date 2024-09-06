"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HomeProduct = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleLearnMore = () => {
        setIsExpanded(!isExpanded);
    };

    // Define animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    const extraTextVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 'auto' },
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h1 className="lg:text-4xl md:text-3xl text-3xl mb-2 p-5 font-bold text-black font-serif text-center">
                    OUR PRODUCTS
                </h1>
                <motion.div
                    className="flex flex-col md:flex-row gap-5"
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    transition={{ duration: 0.8 }}
                >
                    {/* Column 1 - Medicine Picture */}
                    <motion.div
                        className="flex-1 flex items-center justify-center py-5"
                        initial="hidden"
                        whileInView="visible"
                        variants={imageVariants}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image
                            src="/prod2.png" 
                            alt="Medicine"
                            width={400} 
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </motion.div>

                    {/* Column 2 - Text Content */}
                    <motion.div
                        className="flex-1 flex flex-col justify-center space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        variants={textVariants}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h2 className="text-3xl font-bold">Syncaro Medicine</h2>

                        <div className="space-y-4">
                            <p className="text-gray-700">
                                Syncaro Medicine is known for its efficacy in treating a variety of conditions. Its unique formulation ensures optimal results with minimal side effects.
                            </p>
                            <p className="text-gray-700">
                                Our medicine has been extensively tested and approved by health authorities to ensure the highest standards of safety and effectiveness.
                            </p>
                            <p className="text-gray-700">
                                With Syncaro Medicine, you can trust in a product that not only delivers results but also prioritizes your health and well-being.
                            </p>
                            <motion.div
                                className="space-y-4"
                                initial="hidden"
                                animate={isExpanded ? "visible" : "hidden"}
                                variants={extraTextVariants}
                                transition={{ duration: 0.8 }}
                            >
                                <p className="text-gray-700">
                                    Additional information about Syncaro Medicine includes its benefits in long-term treatments and how it interacts with other medications.
                                </p>
                                <p className="text-gray-700">
                                    Our commitment to quality means that Syncaro Medicine is produced in facilities adhering to stringent quality control standards.
                                </p>
                                <p className="text-gray-700">
                                    We continuously monitor and evaluate the performance of our medicine to ensure it meets the evolving needs of our patients.
                                </p>
                            </motion.div>
                        </div>

                        <div className="flex space-x-4">
                            <motion.button
                                onClick={handleLearnMore}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isExpanded ? 'Show Less' : 'Learn More'}
                            </motion.button>
                            <Link
                                href="/Products"
                                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                            >
                                See More Products
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeProduct;
