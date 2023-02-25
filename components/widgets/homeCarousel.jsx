import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCreative, EffectCards, EffectCoverflow } from 'swiper'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from 'framer-motion';

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
            <div className="bg-white relative sm:pb-48 py-2 lg:py-2">

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
                    className="relative bg-white h-96"
                >
                    <div className="">
                        {
                            carouselImagesContainer.map((carousel, key) => {

                                return <SwiperSlide key={key}>



                                    <div className="absolute inset-0">
                                        <img
                                            className="h-full w-full object-cover"
                                            src={carousel.url}
                                            alt=""
                                        />
                                        <div className="absolute inset-0 bg-brown opacity-60 mix-blend-multiply" aria-hidden="true" />
                                    </div>
                                   

                                        <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 text-center">
                                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{carousel.title}</h1>
                                            <p className="text-sm tracking-tight text-white sm:text-xl lg:text-2xl">{carousel.description}
                                            </p>
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

