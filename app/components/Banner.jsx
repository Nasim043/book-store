'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import image1 from '../assets/banner-1.jpg';
import image2 from '../assets/banner-2.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Banner() {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-screen sm:h-96">
                <SwiperSlide>
                    <div className=''>
                        <Image src={image1} alt='image1' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <Image src={image2} alt='image2' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
