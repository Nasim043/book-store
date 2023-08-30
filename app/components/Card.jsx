import Image from 'next/image';
import React from 'react';

const Card = ({ bookName, imageUrl }) => {
    return (
        <div className="relative group overflow-hidden rounded-lg transition-transform duration-300 hover:transform hover:scale-105">
            <Image src={imageUrl} alt={bookName} className="w-52 h-72" />
            <div className="absolute w-52 h-72 inset-0 flex items-center justify-center opacity-0 bg-white bg-opacity-50 hover:opacity-100 transition-opacity duration-300">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold">
                   Details
                </button>
            </div>
            <div className="py-4 max-w-xs">
                <h3 className="text-base font-semibold">{bookName}</h3>
            </div>
        </div>
    );
};

export default Card;