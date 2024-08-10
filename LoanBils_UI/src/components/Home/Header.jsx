import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/loanbills-removebg-preview.png';
import { Link } from 'react-router-dom';

export default function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setMobileMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className='flex items-center justify-between text-white py-4 px-5 lg:px-20 bg-[#000000] z-50 relative'>
        <Link to="/" className="flex items-center gap-4">
          <img className="h-[40px] md:h-[60px]" src={logo} alt="Logo" />
          <p className='text-[16px] md:text-[20px] text-white font-bold'>LOANBILLSFX</p>
        </Link>
        <nav className="hidden lg:flex items-center gap-16 relative">
          <ul className='flex items-center gap-16'>
            <li className='cursor-pointer relative flex items-center' onClick={toggleDropdown} ref={dropdownRef}>
              Services
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" className={`transition-transform duration-200 ${dropdownVisible ? 'transform rotate-180' : ''}`}>
                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.15" d="m7 10l5 5l5-5"/>
              </svg>
              {dropdownVisible && (
                <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 w-48 bg-white text-black shadow-lg rounded-[20px] z-50'>
                  <div className='absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 -z-50'></div>
                  <ul className='flex flex-col gap-2'>
                    <li className='cursor-pointer p-2'>Service 1</li>
                    <li className='cursor-pointer p-2'>Service 2</li>
                    <li className='cursor-pointer p-2'>Service 3</li>
                  </ul>
                </div>
              )}
            </li>
            <li className='cursor-pointer'>Exchange</li>
            <li className='cursor-pointer'>Support</li>
          </ul>
          <Link to="/login">
            <p className='cursor-pointer text-[18px] border bg-white text-black pl-[35px] pr-[35px] pt-[8px] pb-[8px] rounded-[8px] font-medium'>Login</p>
          </Link>
        </nav>
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {mobileMenuVisible ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </header>
      {mobileMenuVisible && (
        <div ref={mobileMenuRef} className="lg:hidden absolute top-16 left-0 right-0 bg-black text-white shadow-lg z-50 transition-all duration-300 ease-in-out">
          <ul className='flex flex-col items-center gap-4 py-4'>
            <li className='cursor-pointer p-2'>Exchange</li>
            <li className='cursor-pointer p-2'>Support</li>
            <li className='cursor-pointer p-2'>
              <Link to="/login" onClick={() => setMobileMenuVisible(false)}>Login</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
