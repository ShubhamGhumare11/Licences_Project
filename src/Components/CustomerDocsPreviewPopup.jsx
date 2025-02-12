import React, { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomerImgPreviewPopup = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
console.log(images)
  if (!images || images.length === 0) return null; // Prevent errors if no images

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md z-50"
      onClick={onClose} // Close modal when clicking outside
    >
      <div 
        className="relative bg-white bg-opacity-10 backdrop-blur-xl p-6 rounded-3xl shadow-lg w-full max-w-4xl flex flex-col items-center border border-gray-200 transition-all duration-300"
        onClick={(e) => e.stopPropagation()} // ✅ Prevents closing when clicking inside
      >
      

        {/* Image Viewer */}
        <div className="relative flex items-center justify-center w-full">
          {images.length > 1 && (
            <button 
              onClick={handlePrev} 
              className="absolute left-4 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80 transition"
            >
              <FaChevronLeft size={32} />
            </button>
          )}

          <img
            src={`data:image/jpeg;base64,${images[currentIndex]}`}
            alt="Customer"
            className="max-w-full max-h-[85vh] rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          />

          {images.length > 1 && (
            <button 
              onClick={handleNext} 
              className="absolute right-4 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80 transition"
            >
              <FaChevronRight size={32} />
            </button>
          )}
        </div>

        {/* Image Counter */}
        <div className="mt-3 text-white text-sm font-semibold tracking-wide">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default CustomerImgPreviewPopup;
