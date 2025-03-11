import React from "react";
import { useLocation } from "react-router-dom";

const WhatsappChat = () => {
  const location = useLocation();
  console.log("Location State:", location.state); // Debugging
  const message = location.state?.message; // Retrieve the message from state

  const whatsappPhoneNumber = "7447376717"; 
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappPhoneNumber}?text=${encodedMessage}`;
  console.log("WhatsApp message:", message); 

  console.log("WhatsApp Link:", whatsappLink); 

  return (
    <div className="p-6">
      <div className="max-w-sm mx-auto bg-cyan-300 rounded-lg shadow-lg p-6">
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
