import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"; // Ensure this path is correct
import { eventCard } from '@/app/constants/appdata'; // Ensure this path is correct
import Image from 'next/image';

const Events = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className='lg:text-4xl md:text-3xl text-3xl mb-2 p-5 font-bold text-black font-serif text-center'>LATEST NEWS AND EVENTS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventCard.map((event) => (
                        <Card key={event.id} className="border-1 border-black shadow-2xl p-2">
                            <CardHeader>
                                <Image 
                                    src={event.imgUrl} 
                                    alt={event.title} 
                                    width={500}  // Set the appropriate width for the image
                                    height={300} // Set the appropriate height for the image
                                    className="w-full h-48 object-cover rounded-lg"
                                    layout="responsive" // Optionally ensure responsiveness
                                />
                                <CardTitle>{event.title}</CardTitle>
                                <CardDescription>{event.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Details about the event or other relevant content could go here.</p>
                            </CardContent>
                            <CardFooter>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
                                    Learn More
                                </button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
