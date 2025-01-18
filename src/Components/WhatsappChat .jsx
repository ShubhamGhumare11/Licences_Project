import React from "react";

const WhatsappChat = () => {
  // Replace with your desired WhatsApp phone number and message
  const whatsappPhoneNumber = "1234567890"; // Replace with actual phone number
  const message = "Hi, I want to apply for the license.";

  const whatsappLink = `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="p-6">
      <div className="max-w-sm mx-auto bg-cyan-200 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          Chat with Us to Apply for License
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Click the button below to start a chat with us on WhatsApp.
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm focus:outline-none">
            Chat with Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default WhatsappChat;
