import React from 'react';
import logo from '../../assets/loanbills-removebg-preview.png';
import useResetPassword from '../../hooks/useResetPassword';

const ResetPassword = () => {
  const {
    password,
    passwordConfirmation,
    showPassword, 
    setShowPassword,
    togglePasswordVisibility,
    error,
    successMessage,
    buttonText,
    handlePasswordChange,
    handlePasswordConfirmationChange,
    handleSubmit,

  } = useResetPassword();

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white h-screen flex items-center justify-center">
    <main className="w-full max-w-md px-4">
      <div className="logo w-full flex mb-8 justify-center items-center">
        <div className="border flex items-center justify-center bg-black rounded-full fit-content">
          <img className="h-20 mx-auto" src={ logo } alt="Logo" />
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-bold">Reset Password</h3>
        <p className="text-small mb-2 text-[10px]">Enter your new password</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="password"
            className="pl-[25px] block font-medium text-gray-700 dark:text-gray-200 mb-[3px] text-[17px]"
          >
            New Password
          </label>
          <div className="relative bg-white dark:bg-black mb-4 rounded-full border-2 focus-within:border-2 focus-within:border-[#000] dark:focus-within:border-[#FFFF] pl-4 pr-4 pt-[1px] pb-[1px] flex items-center">
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
          <label
            htmlFor="passwordConfirmation"
            className="pl-[25px] block font-medium text-gray-700 dark:text-gray-200 mb-[3px] text-[17px]"
          >
            Confirm Password
          </label>
          <div className="relative bg-white dark:bg-black mb-4 rounded-full border-2 focus-within:border-2 focus-within:border-[#000] dark:focus-within:border-[#FFFF] pl-4 pr-4 pt-[1px] pb-[1px] flex items-center">
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
              id="passwordConfirmation"
              name="passwordConfirmation"
              className="w-full outline-none p-2 bg-transparent"
              value={passwordConfirmation}
              onChange={handlePasswordConfirmationChange}
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

export default ResetPassword;
