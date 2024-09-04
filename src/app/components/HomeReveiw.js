import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'; 
import { clientcarousel } from '@/app/constants/appdata'; 

const HomeReview = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="lg:text-4xl md:text-3xl text-3xl mb-2 p-5 font-bold text-black font-serif text-center ">WHAT OUR CUSTOMER SAYS</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    pagination={{ clickable: true }}
                    className="mySwiper"
                >
                    {clientcarousel.map((client, index) => (
                        <SwiperSlide key={client.id}>
                            {({ isActive }) => (
                                <div
                                    className={`transition-all duration-500 ${isActive ? 'scale-90' : 'scale-85'} `}
                                >
                                    <Card className="mx-auto max-w-sm shadow-black shadow-lg">
                                        <CardHeader>
                                            <CardTitle>{client.title}</CardTitle>
                                            <CardDescription>{client.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <img
                                                src={client.imgUrl}
                                                alt={client.title}
                                                className="w-full h-48 object-cover rounded-lg"
                                            />
                                        </CardContent>
                                        <CardFooter>
                                            <p className="text-center">Client's feedback or additional text</p>
                                        </CardFooter>
                                    </Card>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default HomeReview;
