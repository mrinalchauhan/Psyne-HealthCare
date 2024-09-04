import Link from 'next/link';
import React, { useState } from 'react';

const HomeProduct = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleLearnMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
            <h1 className="lg:text-4xl md:text-3xl text-3xl mb-2 p-5 font-bold text-black font-serif text-center "> OUR PRODUCTS</h1>
                <div className="flex flex-col md:flex-row gap-5">
               
                    {/* Column 1 - Medicine Picture */}
                    <div className="flex-1 flex items-center justify-center py-5">
                        
                        <img
                            src="/prod1.png" // Replace with actual image path
                            alt="Medicine"
                            className="w-auto h-auto object-cover rounded-lg "
                        />
                    </div>

                    {/* Column 2 - Text Content */}
                    <div className="flex-1 flex flex-col justify-center space-y-6">
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
                            {isExpanded && (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Additional information about Syncaro Medicine includes its benefits in long-term treatments and how it interacts with other medications.
                                    </p>
                                    <p className="text-gray-700">
                                        Our commitment to quality means that Syncaro Medicine is produced in facilities adhering to stringent quality control standards.
                                    </p>
                                    <p className="text-gray-700">
                                        We continuously monitor and evaluate the performance of our medicine to ensure it meets the evolving needs of our patients.
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="flex space-x-4">
                            <button
                                onClick={handleLearnMore}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                            >
                                {isExpanded ? 'Show Less' : 'Learn More'}
                            </button>
                            <Link
                                href="/Products"
                                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                            >
                                See More Products
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeProduct;
