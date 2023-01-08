import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCreative, EffectCards, EffectCoverflow } from 'swiper'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function HomeCarouselComponent() {

    const carouselImagesContainer = [

        {
            url: "./assets/images/Slide-Show-3-.jpg",
            title: "This is what WE DO",
            description: " three Sharp Valley has interests in real estate development, investing brokerage, sales and marketing, hotel collection and property management."
        },
        {
            url: "./assets/images/Slide-Show-18.jpg",
            title: "WHAT WE DO",
            description: "Sharp Valley has interests in real estate development, investing brokerage, sales and marketing, hotel collection and property management."
        },

        {
            url: "./tools/construction-tools-feature-compressed.jpg",
            title: "This is what WE DO",
            description: " three Sharp Valley has interests in real estate development, investing brokerage, sales and marketing, hotel collection and property management."
        },
        {
            url: "https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg",
            title: "Do you know WHAT WE DO",
            description: "So we are Sharp Valley has interests in real estate development, investing brokerage, sales and marketing, hotel collection and property management."
        },
        {
            url: "https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg",
            title: "This is what WE DO",
            description: " three Sharp Valley has interests in real estate development, investing brokerage, sales and marketing, hotel collection and property management."
        }
    ]
    return (
        <>
            <div className="bg-white relative sm:pb-32 py-2 lg:py-2">

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    speed={1200}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={false}
                    modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                    effect="coverflow"
                    className="mySwiper"
                >
                    <div className="relative overflow-hidden py-4 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
                        {
                            carouselImagesContainer.map((carousel, key) => {

                                return <SwiperSlide key={key}>

                                    <div className="absolute inset-0 opacity-75">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={carousel.url}
                                            alt="image slide 3"
                                        />
                                    </div>
                                    <div className="relative sm:p-48 lg:col-span-1">
                                        <div className="p-4">
                                            <h1 className='text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl'>
                                                {carousel.title}
                                            </h1>
                                        </div>
                                        <blockquote className="mt-6 text-white">
                                            <div className="">
                                                <p className="text-sm font-normal sm:text-xl">
                                                    {carousel.description}
                                                </p>

                                            </div>


                                        </blockquote>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </div>
                </Swiper>




            </div>

        </>
    );
}