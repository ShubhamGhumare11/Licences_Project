import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import WhatsappChat from "./WhatsappChat ";

const InterestedUserApplyForm = () => {
  const location = useLocation(); // Get the location object
  const interestedToApply = location.state?.interestedToApply || "Unknown License"; // Extract license name

  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const statesList = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", 
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", 
    "Puducherry"
  ];
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    city: "",
    area: "",
    pincode: "",
    state: "",
    interestedToApply: interestedToApply, // Pre-fill with the passed value
  });

  useEffect(() => {
    console.log("Selected License: ", interestedToApply); // Debugging
  }, [interestedToApply]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

// Format the form data into a WhatsApp-compatible message
const formattedMessage = `
*License Application Details*
------------------------------
*Interested License:* ${formData.interestedToApply}
------------------------------
*Applicant Information:*
- *First Name:* ${formData.firstName}
- *Last Name:* ${formData.lastName}
- *Mobile Number:* ${formData.mobileNumber}
- *Email:* ${formData.email}
- *City:* ${formData.city}
- *Area:* ${formData.area}
- *Pincode:* ${formData.pincode}
- *State:* ${formData.state}
------------------------------
*We have received your application and will get back to you shortly.* 
*Thank you for your interest in applying for a license!*

If you have any questions, feel free to contact us/ Chat with us.

`;



    setMessage(formattedMessage);

    setIsFormSubmitted(true);
  };

  return (
    <div className="p-6  my-10 max-w-screen-lg sm:max-w-screen-lg md:max-w-screen-lg lg:max-w-screen-sm mx-auto bg-cyan-100 rounded-lg shadow-md">
    

      {!isFormSubmitted ? (
        
        <form onSubmit={handleSubmit} className="space-y-1 ">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Fill Your Personal Details:
         </h2>
        
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Interested to Apply</label>
            <input
              type="text"
              name="interestedToApply"
              value={formData.interestedToApply}
              className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-700 cursor-not-allowed focus:outline-none"
              readOnly
            />
          </div>


          <div className="flex gap-4"> 
 {/* First Name */}
 <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Last Name */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
            
          </div>

         

          {/* Mobile Number */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>


   {/* Area */}
   <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Area</label>
            <input
              type="text"
              name="area"
              placeholder="Area"
              value={formData.area}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

 <div className="flex gap-4">  
    
      {/* City */}
      <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

       

          {/* Pincode */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Pincode</label>
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
    
       </div>
        

     

            {/* State Dropdown */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">State</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select State</option>
            {statesList.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm focus:outline-none"
          >
            Next
          </button>
        </form>
      ) : (
        <WhatsappChat message={message} />
      )}
    </div>
  );
};

export default InterestedUserApplyForm;
