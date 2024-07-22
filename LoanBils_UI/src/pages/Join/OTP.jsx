import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import useOtp from '../../hooks/useOtp';
import  logo  from '../../assets/loanbills-removebg-preview.png'; 

function OTP() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const emailParam = params.get('email');

  const {
    otp,
    email,
    otpError,
    countdown,
    isResendEnabled,
    handleOtpChange,
    handleSubmit,
    handleResendOtp,
  } = useOtp(emailParam || '');;

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white min-h-screen flex items-center justify-center">
    <main className="w-full max-w-lg px-4">
      <div className="logo w-full flex mb-8 justify-center items-center">
        <div className="border flex items-center justify-center bg-black rounded-full fit-content">
          <img className="h-20 mx-auto" src={logo} alt="Logo" />
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-bold">Verify your Email</h3>
        <p className="text-[14px] mb-4">The verification code has been sent to your email.</p>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="pl-[25px] block font-medium text-gray-700 dark:text-gray-200 mb-[3px] text-[12px]"
          >
            Email
          </label>
          <div className="relative bg-white dark:bg-black mb-[18px] rounded-full border-2 focus-within:border-2 focus-within:border-[#000] dark:focus-within:border-[#FFFF] pl-4 pr-4 pt-[1px] pb-[1px] flex items-center">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full outline-none p-2 bg-transparent"
              value={email}
              readOnly
            />
          </div>
          <label
            htmlFor="otp"
            className="pl-[25px] block font-medium text-gray-700 dark:text-gray-200 mb-[3px] text-[12px]"
          >
            Enter the 6-digit number sent to you.
          </label>
          <div className="relative bg-white dark:bg-black mb-[18px] rounded-full border-2 focus-within:border-2 focus-within:border-[#000] dark:focus-within:border-[#FFFF] pl-4 pr-4 pt-[1px] pb-[1px] flex items-center">
            <input
              type="text"
              id="otp"
              name="otp"
              className="w-full outline-none p-2 bg-transparent"
              value={otp}
              onChange={handleOtpChange}
            />
          </div>
          {otpError && (
            <div className="text-red-500 text-sm pl-[25px]">{otpError}</div>
          )}
          <button
            type="submit"
            className="w-full bg-[#000000] text-white border-[2px] py-2 rounded-full mb-4"
          >
            Verify
          </button>
          <p className="text-center text-gray-700 dark:text-gray-200">
            Didn't receive the code?{' '}
            {isResendEnabled ? (
              <button
                onClick={handleResendOtp}
                className="text-[#000000] text-[14px]"
              >
                Resend OTP
              </button>
            ) : (
              <span className="text-[#000000] text-[14px]">
                Resend OTP in {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, '0')}
              </span>
            )}
          </p>
        </form>
        <p className="text-center text-gray-700 dark:text-gray-200">
          Back to{' '}
          <Link to="/login" className="text-[#000000] text-[14px]">
            Login
          </Link>
        </p>
      </div>
    </main>
  </div>
  );
}

export default OTP;
