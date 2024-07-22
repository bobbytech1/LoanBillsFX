import React, { useState } from 'react';
import useLogin from '../../hooks/useLogin';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation
import logo from '../../assets/loanbills-removebg-preview.png'; // Ensure the image path is correct

function Login() {
  const {
    email,
    password,
    showPassword,
    emailError,
    passwordError,
    error,
    handleEmailChange,
    handlePasswordChange,
    togglePasswordVisibility,
    handleSubmit,
  } = useLogin(); // Use the custom hook for form handling and validation


  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white h-screen flex items-center justify-center">
      <main className="w-full max-w-md px-4">
        <div className="logo w-full flex mb-8 justify-center items-center">
          <div className="border flex items-center justify-center bg-black rounded-full fit-content">
            <img className="h-20 mx-auto" src={logo} alt="Logo" />
          </div>
        </div>
        <div className="text-center">
        
        <h3 id="dynamic-text" className="font-bold ">WELCOME TO LOANBILLS!</h3>
          <p className="text-small mb-2 text-[10px]">Login to your account</p>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="pl-[25px] block font-medium text-gray-700 dark:text-gray-200 mb-[3px] text-[17px]"
            >
              Email
            </label>
            <div className="relative bg-white dark:bg-black mb-[18px] rounded-full border-2 focus-within:border-2 focus-within:border-[#000] dark:focus-within:border-[#FFFF]  pl-4 pr-4 pt-[1px] pb-[1px] flex items-center">
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
            {emailError && (
              <div className="text-red-500 text-sm pl-[25px]">{emailError}</div>
            )}
            <label
              htmlFor="password"
              className="pl-[25px] text-[17px] block font-medium text-gray-700 dark:text-gray-200 mb-[3px]"
            >
              Password
            </label>
            <div className="relative bg-white dark:bg-black mb-4 rounded-full border-2 focus-within:border-2 focus-within:border-[#000] dark:focus-within:border-[#FFFF]  pl-4 pr-4 pt-[1px] pb-[1px] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000000"
                  fillRule="evenodd"
                  d="M7 10V7a5 5 0 1 1 10 0v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zm-1 2v8h12v-8zm3-2h6V7a3 3 0 0 0-6 0zm5 4h2v4h-2z"
                />
              </svg>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="w-full outline-none p-2 bg-transparent"
                value={password}
                onChange={handlePasswordChange}
              />
              {showPassword ? (
                <svg
                  onClick={togglePasswordVisibility}
                  className="password-toggle feather-eye-off"
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
                    strokeWidth="2.15"
                  >
                    <path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962" />
                    <circle cx="12" cy="12" r="3" />
                  </g>
                </svg>
              ) : (
                <svg
                  onClick={togglePasswordVisibility}
                  className="password-toggle feather-eye"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.15"
                    d="M21 16a5 5 0 0 1-5 5m-5-5a5 5 0 0 1 5-5m-3 13.654A13.38 13.38 0 0 0 16 25c7.18 0 13-6 13-9 0-1.336-1.155-3.268-3.071-5M19.5 7.47A13.49 13.49 0 0 0 16 7C8.82 7 3 13 3 16c0 1.32 1.127 3.22 3 4.935M7 25L25 7"
                  />
                </svg>
              )}
            </div>
            {passwordError && (
              <div className="text-red-500 text-sm pl-[25px]">{passwordError}</div>
            )}
            <button
              type="submit"
              className="w-full bg-[#000000] text-white border-[2px] py-2 rounded-full mb-4"
            >
              Sign In
            </button>
            <p className="text-center text-gray-700 dark:text-gray-200">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#000000] text-[14px]">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
