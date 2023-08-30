'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import Card from './Card';
import book1 from '../assets/30_days_of_motivation.png';
import book2 from '../assets/children_math.jpg';
import book3 from '../assets/body_weight.png';
import book4 from '../assets/it_essential.png';

const books = [
    { id: 1, bookName: '365 days of motivation', imageUrl: book1 },
    { id: 2, bookName: "Children's Mathematics", imageUrl: book2 },
    { id: 3, bookName: 'Body Weight', imageUrl: book3 },
    { id: 4, bookName: 'It essentials and data recovery', imageUrl: book4 },
    { id: 5, bookName: 'Body Weight', imageUrl: book3 },
];

const TopInteresting = () => {
    return (
        <div className='max-w-7xl mx-auto mt-36'>
            <h3 className='text-3xl font-bold text-center mb-6'>Top Interesting</h3>
            <p className='max-w-md mx-auto text-center mb-6'>Browse the collection of our best top interresting Books.
                you will definitely find what you are looking for.</p>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper mx-auto"
            >
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"> */}
                {books.map((book) => (
                    <SwiperSlide key={book.id}>
                        <Card bookName={book.bookName} imageUrl={book.imageUrl} />
                    </SwiperSlide>
                ))}
                {/* </div> */}
            </Swiper>
        </div >
    );
};

export default TopInteresting;