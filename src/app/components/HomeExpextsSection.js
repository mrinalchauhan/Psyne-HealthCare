"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Import the clientcarousel array
import { clientcarousel } from '@/app/constants/appdata';

const HomeExpert = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-4xl md:text-3xl text-3xl mb-8 p-5 font-bold text-black font-serif text-center">
          MEET OUR EXPERTS
        </h2>
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch:2 ,
              depth: 0,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: true,
              },
            }}
          >
            {clientcarousel.map((client, index) => (
              <SwiperSlide
                key={client.id}
                className="transition-transform duration-700 ease-in-out transform scale-90 hover:scale-110 border-2 border-gray-300 shadow-lg"
              >
                <motion.div
                  className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <p className="text-gray-700 mb-4 text-center">{client.description}</p>
                  <Image
                    src={client.imgUrl}
                    alt={client.title}
                    width={96}   // Adjust width based on your design
                    height={96}  // Adjust height based on your design
                    className="rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold text-center">{client.title}</h3>
                  <p className="text-center text-gray-600">Client</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeExpert;
