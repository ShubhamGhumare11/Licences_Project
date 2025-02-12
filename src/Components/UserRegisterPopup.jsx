// import React, { useState } from "react";
// import api from "../Utils/api"; // Adjust the import based on your API setup

// const UserRegistration = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobileNo: "",
//     password: "",
//     roles: "USER", // Hidden field, default to "USER"
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post("/api/register", formData);
//       if (response.data.code === "SUCCESS") {
//         alert("Registration successful!");
//       } else {
//         alert("Registration failed: " + response.data.message);
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       alert("An error occurred during registration.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="text"
//             name="mobileNo"
//             placeholder="Mobile Number"
//             value={formData.mobileNo}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserRegistration;

import React, { useState } from "react";
import api from "../Utils/api1";

const UserRegisterPopup = ({ isOpen, onClose, mode = "modal" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    password: "",
    roles: "USER", // Default role (hidden)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/account/register",formData);
      alert("Registration successful!");
      console.log(response.data.code)
      setFormData({
        name: "",
        email: "",
        mobileNo: "",
        password: "",
        roles: "USER",
      });
      if (onClose) onClose(); // Close popup on success
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed!");
    }
  };

  // If in modal mode, hide when `isOpen` is false
  if (mode === "modal" && !isOpen) return null;

  return (
    <div className={`${mode === "modal" ? "fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center" : "flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black"} px-4`}>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg border border-purple-500 text-white">
      <h2 className="text-2xl font-bold text-center mb-4">SignUP</h2>
        <form onSubmit={handleSubmit} className="space-y-1">
        <label className="block text-gray-100">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2  text-black border rounded"
            required
          />
                      <label className="block text-gray-100">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2  text-black border rounded"
            required
          />
                      <label className="block text-gray-100">Mobile Number</label>

          <input
            type="text"
            name="mobileNo"
            placeholder="Enter Your Mobile Number"
            value={formData.mobileNo}
            onChange={handleChange}
            className="w-full p-2 text-black border rounded"
            required
          />
                      <label className="block text-gray-100">Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter Your   Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 text-black border rounded"
            required
          />
          <div className="flex justify-between">
            {mode === "modal" && (
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-800"
            >
              Register
            </button>
          </div>
          <div className="flex justify-center items-center"><p>Already have an account ?<a href="/login"> SignIn</a></p></div>
        </form>
      </div>
    </div>
  );
};

export default UserRegisterPopup;
