
  import React, { useState } from "react";
import contactus from "../../Images/contactus.jpg";
// import android from "../Image/android.png";
// import ios from "../Image/ios.jpg";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
// import Chatbot from "./Chatbot";
// import { contactUsFormat, sendEmailWithAttachment } from "../Email-service/emailSendingService";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);
    const htmlEmailFormat =
      contactUsFormat({ name: name, email: email, phone: phone, message: message });
    await sendEmailWithAttachment(htmlEmailFormat);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* <Chatbot /> */}
      <div className="relative w-full h-[420px] flex items-center">
        <img
          src={contactus}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          loading="lazy"
        />
        <div className="relative z-10 flex flex-col items-start justify-start md:justify-center h-full text-left text-white px-8 md:px-16 lg:px-24 pt-8 md:pb-20 font-serif">
          <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-6 leading-snug">
            <span className="block text-cyan-500 ">
              {/* Get In Touch */}
            </span>
            {/* <span className="block mt-2 text-white">Explore Our  </span> */}
          </h1>
          {/* <div className="mt-1 mr-1">
            <Link to="/services" className="px-8 py-4 border text-sm md:text-base font-semibold rounded-full hover:bg-amber-400 hover:text-black transition duration-300">
              Explore Services &rarr;
            </Link>
          </div> */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start mt-4 md:mt-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 space-y-6 md:space-y-0 overflow-x-hidden">
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 font-serif">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-cyan-600">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wide mb-4">
            We would love to connect with you! Please fill out the form below or
            email us directly at our email to get in touch.
          </p>
          <div className="space-y-2 mb-6 sm:mb-8">
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <IoCallOutline className="text-lg sm:text-xl" />
              Phone:
              <a
                href="tel:+918390005111"
                className="text-gray-800 hover:text-cyan-600 font-mono"
              >
                +918390005111
              </a>
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <TfiEmail className="text-lg sm:text-xl" /> Email:
              <a
                href="mailto:sumiit@auspiciousnumerology.com"
                className="text-gray-800 hover:text-cyan-600"
              >
                djsdhkjas@gmail.com
              </a>
            </p>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-cyan-600">
            Follow Us
          </h2>
          <div className="flex flex-wrap gap-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <a
              href="https://www.facebook.com/AuspiciousNumerology/"
              target="_blank"
              aria-label="Facebook"
              className="text-gray-700 hover:text-yellow-600 transition duration-300 transform hover:scale-110"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.instagram.com/auspicious_numerology/"
              target="_blank"
              aria-label="Instagram"
              className="text-gray-700 hover:text-yellow-600 transition duration-300 transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@AuspiciousNumerology"
              target="_blank"
              aria-label="YouTube"
              className="text-gray-700 hover:text-yellow-600 transition duration-300 transform hover:scale-110"
            >
              <FaYoutube />
            </a>
            <a
              href="https://twitter.com/AuspiciousNumerology"
              target="_blank"
              aria-label="Twitter"
              className="text-gray-700 hover:text-yellow-600 transition duration-300 transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-50 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4 font-serif">
            <label
              htmlFor="name"
              className="block text-sm sm:text-base font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full rounded-md py-2 px-4 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:bg-transparent text-sm sm:text-base"
              required
            />

            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex-1 mb-4 sm:mb-0">
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full rounded-md py-2 px-4 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:bg-transparent text-sm sm:text-base"
                  required
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="block text-sm sm:text-base font-medium text-gray-900"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full rounded-md py-2 px-4 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:bg-transparent text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            <label
              htmlFor="message"
              className="block text-sm sm:text-base font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full rounded-md py-2 px-4 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:bg-transparent text-sm sm:text-base h-32 resize-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
