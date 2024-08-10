import React from 'react';
import { Link } from 'react-router-dom';
import Heroimage from '../../assets/Homepage.png';

const Hero = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0 bg-black z-10"></div>
      <div
        className="absolute inset-0 bg-center bg-no-repeat z-20 animate-spin-slow"
        style={{ backgroundImage: `url(${Heroimage})`, backgroundSize: '32%'  }}
      ></div>
      <div className="absolute inset-0 opacity-70 z-30"></div>
      <div className="relative z-40 flex flex-col items-center justify-center h-full text-white space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 text-center px-4 sm:px-8 lg:px-16">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg tracking-widest uppercase">
          ACCEPT CRYPTO PAYMENTS
        </h3>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
          <span className="block">LoanBillsFx Your</span>
          <span className="block">Gateway to Services</span>
        </h1>
        <Link to="/login">
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-lg font-medium hover:bg-[#f4f4f4]">
            GET STARTED
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
