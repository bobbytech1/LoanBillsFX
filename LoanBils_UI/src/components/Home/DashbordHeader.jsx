import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaHeadset } from 'react-icons/fa';
import { MdOutlineQrCodeScanner } from 'react-icons/md';
import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../../assets/loanbills-removebg-preview.png';
import './DashbordHeader.css';

export default function DashbordHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [qrDropdownOpen, setQrDropdownOpen] = useState(false);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const location = useLocation();

  const dropdownRef = useRef(null);
  const tooltipRef = useRef(null);
  const qrDropdownRef = useRef(null);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleCameraInputClick = () => {
    cameraInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
    }
  };

  const calculateSliderPosition = () => {
    switch (location.pathname) {
      case '/dashboard/exchange':
        return '0%';
      case '/dashboard/wallet':
        return '33.33%';
      case '/dashboard/flight':
        return '66.66%';
      default:
        return '0%';
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setTooltipOpen(false);
      }
      if (qrDropdownRef.current && !qrDropdownRef.current.contains(event.target)) {
        setQrDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const slider = document.querySelector('.slider');
    slider.style.left = calculateSliderPosition();
  }, [location.pathname]);

  return (
    <>
      <div className="flex flex-wrap justify-between items-center p-[5px] bg-[#121212]">
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-8 w-8 sm:h-10 sm:w-10 mr-3" />
          <div className="relative tab-container border border-gray-700">
            <div className="absolute inset-0 bg-white slider" />
            <div className="relative flex space-x-2 sm:space-x-4">
              <Link
                to="exchange"
                className={`relative tab px-1 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium text-center ${location.pathname === '/dashboard/exchange' ? 'text-black' : 'text-white'}`}
              >
                Exchange
              </Link>
              <Link
                to="wallet"
                className={`relative tab px-1 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium text-center ${location.pathname === '/dashboard/wallet' ? 'text-black' : 'text-white'}`}
              >
                Wallet
              </Link>
              <Link
                to="flight"
                className={`relative tab px-1 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium text-center ${location.pathname === '/dashboard/flight' ? 'text-black' : 'text-white'}`}
              >
                Flight
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-2 sm:mt-0">
          <div className="relative" ref={qrDropdownRef}>
            <MdOutlineQrCodeScanner
              className="text-white text-sm sm:text-xl mx-1 sm:mx-2 cursor-pointer"
              onClick={() => setQrDropdownOpen(!qrDropdownOpen)}
            />
            {qrDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 sm:w-48 bg-white shadow-md z-10 rounded">
                <button
                  className="block px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={handleFileInputClick}
                >
                  Upload QR Code
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <button
                  className="block px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={handleCameraInputClick}
                >
                  Use Camera
                </button>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  ref={cameraInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </div>
            )}
          </div>
          <div className="relative" ref={dropdownRef}>
            <button
              className="text-white text-xs sm:text-base font-medium mx-1 sm:mx-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Service
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 sm:w-48 bg-white shadow-md z-10 rounded">
                <a href="#service1" className="block px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100">Service 1</a>
                <a href="#service2" className="block px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100">Service 2</a>
                <a href="#service3" className="block px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100">Service 3</a>
              </div>
            )}
          </div>
          <div className="relative" ref={tooltipRef}>
            <FaHeadset
              className="text-white text-sm sm:text-xl mx-1 sm:mx-2 cursor-pointer"
              onClick={() => setTooltipOpen(!tooltipOpen)}
            />
            {tooltipOpen && (
              <div className="absolute right-0 mt-2 w-32 sm:w-48 bg-white shadow-md z-10 p-2 sm:p-4 text-xs sm:text-sm text-gray-700 rounded">
                <p>Contact Customer Care</p>
                <p>Email: support@company.com</p>
                <p>Phone: +123456789</p>
              </div>
            )}
          </div>
          <FaBars className="text-white text-sm sm:text-xl mx-1 sm:mx-2 cursor-pointer" />
        </div>
      </div>
      <Outlet />
    </>
  );
}
