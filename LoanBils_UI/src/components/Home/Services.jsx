import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slide1 from "../../assets/Slide1img.png";
import './Services.css'; 
import Marquee from './Marquee';

const images = [
  'https://cryptomus.com/img/press-sendpulse.svg',
  'https://cryptomus.com/img/press-ton.svg',
  'https://cryptomus.com/img/press-aeza.svg',
  'https://cryptomus.com/img/press-bitcoin.svg',
  'https://cryptomus.com/img/press-cointelegraph.svg',
  'https://cryptomus.com/img/press-adspower.svg',
  'https://cryptomus.com/img/press-DEXTools.svg',
  'https://cryptomus.com/img/press-morningstar.svg',
  'https://cryptomus.com/img/press-bestchange.svg',
  // Add more image URLs here
];

export default function Services() {
  const slides = [
    {
      title: "BONUS rewards are already in the Awards",
      description: "What are you waiting for? Start collecting your valuable rewards for completing simple tasks.",
      image: Slide1,
    },
    {
      title: "BONUS rewards are already in the Awards",
      description: "What are you waiting for? Start collecting your valuable rewards for completing simple tasks.",
      image: Slide1,
    },
    {
      title: "BONUS rewards are already in the Awards",
      description: "What are you waiting for? Start collecting your valuable rewards for completing simple tasks.",
      image: Slide1,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="bg-white dark:bg-black h-full w-full flex flex-col gap-5 items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
      <main className="bg-white dark:bg-[#333] w-full h-auto max-w-full rounded-3xl overflow-hidden relative">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={4000}
          infinite={true}
          showDots={true}
          customTransition="all 0.5s ease-in-out"
          containerClass="carousel-container"
          itemClass="carousel-item"
          dotListClass="custom-dot-list"
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide h-auto flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="md:w-1/2 flex flex-col justify-center mb-6 md:mb-0 text-black dark:text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg sm:text-[15px] md:text-[lg] lg:text-[19px] font-medium">{slide.description}</p>
              </div>
              <div className="md:w-1/2 flex justify-center items-center">
                <img src={slide.image} alt={`Slide ${index + 1} image`} className="w-full max-w-md object-contain"/>
              </div>
            </div>
          ))}
        </Carousel>
       
      </main>
      <div className="w-full px-4 sm:px-8">
        <Marquee images={images} />
      </div>
    </div>
  );
}
