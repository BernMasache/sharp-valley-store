import React from 'react';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import 'swiper/css';

function NewsLetter() {
    const swiperSlide = useSwiperSlide();
    const newsletter = [
        {
            id: 1,
            name: 'Chapima Heights',
            district: "Blantyre",
            href: '#',
            imageSrc: './assets/images/sharpvalley.com_files/Slide7-300x225.jpg',
            imageAlt: "featured property",
        },
        {
            id: 2,
            name: 'Nanjiri',
            district: "Lilongwe",
            href: '#',
            imageSrc: './assets/images/sharpvalley.com_files/Nanjiri-Poster_n-300x240.jpg',
            imageAlt: "featured property",
        },
        {
            id: 3,
            name: 'Mpemba',
            district: "Blantyre",
            href: '#',
            imageSrc: './assets/images/sharpvalley.com_files/Mpemba-300x147.jpg',
            imageAlt: "featured property",
        },

    ]
    return (
        <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >

                {
                    newsletter.map((featured, key) => {
                        return <SwiperSlide key={key}>
                            <div className="group relative bg-gray-100 p-2">
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img
                                        src={featured.imageSrc}
                                        alt=""
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="">
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {featured.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{featured.district}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>

        </div>
    );
}

export default NewsLetter;