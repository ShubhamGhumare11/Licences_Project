import React, { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa"; // Import Download Icon

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
  const downloadImage = () => {
    const base64Image = images; // Get current image
    const link = document.createElement("a");
    link.href = `data:image/jpeg;base64,${base64Image}`;
    link.download = `Document_${currentIndex + 1}.jpg`; // Image name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        {/* Download Button (Top-Right) */}
        <button 
          onClick={downloadImage} 
          className="absolute bottom-5 right-5 text-white bg-blue-500 p-2 rounded-full z-50"
        >
          <FaDownload size={20}           onClick={downloadImage} 
          /> 
        </button>

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
