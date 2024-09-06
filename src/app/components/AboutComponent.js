"use client";
import Image from 'next/image';
import { motion } from 'framer-motion'; 

const AboutXYZ = () => {
  // Animation variants for text and image
  const textVariant = {
    hidden: { opacity: 0, y: 50 },  // Start hidden and below the view
    visible: { opacity: 1, y: 0 }   // Animate to full opacity and position
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 }, // Image starts slightly smaller
    visible: { opacity: 1, scale: 1 }   // Image grows to full size
  };

  return (
    <div className="about-xyz-container p-8 px-2">
      {/* Animated Heading */}
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={textVariant}
        transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition for heading
        className="md:text-4xl lg:text-5xl text-center font-bold mb-6 font-mono"
      >
        About Pysne Group
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* First Column with Animated Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }} // Delayed for a staggered effect
          className="flex-1 flex flex-col justify-between"
        >
          <p className="text-xl font-serif lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at quam sed sapien venenatis tincidunt. Sed ultricies eros ut turpis aliquam, a suscipit massa sollicitudin.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae porro cumque tempora animi, iste cupiditate libero et. Ullam, molestias quibusdam?
          </p>
          <p className="text-xl font-serif lg:text-2xl">
            Donec ac metus non elit fermentum fermentum. Maecenas eget nibh auctor, pharetra lacus non, convallis libero. Vestibulum suscipit facilisis erat, at interdum nisl venenatis a.
          </p>
          <p className="text-xl font-serif lg:text-2xl">
            Donec ac metus non elit fermentum fermentum. Maecenas eget nibh auctor, pharetra lacus non, convallis libero. Vestibulum suscipit facilisis erat, at interdum nisl venenatis a.
            Donec ac metus non elit fermentum fermentum. Maecenas eget nibh auctor, pharetra lacus non, convallis libero. Vestibulum suscipit facilisis erat, at interdum nisl venenatis a.
          </p>
        </motion.div>

        {/* Second Column with Animated Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariant}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }} // Delayed image entrance
          className="flex-1 flex flex-col justify-between"
        >
          <p className="text-lg font-serif lg:text-2xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien a risus condimentum porttitor.
          </p>
          <div className="mt-auto max-w-2xl mx-auto">
            <Image 
              src="/about2.jpeg"
              alt="Sample Image" 
              width={300} 
              height={300} 
              layout="responsive" 
              priority 
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutXYZ;
