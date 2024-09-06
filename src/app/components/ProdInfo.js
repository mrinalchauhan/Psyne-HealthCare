"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion

const ProdInfo = () => {
    // Framer Motion animation variants
    const textVariant = {
        hidden: { opacity: 0, x: -100 },   // Start state for text
        visible: { opacity: 1, x: 0 }      // End state for text
    };

    const imageVariant = {
        hidden: { opacity: 0, scale: 0.8 }, // Start state for image
        visible: { opacity: 1, scale: 1 }   // End state for image
    };

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Column 1 - Heading, Paragraph, and Button with Animation */}
                    <motion.div
                        className="flex flex-col justify-center space-y-6"
                        initial="hidden"               // Initial animation state
                        animate="visible"              // End animation state
                        variants={textVariant}         // Attach the text variant
                        transition={{ duration: 0.8 }} // Animation duration
                    >
                        <h2 className="text-3xl font-bold">Our Products</h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa fuga delectus facere consequuntur eligendi assumenda, veniam repellat eius exercitationem esse minima. Ipsam architecto nihil impedit dolore assumenda tenetur ipsa distinctio deleniti in quos quis, neque tempora nobis corrupti sapiente libero. Tenetur distinctio ex, possimus veritatis a corrupti autem explicabo consectetur.
                        </p>
                        <motion.button 
                            whileHover={{ scale: 1.05 }} // Hover animation for button
                            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 w-1/2"
                        >
                            Get in Touch With Us
                        </motion.button>
                    </motion.div>

                    {/* Column 2 - Image with Animation */}
                    <motion.div
                        className="flex items-center justify-center"
                        initial="hidden"               // Initial animation state
                        animate="visible"              // End animation state
                        variants={imageVariant}        // Attach the image variant
                        transition={{ duration: 1 }}   // Animation duration
                    >
                        <Image
                            src="/prod2.jpg" // Replace with the actual image path
                            alt="Product Image"
                            width={500}      // Set width according to your image
                            height={500}     // Set height according to your image
                            className="w-1/2 h-auto rounded-lg"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProdInfo;
