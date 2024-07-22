import React, { useState } from 'react';
import useRegister from '../../hooks/useRegister';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/loanbills-removebg-preview.png';

function Register() {
  const { formData, errors, handleInputChange, handleSubmit } = useRegister();

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white min-h-screen flex items-center justify-center">
    <main className="w-full max-w-lg px-4">
        <div className="logo w-full flex mb-8 justify-center items-center">
            <div className="border flex items-center justify-center bg-black rounded-full fit-content">
                <img className="h-20 mx-auto" src={logo} alt="Logo" />
            </div>
        </div>
        <div className="text-center">
            <h3 className="font-bold">Register</h3>
            <p className="text-small mb-2">Create a new account</p>
        </div>
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block font-medium text-gray-700 dark:text-gray-200 mb-[3px] text-[17px]"
                        >
                            Full Name
                        </label>
                        <div className="relative bg-white dark:bg-black mb-[18px] rounded-full border-2 focus-within:border-2 focus-within:border-[#000] dark:focus-within:border-[#FFFF] px-4 py-[1px] flex items-center">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full outline-none p-2 bg-transparent"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        {errors.name && (
                            <div className="text-red-500 text-sm pl-[25px]">
                                {errors.name}
                            </div>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block font-medium text-gray-700 dark:text-gray-200 mb-[3px] text-[17px]"
                        >
                            Email
                        </label>
                        <div className="relative bg-white dark:bg-black mb-[18px] rounded-full border-2 focus-within:border-2 focus-within:border-[#000] dark:focus-within:border-[#FFFF] px-4 py-[1px] flex items-center">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full outline-none p-2 bg-transparent"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        {errors.email && (
                            <div className="text-red-500 text-sm pl-[25px]">
                                {errors.email}
                            </div>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="country"
                            className="block font-medium text-gray-700 dark:text-gray-200 mb-[3px] text-[17px]"
                        >
                            Country
                        </label>
                        <div className="relative bg-white dark:bg-black mb-[18px] rounded-full border-2 focus-within:border-2 focus-within:border-[#000] dark:focus-within:border-[#FFFF] px-4 py-[1px] flex items-center">
                            <input
                                type="text"
                                id="country"
                                name="country"
                                className="w-full outline-none p-2 bg-transparent"
                                value={formData.country}
                                onChange={handleInputChange}
                            />
                        </div>
                        {errors.country && (
                            <div className="text-red-500 text-sm pl-[25px]">
                                {errors.country}
                            </div>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block font-medium text-gray-700 dark:text-gray-200 mb-[3px] text-[17px]"
                        >
                            Password
                        </label>
                        <div className="relative bg-white dark:bg-black mb-[18px] rounded-full border-2 focus-within:border-2 focus-within:border-[#000] dark:focus-within:border-[#FFFF] px-4 py-[1px] flex items-center">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full outline-none p-2 bg-transparent"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        {errors.password && (
                            <div className="text-red-500 text-sm pl-[25px]">
                                {errors.password}
                            </div>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block font-medium text-gray-700 dark:text-gray-200 mb-[3px] text-[17px]"
                        >
                            Confirm Password
                        </label>
                        <div className="relative bg-white dark:bg-black mb-[18px] rounded-full border-2 focus-within:border-2 focus-within:border-[#000] dark:focus-within:border-[#FFFF] px-4 py-[1px] flex items-center">
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full outline-none p-2 bg-transparent"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                            />
                        </div>
                        {errors.confirmPassword && (
                            <div className="text-red-500 text-sm pl-[25px]">
                                {errors.confirmPassword}
                            </div>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#000000] text-white border-[2px] py-2 rounded-full mb-4"
                >
                    Sign Up
                </button>
                <p className="text-center text-gray-700 dark:text-gray-200">
                    Already have an account?
                    <Link to="/login" className="text-[#000000] text-[14px]">
                        Login here
                    </Link>
                </p>
            </form>
        </div>
    </main>
</div>
  );
}

export default Register;
