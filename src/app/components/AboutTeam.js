import React from 'react';
import { AboutCardData1 } from '@/app/constants/appdata'; // Adjust the path based on your project structure

const AboutTeam = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-5xl font-bold font-mono font-bold text-center mb-8">Our Team Members</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {AboutCardData1.map((item) => (
                        <div 
                            key={item.id} 
                            className="bg-white border border-gray-200 rounded-lg shadow-2xl p-6 flex flex-col items-center text-center"
                        >
                            <img 
                                src={item.imgUrl} 
                                alt={item.name} 
                                className="w-32 h-32 object-cover rounded-full mb-4"
                            />
                            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutTeam;
