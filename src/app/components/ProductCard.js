"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"; // Adjust the path based on your project structure
import { productCard } from '@/app/constants/appdata'; // Adjust the path based on your project structure
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa'; // Ensure you have react-icons installed

const ProductCard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    // Function to handle the search logic
    const filteredProducts = productCard.filter((product) => {
        const isMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        const isInCategory = filter === 'All' || product.category === filter;

        return isMatch && isInCategory;
    });

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                {/* Animated Search Bar and Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8 grid grid-cols-1 sm:grid-cols-4 items-center gap-4"
                >
                    {/* Category Buttons */}
                    <div className="flex space-x-4 sm:col-span-3">
                        {['All', 'Syrup', 'Tablet'].map((cat) => (
                            <motion.button
                                key={cat}
                                className={`px-4 py-2 rounded-full ${filter === cat ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300'}`}
                                onClick={() => setFilter(cat)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {cat} Categories
                            </motion.button>
                        ))}
                    </div>
                    {/* Search Bar */}
                    <div className="relative sm:col-span-1">
                        <motion.input
                            type="text"
                            placeholder="Search..."
                            className="w-full p-4 pl-10 border-2 border-blue-400 shadow-md text-black rounded-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        />
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black" />
                    </div>
                </motion.div>

                {/* Animated Product Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <motion.div 
                                key={product.id} 
                                className="border-1 border-black shadow-2xl p-4 rounded-lg bg-white"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect
                            >
                                <Card>
                                    <CardHeader>
                                        <Image 
                                            src={product.imgUrl} 
                                            alt={product.title} 
                                            width={500}  // Adjust these values based on the actual size of your images
                                            height={300} 
                                            className="w-full h-48 object-cover rounded-lg"
                                        />
                                        <CardTitle className="text-blue-700 p-5 text-center">{product.title}</CardTitle>
                                        <CardDescription>{product.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Some additional content can go here.</p>
                                    </CardContent>
                                    <CardFooter>
                                        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
                                            Learn More
                                        </button> */}
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))
                    ) : (
                        <p>No products found matching your criteria.</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProductCard;
