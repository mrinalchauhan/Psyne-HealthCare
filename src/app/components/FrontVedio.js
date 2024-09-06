"use client";
import React from 'react';
import { motion } from 'framer-motion';

const FullScreenVideo = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <motion.video
                src="/frontvedio.mp4" // Replace with the actual path to your video file
                type="video/mp4"  // Ensure the type matches your video format
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            />
        </section>
    );
};

export default FullScreenVideo;
