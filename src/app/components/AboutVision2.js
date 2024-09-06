"use client"; // Ensures client-side rendering in Next.js

import Image from 'next/image';
import { motion } from 'framer-motion';

const VisionSection2 = () => {
  // Animation variants for text and image
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Adjusted duration for visibility
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <div className="flex justify-center p-5">
      <motion.div 
        className="max-w-7xl w-full flex flex-col md:flex-row gap-8"
        initial="hidden" // Define the initial animation state
        whileInView="visible" // Animate when the component is in view
        viewport={{ once: true }} // Trigger the animation only once
      >
        
        {/* Second Column - Image Section */}
        <motion.div 
          className="flex-1 flex items-center justify-center relative"
          variants={imageVariants}
        >
          <Image 
            src="/about3.jpg"
            alt="Vision Image" 
            width={500} 
            height={300} 
            layout="responsive" 
            priority 
          />
        </motion.div>

        {/* First Column - Text Section */}
        <motion.div 
          className="flex-1 bg-white border border-gray-400 shadow-2xl p-6 flex flex-col justify-between"
          variants={textVariants}
        >
          <div>
            <h2 className="lg:text-4xl text-3xl text-center font-mono font-bold mb-4">Our Vision</h2>
            <p className='lg:text-2xl font-serif'>
              Our vision is to be a leader in providing innovative solutions that 
              drive progress and improve lives. We strive to create an environment 
              where creativity and excellence thrive, empowering individuals and 
              organizations to reach their full potential. Through our commitment 
              to quality and integrity, we aim to make a positive impact on the 
              world around us.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VisionSection2;
