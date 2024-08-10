import React from 'react';
import './Marquee.css';

const Marquee = ({ images }) => {
    return (
        <div className="marquee-container relative overflow-hidden w-full h-32 flex items-center justify-center dark:bg-gray-800">
            <div className="marquee flex items-center space-x-4">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`marquee-img-${index}`}
                        className="h-full w-auto object-cover"
                    />
                ))}
                {images.map((image, index) => (
                    <img
                        key={index + images.length}
                        src={image}
                        alt={`marquee-img-${index}`}
                        className="h-full w-auto object-cover"
                    />
                ))}
            </div>
        </div>
    );
};

export default Marquee;
