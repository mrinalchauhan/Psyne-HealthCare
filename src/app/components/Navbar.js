"use client";
import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/app/constants/appdata";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import { motion } from "framer-motion";  // Import framer motion

const Navbar = () => {
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <motion.div
        className="h-16 flex justify-between items-center md:px-[10%] sticky top-0 bg-white z-50 shadow-md"
        initial={{ y: -100 }}          
        animate={{ y: 0 }}             
        transition={{ duration: 0.5 }} 
      >
        {/* Logo */}
        <Link href="/" className="p-2 text-lg">
          <Image src="/logo.jpg" alt="logo" width={100} height={70} />
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex flex-col gap-1 pr-5" onClick={() => setIsMenu(!isMenu)}>
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
        </div>

        {/* Links for Larger Screens */}
        <div className="hidden md:flex gap-5 md:flex-row text-bold text-lg font-semibold">
          {links?.map((link) => (
            <div key={link.link} className="flex items-center gap-3"> {/* Added gap-3 */}
              <Link
                className={`${pathname === link.link ? "text-blue-500" : "text-black"} flex items-center`}
                href={link.link}
              >
                {link.icon} {/* Display the icon */}
                <span>{link.text}</span>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Sliding Menu for Small Screens */}
      <motion.div
        className={`fixed top-16 right-0 w-[75%] h-full bg-white z-50 shadow-lg md:hidden`}
        initial={{ x: "100%" }}   
        animate={{ x: isMenu ? 0 : "100%" }} 
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Links for Mobile Screens */}
        <div className="flex flex-col items-center gap-5 mt-10 text-bold text-lg font-semibold">
          {links?.map((link) => (
            <div key={link.link} className="flex items-center gap-3"> 
              <Link
                className={`${pathname === link.link ? "text-blue-500" : "text-black"} flex items-center`}
                href={link.link}
                onClick={() => setIsMenu(false)}  
              >
                {link.icon} {/* Display the icon */}
                <span>{link.text}</span>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
