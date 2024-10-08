"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { motion } from 'framer-motion'; 
import { AboutFounderCard } from '@/app/constants/appdata'; 

SwiperCore.use([Navigation, Pagination]);

const AboutFounder = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Title */}
      <h2 className="font-mono font-bold text-3xl lg:text-5xl text-center mb-10 px-5">
        Our Founders
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}  // Show 3 slides at a time
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
      >
        {AboutFounderCard.map((item, index) => (
          <SwiperSlide key={item.id}>
            <motion.div
              className="bg-white px-1 rounded-lg shadow-2xl p-10 text-center flex flex-col items-center mb-2"
              initial={{ opacity: 0, y: 50 }} // Start animation out of view
              whileInView={{ opacity: 1, y: 0 }} // Animate when in view
              transition={{ duration: 0.6, delay: index * 0.2 }} // Delay to stagger animations
              viewport={{ once: true }} // Ensures the animation happens only once when the element comes into view
            >
              <img
                src={item.imgUrl}
                alt={item.name}
                className="w-auto h-auto object-cover rounded-lg mb-6"
              />
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-800">{item.description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutFounder;
