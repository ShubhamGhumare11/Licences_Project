import React, { useState } from 'react';
import {   IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom"; 
import { useLocation } from "react-router-dom"; // Import useLocation hook

const LicenseDetail = () => {
  const [showServices, setShowServices] = useState(false);
  const navigate = useNavigate();
 const location = useLocation(); // Get the location object
  // const interestedToApply = location.state?.interestedToApply || "Unknown License"; // Extract license name
  const { licenseName, validTill, images, description } = location.state || {};
console.log(licenseName)
console.log(validTill)
console.log(images)
console.log(description)


  const handleClose = () => {
    navigate('/');
  };

  if (showServices) {
    return <Services />;
  }

  const handleCheckout = () => {
    navigate("/interesteduserapplyform", { state: { interestedToApply: licenseName } });

  };

  return (
    <div className="flex bg-slate-100 flex-col min-h-screen overflow-hidden relative mt-2">
      <button
        className="absolute top-4 left-4 text-xl text-gray-700 z-10"
        onClick={handleClose}
      >
        <IoClose className="w-6 h-6" />
      </button>

      <div className="flex bg-slate-100 flex-col md:flex-row items-start mt-4 md:mt-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 space-y-6 md:space-y-0">
        <div className="flex-1  bg-slate-300 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-md">
          <img
          src={`data:image/jpeg;base64,${images}`}
          alt="Description of the image"
            className="w-full h-auto rounded-lg"
          />
          <div className="flex items-center justify-between mt-4">
            <button
              className="flex items-center justify-center w-full rounded-lg bg-cyan-700 focus:ring-4 focus:outline-none font-medium text-sm px-5 py-2.5 text-center text-white mt-5"
              onClick={handleCheckout}
            >Next
             <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth="2"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 5l7 7-7 7"
  />
</svg>

              
            </button>
          </div>
        </div>

        <div className="flex-1 p-2 sm:p-6 md:p-8 lg:p-10 font-serif">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-cyan-700">
          {licenseName}
          </h2>
          <p className="text-md sm:text-md md:text-base lg:text-xl tracking-wide mb-4 font-semibold">
         Validity: {validTill} year
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg tracking-wide mb-4">
           {description}
          </p>

          {/* <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-2 text-cyan-700">
            How to Proceed with Us?
          </h3>
          <ol className="list-decimal list-inside mb-4 space-y-1">
            <li className="text-xs sm:text-sm md:text-base lg:text-lg">
              Make payment on the bank details provided below.
            </li>
            <li className="text-xs sm:text-sm md:text-base lg:text-lg">
              Share the screenshot or reference number to
              <span className="block">Mob: (8390005111)</span>
              <span className="block">Email: (sumiit@auspiciousnumerology.com)</span>
            </li>
            <li className="text-xs sm:text-sm md:text-base lg:text-lg">
              Please have patience for our reply after sending payment; we will get back to you within 1-2 days.
            </li>
          </ol> */}

            {/* <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-2 text-cyan-700">
              Bank Details:
            </h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                <strong>Account Name:</strong> Sumiit Madhukar Messhram
              </li>
              <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                <strong>Account Number:</strong> 916020012990025
              </li>
              <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                <strong>Bank Name:</strong> AXIS BANK, WARDHA BRANCH
              </li>
              <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                <strong>IFSC:</strong> UTIB0000808
              </li>
              <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                <strong>Swift Code:</strong> AXISINBB048
              </li>
            </ul> */}
        </div>
      </div>
    </div>
  );
};

export default LicenseDetail;
