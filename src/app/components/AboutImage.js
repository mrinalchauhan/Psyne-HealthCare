"use client";
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion

const AboutImage = () => {
    // Animation variants for image and text
    const imageVariant = {
        hidden: { opacity: 0, scale: 0.8 }, // Start invisible and slightly smaller
        visible: { opacity: 1, scale: 1 }  // Animate to full opacity and size
    };

    const textVariant = {
        hidden: { opacity: 0, x: -100 },  // Start offscreen to the left
        visible: { opacity: 1, x: 0 }     // Slide in from the left and fade in
    };

    return (
        <div className="relative about-image-container my-8 w-full h-96">
            {/* Animated Image */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariant}
                transition={{ duration: 1, ease: 'easeInOut' }} // Smooth transition
                className="absolute inset-0"
            >
                <Image 
                    src="/about.jpeg"
                    alt="About Us" 
                    layout="fill"
                    objectFit="cover" 
                    priority 
                    className="rounded-sm border-1 border-black shadow-2xl"
                />
            </motion.div>

            {/* Animated Text Overlay */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariant}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }} // Staggered entry for text
                className="absolute left-6 bottom-10 w-full flex"
            >
                <h2 className="text-white font-bold text-2xl lg:text-4xl px-4 bg-opacity-50">
                    About Us
                </h2>
            </motion.div>
        </div>
    );
};

export default AboutImage;
