import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
import image from "../../assets/downloadii-removebg-preview.png";

export default function Download() {
    return (
      <div className="h-[85vh] w-full bg-white dark:bg-black flex flex-col gap-4 items-center justify-center py-5 px-5">
        <div className="text-3xl uppercase font-semibold text-center mb-6 text-black dark:text-white">
          We make it easy for you to plug into digital payments
        </div>
        <div className="flex flex-col md:flex-row items-center bg-[#F6F6F6] dark:bg-[#333] rounded-3xl p-6 md:p-12 w-full md:w-3/4 lg:w-2/3">
          <div className="flex-1 flex justify-center mb-6 md:mb-0">
            <img src={image} alt="Download app" className="w-full h-auto object-contain max-w-xs md:max-w-sm lg:max-w-md" />
          </div>
          <div className="flex-1 text-center md:text-left text-black dark:text-white">
            <h1 className="text-3xl font-bold mb-4">Download our Apps!</h1>
            <p className="text-lg mb-6">
              Download our apps available on Playstore and Appstore!
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <button className="flex items-center bg-black dark:bg-white text-white dark:text-black py-2 px-6 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition">
                <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
                Google Play
              </button>
              <button className="flex items-center bg-black dark:bg-white text-white dark:text-black py-2 px-6 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition">
                <FontAwesomeIcon icon={faApple} className="mr-2" />
                Apple Store
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  