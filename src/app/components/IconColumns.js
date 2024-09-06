"use client";
import { PiBuildingLight } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { RiMedicineBottleLine } from "react-icons/ri";
import { motion } from "framer-motion";

const IconColumns = () => {
  const icons = [
    { icon: <PiBuildingLight size={48} />, title: "Manufacturing Unit" },
    { icon: <FaRegUser size={48} />, title: "1000+ Employees" },
    { icon: <RiMedicineBottleLine size={48} />, title: "20+ Products" },
  ];

  // Framer Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and move from below
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="icon-columns-container p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants} // Apply container animations
    >
      <div className="flex flex-col md:flex-row justify-around items-center gap-8">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            className="text-center"
            variants={itemVariants} // Apply individual item animations
          >
            <motion.div className="mb-4">{item.icon}</motion.div>
            <motion.h3 className="text-lg font-bold">{item.title}</motion.h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default IconColumns;
