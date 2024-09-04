import React from 'react';

const ProdInfo = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Column 1 - Heading, Paragraph, and Button */}
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl font-bold">Our Products</h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa fuga delectus facere consequuntur eligendi assumenda, veniam repellat eius exercitationem esse minima. Ipsam architecto nihil impedit dolore assumenda tenetur ipsa distinctio deleniti in quos quis, neque tempora nobis corrupti sapiente libero. Tenetur distinctio ex, possimus veritatis a corrupti autem explicabo consectetur.
                        </p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 w-1/2">
                            Get in Touch With Us
                        </button>
                    </div>

                    {/* Column 2 - Image */}
                    <div className="flex items-center justify-center">
                        <img
                            src="/prod2.jpg" // Replace with the actual image path
                            alt="Product Image"
                            className="w-1/2 h-auto rounded-lg "
                        />
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default ProdInfo;
