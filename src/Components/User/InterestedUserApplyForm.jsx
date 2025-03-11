// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom"; // Import useLocation hook
// import WhatsappChat from "./WhatsappChat ";

// const InterestedUserApplyForm = () => {
//   const location = useLocation(); // Get the location object
//   const interestedToApply = location.state?.interestedToApply || "Unknown License"; // Extract license name

//   const [message, setMessage] = useState("");
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const statesList = [
//     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
//     "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
//     "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
//     "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
//     "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", 
//     "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", 
//     "Puducherry"
//   ];
  
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     city: "",
//     area: "",
//     pincode: "",
//     state: "",
//     interestedToApply: interestedToApply, // Pre-fill with the passed value
//   });

//   useEffect(() => {
//     console.log("Selected License: ", interestedToApply); // Debugging
//   }, [interestedToApply]);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

// // Format the form data into a WhatsApp-compatible message
// const formattedMessage = `
// *License Application Details*
// ------------------------------
// *Interested License:* ${formData.interestedToApply}
// ------------------------------
// *Applicant Information:*
// - *First Name:* ${formData.firstName}
// - *Last Name:* ${formData.lastName}
// - *Mobile Number:* ${formData.mobileNumber}
// - *Email:* ${formData.email}
// - *City:* ${formData.city}
// - *Area:* ${formData.area}
// - *Pincode:* ${formData.pincode}
// - *State:* ${formData.state}
// ------------------------------
// *We have received your application and will get back to you shortly.* 
// *Thank you for your interest in applying for a license!*

// If you have any questions, feel free to contact us/ Chat with us.

// `;



//     setMessage(formattedMessage);

//     setIsFormSubmitted(true);
//   };

//   return (
//     <div className="p-6  my-10 max-w-screen-lg sm:max-w-screen-lg md:max-w-screen-lg lg:max-w-screen-sm mx-auto bg-cyan-100 rounded-lg shadow-md">
    

//       {!isFormSubmitted ? (
        
//         <form onSubmit={handleSubmit} className="space-y-1 ">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//           Fill Your Personal Details:
//          </h2>
        
//           <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">Interested to Apply</label>
//             <input
//               type="text"
//               name="interestedToApply"
//               value={formData.interestedToApply}
//               className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-700 cursor-not-allowed focus:outline-none"
//               readOnly
//             />
//           </div>


//           <div className="flex gap-4"> 
//  {/* First Name */}
//  <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* Last Name */}
//           <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
            
//           </div>

         

//           {/* Mobile Number */}
//           <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
//             <input
//               type="text"
//               name="mobileNumber"
//               placeholder="Mobile Number"
//               value={formData.mobileNumber}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>


//    {/* Area */}
//    <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">Area</label>
//             <input
//               type="text"
//               name="area"
//               placeholder="Area"
//               value={formData.area}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//  <div className="flex gap-4">  
    
//       {/* City */}
//       <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">City</label>
//             <input
//               type="text"
//               name="city"
//               placeholder="City"
//               value={formData.city}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

       

//           {/* Pincode */}
//           <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">Pincode</label>
//             <input
//               type="text"
//               name="pincode"
//               placeholder="Pincode"
//               value={formData.pincode}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
    
//        </div>
        

     

//             {/* State Dropdown */}
//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-700">State</label>
//           <select
//             name="state"
//             value={formData.state}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           >
//             <option value="">Select State</option>
//             {statesList.map((state) => (
//               <option key={state} value={state}>
//                 {state}
//               </option>
//             ))}
//           </select>
//         </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm focus:outline-none"
//           >
//             Next
//           </button>
//         </form>
//       ) : (
//         <WhatsappChat message={message} />
//       )}
//     </div>
//   );
// };

// export default InterestedUserApplyForm;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import cuid from 'cuid';
// import { orderConfirmForUserEmailTemplate, orderConfirmForAdminEmailTemplate, sendEmailWithAttachmentforAdminOrderConfirm, sendEmailWithAttachmentforOrderConfirm } from '../Email-service/emailSendingService';

const InterestedUserApplyForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [whatsappLink, setWhatsappLink] = useState(""); // Define state for WhatsApp link

  let { productName, price } = location.state || {};
  // if (!productName) {
  //   productName = "test";
  // }
  // if (!price) {
  //   price = 1000;
  // }
  // const newCuid = cuid();
  // const shortCuid = `${newCuid.substring(0, 4)}${newCuid.slice(-5)}`;  // First 4 and last 5 characters
  // const formattedInvoiceId = `INV-${shortCuid.toUpperCase()}`;

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    country: '',
    city: '',
    state: '',
    pincode: '',
  });
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();


    const emptyFields = Object.entries(formData).filter(([key, value]) => !value);

    if (emptyFields.length > 0) {
      alert(`Please fill in the following fields: ${emptyFields.map(([key]) => key.charAt(0).toUpperCase() + key.slice(1)).join(', ')}`);
      return;
    }

    if (!isConfirmed) {
      alert('Please confirm that all information is correct.');
      return;
    }

    // const dataToSend = {
    //   ...formData,
    //   invoiceId: formattedInvoiceId,
    //   productName,
    //   price,
    //   date: formattedDate,
    // };
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
const whatsappPhoneNumber = "7447376717"; 
const encodedMessage = encodeURIComponent(formattedMessage);
const generatedLink  = `https://wa.me/${whatsappPhoneNumber}?text=${encodedMessage}`;
console.log("WhatsApp message:", formattedMessage); 

