// src/pages/ExchangePage.jsx
import React from 'react';
import Marquee from '../../components/Home/Marquee';

const getGreeting = () => {
  const now = new Date();
  const hours = now.getHours();

  if (hours < 12) {
    return 'Good Morning!';
  } else if (hours < 12) {
    return 'Good Afternoon!';
  } else {
    return 'Good Evening!';
  }
};

const images = [
  'https://cryptomus.com/img/coins/polygon.svg',
  'https://cryptomus.com/img/press-ton.svg',
  'https://cryptomus.com/img/coins/bitcoin_1.svg',
  'https://cryptomus.com/img/coins/litecoin.svg',
  'https://cryptomus.com/img/coins/etherium.svg',
  'https://cryptomus.com/img/coins/binance.svg',
  'https://cryptomus.com/img/coins/trx.svg',
  'https://cryptomus.com/img/coins/tether.svg',
  'https://cryptomus.com/img/coins/DOGE.svg',
  'https://cryptomus.com/img/coins/cgpt.svg',
  'https://cryptomus.com/img/coins/dash.svg',
  'https://cryptomus.com/img/coins/xmr.svg',
  // Add more image URLs here
];

export default function ExchangePage() {
  const greeting = getGreeting();

  return (
    <div className="p-4 bg-white dark:bg-black h-screen md:h-auto w-full">
      <div className="flex items-center space-x-4">
        <div className='flex flex-col items-start justify-center'>
          <h1 className="text-black dark:text-white text-2xl font-medium">{greeting}</h1>
          <h5 className="text-black dark:text-white text-[13px] italic pl-2">Victor Tosin Simon</h5>
        </div>
      </div>

      <main className="flex flex-col gap-6 items-center h-full md:h-auto">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-7 space-y-6 md:space-y-0 md:space-x-6">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-2xl md:text-4xl lg:text-[40px] font-extrabold text-black pt-5 dark:text-white leading-tight lg:leading-normal">
              Seamless currency transfers made easy.
            </h1>
            <p className="text-gray-800 dark:text-slate-600 text-sm md:text-base lg:text-lg mt-4">
              We help you make fast and secure transfers efficiently in the shortest possible time.
              <span className='italic text-[12px] text-[#d7d7d7] pl-2'>RUBY . NAIRA . POUNDS . EUROS . DOLLARS</span>
            </p>
          </div>
          <div className="border rounded h-[40vh] md:h-[60vh] w-full md:w-1/2 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
            {/* Add content or elements for the right side here */}
          </div>
        </div>
        <Marquee images={images}/>
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-7 space-y-6 md:space-y-0 md:space-x-6">
         
          <div className="border rounded h-[40vh] md:h-[60vh] w-full md:w-1/2 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
            {/* Add content or elements for the right side here */}
          </div>
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-2xl md:text-4xl lg:text-[40px] font-extrabold text-black pt-5 dark:text-white leading-tight lg:leading-normal">
            Exchange/Swap cryptocurrencies in short time fast and secured.
            </h1>
            <p className="text-gray-800 dark:text-slate-600 text-sm md:text-base lg:text-lg mt-4">
              We help you make fast and secure cryptocurrency exchange in the shortest possible time.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
