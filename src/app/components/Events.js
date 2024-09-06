"use client";
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"; // Ensure this path is correct
import { eventCard } from '@/app/constants/appdata'; // Ensure this path is correct
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // For triggering animations when in view

const Events = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className='lg:text-4xl md:text-3xl text-2xl mb-6 font-bold text-black font-serif text-center'>
                    LATEST NEWS AND EVENTS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventCard.map((event, index) => (
                        <EventCard key={event.id} event={event} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Component for each individual event card
const EventCard = ({ event, index }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 }); // Trigger animation when the card is in view

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }} // Slide in from the left
            animate={inView ? { opacity: 1, x: 0 } : {}} // Animate to opacity 1 and x:0 when in view
            transition={{ duration: 0.8, delay: index * 0.2 }} // Delay for staggered animation
            className="border-1 border-black shadow-2xl p-2"
        >
            <Card className="rounded-lg overflow-hidden">
                <CardHeader className="p-4">
                    <Image 
                        src={event.imgUrl} 
                        alt={event.title} 
                        width={500}  // Set the appropriate width for the image
                        height={300} // Set the appropriate height for the image
                        className="w-full h-48 object-cover rounded-lg"
                        layout="responsive" // Ensure responsiveness
                    />
                    <CardTitle className="text-lg font-semibold mt-2">{event.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                    <p>Details about the event or other relevant content could go here.</p>
                </CardContent>
                <CardFooter className="p-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
                        Learn More
                    </button>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default Events;