console.log("WhatsApp Link:", whatsappLink); 

setWhatsappLink(generatedLink); // Update the WhatsApp link state
window.open(generatedLink, "_blank"); // Redirect to WhatsApp





// console.log(formattedMessage)
// navigate('/whatsapp-chat', { state: { message: formattedMessage } });

    // const htmlEmailFormat =
    //   orderConfirmForUserEmailTemplate({ address: formData.address, city: formData.city, country: formData.country, date: formattedDate, firstName: formData.firstName, invoiceId: formattedInvoiceId, lastName: formData.lastName, phone: formData.phone, pincode: formData.pincode, price: price, productName: productName, state: formData.state });
    // await sendEmailWithAttachmentforOrderConfirm({ htmlEmailFormat: htmlEmailFormat, userName: `${formData.firstName} ${formData.lastName}`, userEmail: formData.email })

    // const htmlEmailFormatforAdminOrder =
    //   orderConfirmForAdminEmailTemplate({ address: formData.address, city: formData.city, country: formData.country, date: formattedDate, firstName: formData.firstName, invoiceId: formattedInvoiceId, lastName: formData.lastName, phone: formData.phone, pincode: formData.pincode, price: price, productName: productName, state: formData.state });
    // await sendEmailWithAttachmentforAdminOrderConfirm({ htmlEmailFormat: htmlEmailFormatforAdminOrder })


    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      country: '',
      city: '',
      state: '',
      pincode: '',
    });
    setIsConfirmed(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-cyan-800 font-serif">Fill Your Personal Details</h2>

      <div className="flex flex-col md:flex-row w-full bg-white shadow-lg rounded-lg p-8">
        <div className="w-full md:w-2/3 pr-0 md:pr-4 mb-8 md:mb-0">
          <form onSubmit={handleSubmit}>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif">Contact Information</h3>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input

                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
              />
              <p className="mt-2 text-sm text-gray-800 text-center">
                We'll use this email to send you details and updates about your order.
              </p>
            </div>

            {/* Step 2: Billing Address */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif">Billing Address</h3>
              <p className="text-sm text-gray-600 mb-4">
                Enter the billing address that matches your payment method.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                  <input
                    type="text"
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    id="state"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
                <div>
                  <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
                  <input
                    type="text"
                    id="pincode"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
              </div>
            </div>

            {/* Confirmation Checkbox */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="confirm"
                checked={isConfirmed}
                onChange={(e) => setIsConfirmed(e.target.checked)}
                className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                required
              />
              <label htmlFor="confirm" className="ml-2 text-sm text-gray-700">
                I confirm that all information is correct.
              </label>
            </div>
          </form>
        </div>

        {/* Right Side: Payment Options and Order Summary */}
        <div className="w-full md:w-1/3 pl-0 md:pl-4">
          {/* Step 3: Payment Options */}
          <div className=" p-6 rounded-lg  mb-6">
            {/* <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif">Payment Options</h3> */}

            {/* Payment Instructions */}
            <div className="flex flex-col mb-4">
              <div className="w-full mb-6">
                {/* <p className="text-sm text-gray-700 font-semibold mb-2">Direct Bank Transfer</p>
                <p className="text-sm text-gray-600 mb-4">Please follow the steps to complete the payment:</p>
                <ol className="list-decimal list-inside text-sm text-gray-600 mb-4">
                  <li className="mb-1">Make your payment directly into our bank account below.</li>
                  <li className="mb-1">Use your Order ID as the reference.</li>
                  <li className="mb-1">Share the screenshot on email and number 8390005111.</li>
                </ol> */}
              </div>

              {/* Bank Details */}
              {/* <div className="w-full">
                <h4 className="font-bold text-gray-800 mb-2">Bank Details:</h4>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold mb-2">Account Name:
                    <span className="font-bold text-indigo-600"> Sumiit Madhukar Messhram</span>
                  </p>
                  <p className="text-sm font-semibold mb-2">Bank Name:
                    <span className="font-bold text-indigo-600"> AXIS BANK, WARDHA</span>
                  </p>
                  <p className="text-sm font-semibold mb-2">Account Number:
                    <span className="font-bold text-indigo-600"> 915010033347967</span>
                  </p>
                  <p className="text-sm font-semibold mb-2">IFSC Code:
                    <span className="font-bold text-indigo-600"> UTIB0000808</span>
                  </p>
                  <p className="text-sm font-semibold mb-2">Swift Code:
                    <span className="font-bold text-indigo-600"> AXISINBB048</span>
                  </p>
                </div>
              </div> */}
            </div>
          </div>


          {/* Step 4: Order Summary */}
          {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-lg   text-gray-1000 mb-4 font-serif font-bold">Order Summary</h3>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-800">Product</span>
                <span className="text-gray-800">Price</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-1000 font-bold">{productName}</span>
                <span className="text-gray-600">{price}</span>
              </div>
              <div className="border-t border-gray-300 my-4" />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{price}</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Root-level Complete Order button */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">

        <button onClick={handleSubmit} className="bg-cyan-600 text-white font-semibold px-6 py-3 my-4 rounded-md shadow hover:bg-cyan-800 transition duration-200">
          Submit
        </button>
        </a>

    

     
    </div>
  );
};

export default InterestedUserApplyForm;
