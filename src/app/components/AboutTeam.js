"use client"; // Ensure client-side rendering

import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { AboutCardData1 } from '@/app/constants/appdata'; // Adjust the path as needed
import Image from 'next/image';

const AboutTeam = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-5xl font-bold font-mono text-center mb-8">
                    Our Team Members
                </h2>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {AboutCardData1.map((item) => (
                        <motion.div
                            key={item.id}
                            className="bg-white border border-gray-200 rounded-lg shadow-2xl p-6 flex flex-col items-center text-center"
                            variants={cardVariants}
                        >
                            <Image 
                                src={item.imgUrl} 
                                alt={item.name} 
                                width={128}
                                height={128}
                                className="object-cover rounded-full mb-4"
                            />
                            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                            <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default AboutTeam;
