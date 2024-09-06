"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { clientcarousel } from '@/app/constants/appdata';

const HomeReview = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="lg:text-4xl md:text-3xl text-3xl mb-8 p-5 font-bold text-black font-serif text-center">WHAT OUR CUSTOMERS SAY</h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {clientcarousel.map((client, index) => (
                        <SwiperSlide key={client.id}>
                            <div
                                className={`transition-transform duration-500 ${index === 1 ? 'scale-110' : 'scale-90'} `}
                            >
                                <Card className="mx-auto max-w-sm shadow-lg rounded-lg bg-white">
                                    <CardHeader>
                                        <CardTitle className="text-lg font-semibold">{client.title}</CardTitle>
                                        <CardDescription className="text-gray-600">{client.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Image
                                            src={client.imgUrl}
                                            alt={client.title}
                                            width={500}  // Provide width
                                            height={300} // Provide height
                                            className="w-full h-48 object-cover rounded-lg"
                                        />
                                    </CardContent>
                                    <CardFooter>
                                        <p className="text-center text-gray-700">Client's feedback or additional text</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default HomeReview;
