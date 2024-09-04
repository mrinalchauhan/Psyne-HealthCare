// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Import the clientcarousel array
// import { clientcarousel } from '@/app/constants/appdata';

// const HomeReview = () => {
//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-8">MEET OUR EXPERTS</h2>
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={30}
//           centeredSlides={true}
//           slidesPerView={3}
//           navigation
//           pagination={{ clickable: true }}
//           loop={true}
//           className="mySwiper"
//         >
//           {clientcarousel.map((client, index) => (
//             <SwiperSlide key={client.id} className="transition-transform duration-500 ease-in-out scale-90 hover:scale-105 border-2 border-green-700 shadow-md">
//               <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
//                 <p className="text-gray-700 mb-4 text-center">{client.description}</p>
//                 <img
//                   src={client.imgUrl}
//                   alt={client.title}
//                   className="w-24 h-24 rounded-full mb-4"
//                 />
//                 <h3 className="text-xl font-semibold text-center">{client.title}</h3>
//                 <p className="text-center text-gray-600">Client</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default HomeReview;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';

// Import the clientcarousel array
import { clientcarousel } from '@/app/constants/appdata';

const HomeReview = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-4xl md:text-3xl text-3xl mb-2 p-5 font-bold text-black font-serif text-center ">MEET OUR EXPERTS</h2>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper"
        >
          {clientcarousel.map((client) => (
            <SwiperSlide
              key={client.id}
              className="transition-transform duration-500 ease-in-out scale-90 hover:scale-105 border-2 border-black-700 shadow:md"
            >
              <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
                <p className="text-gray-700 mb-4 text-center">{client.description}</p>
                <Image
                  src={client.imgUrl}
                  alt={client.title}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-center">{client.title}</h3>
                <p className="text-center text-gray-600">Client</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeReview;
