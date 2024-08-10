import React from 'react';
import { toast } from 'react-toastify';
import logo from '../../assets/loanbills-removebg-preview.png';
import useForgotPassword from '../../hooks/useForgotPassword';

const ForgotPassword = () => {
  const { email, emailError, buttonText, handleEmailChange, handleSubmit } = useForgotPassword();

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white h-screen flex items-center justify-center">
    <main className="w-full max-w-md px-4">
      <div className="logo w-full flex mb-8 justify-center items-center">
        <div className="border flex items-center justify-center bg-black rounded-full fit-content">
          <img className="h-20 mx-auto" src={ logo } alt="Logo" />
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-bold">Forgot Password</h3>
        <p className="text-small mb-2 text-[10px]">Enter your email address to reset your password</p>
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="pl-[25px] block font-medium text-gray-700 dark:text-gray-200 mb-[3px] text-[17px]"
          >
            Email
          </label>
          <div className="relative bg-white dark:bg-black mb-[18px] rounded-full border-2 focus-within:border-2 focus-within:border-[#000] dark:focus-within:border-[#FFFF] pl-4 pr-4 pt-[1px] pb-[1px] flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.95"
                color="#000000 dark:#fff"
              >
                <path d="m2 6 6.913 3.917c2.549 1.444 3.625 1.444 6.174 0L22 6" />
                <path d="M2.016 13.476c.065 3.065.098 4.598 1.229 5.733 1.131 1.136 2.705 1.175 5.854 1.254 1.94.05 3.862.05 5.802 0 3.149-.079 4.723-.118 5.854-1.254 1.131-1.135 1.164-2.668 1.23-5.733.02-.986.02-1.966 0-2.952-.066-3.065-.099-4.598-1.23-5.733-1.131-1.136-2.705-1.175-5.854-1.254a115 115 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254-1.131 1.135-1.164 2.668-1.23 5.733a69 69 0 0 0 0 2.952" />
              </g>
            </svg>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full outline-none p-2 bg-transparent"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#000000] text-white border-[2px] py-2 rounded-full mb-4"
          >
            {buttonText}
          </button>
          <p className="text-center text-gray-700 dark:text-gray-200">
            Remember your password?{' '}
            <a href="/login" className="text-[#000000] text-[14px]">
              Login here
            </a>
          </p>
        </form>
      </div>
    </main>
  </div>
  );
};

export default ForgotPassword;
