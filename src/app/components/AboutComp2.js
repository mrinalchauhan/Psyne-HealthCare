"use client";
import { motion } from 'framer-motion';

const AboutComp2 = () => {
  return (
    <motion.div 
      className="about-container px-2 p-8"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.8, ease: "easeOut" }} 
    >
      <h2 className="text-4xl lg:text-5xl font-mono font-bold text-center mb-5 mt-4 p-3">About Psychopharmacologist</h2>
      <motion.p 
        className="mb-4 text-lg lg:text-2xl font-serif"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5 }}
      >
        A psychopharmacologist is a specialist who studies the effects of drugs on the mind and behavior. They are involved in the research, development, and clinical use of medications that affect mental health, treating disorders such as depression, anxiety, schizophrenia, and bipolar disorder. Their work is crucial in understanding how various substances interact with the brain's chemistry to improve patient outcomes.
      </motion.p>
      <motion.p 
        className="mb-4 text-lg lg:text-2xl font-serif"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.8 }}
      >
        The role of a psychopharmacologist often overlaps with that of a psychiatrist, but with a stronger emphasis on the scientific and clinical study of medications. They work closely with other healthcare professionals to ensure that patients receive the most effective treatment, combining pharmacological approaches with therapy and other interventions.
      </motion.p>
    </motion.div>
  );
};

export default AboutComp2;
