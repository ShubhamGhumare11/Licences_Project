// import React, { useState } from "react";
// import axios from "axios";

// const LicenceAdd = ({ isOpen, onClose }) => {
//   const [licenseName, setLicenseName] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [responseMessage, setResponseMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setResponseMessage("");

//     try {
//       const response = await axios.post("http://localhost:8080/api/licenseList/saveLicense", {
//         licenseName: licenseName,
//       });


//       console.log("response from licenesavepost..."+response.data)
//       setResponseMessage(response.data.message);
//       setTimeout(() => {
//         setResponseMessage(""); // Clear the message after 2 seconds
//       }, 3000);
//       setLicenseName(""); // Clear the input field after successful submission
//     } catch (error) {
//       setResponseMessage(
//         error.response?.data?.message || "Failed to save license. Please try again."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Save License</h2>
//           <button
//             className="text-gray-500 hover:text-gray-700"
//             onClick={onClose}
//           >
//             ✕
//           </button>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="licenseName" className="block text-sm font-medium text-gray-700">
//               License Name
//             </label>
//             <input
//               id="licenseName"
//               type="text"
//               value={licenseName}
//               onChange={(e) => setLicenseName(e.target.value)}
//               placeholder="Enter license name"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               required
//             />
//           </div>
          
//           {responseMessage && (
//             <p
//               className={`text-sm ${
//                 responseMessage.includes("Failed") ? "text-red-500" : "text-green-500"
//               }`}
//             >
//               {responseMessage}
//             </p>
//           )}
//           <div className="flex justify-end space-x-3">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className={`px-4 py-2 text-white rounded ${
//                 isLoading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
//               }`}
//               disabled={isLoading}
//             >
//               {isLoading ? "Saving..." : "Save"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LicenceAdd;



import React, { useState } from "react";
import api from "../Utils/api";
const LicenceAdd = ({ isOpen, onClose,onLicenseAdded }) => {
  const [licenseName, setLicenseName] = useState("");
  const [validTill, setValidtill] = useState(""); // State for validity dropdown
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage("");

    try {
      const response = await api.post("/api/licenseList/saveLicense", {
        licenseName: licenseName,
        validTill: validTill, // Include validity in the request payload
      });
      onLicenseAdded();
      console.log("Response from license save post: ", response.data);
      setResponseMessage(response.data.message);
      setTimeout(() => {
        setResponseMessage(""); // Clear the message after 2 seconds
      }, 3000);
      setLicenseName(""); // Clear the input field after successful submission
      setValidtill(""); // Clear the validity dropdown
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || "Failed to save license. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Save License</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="licenseName" className="block text-sm font-medium text-gray-700">
              License Name
            </label>
            <input
              id="licenseName"
              type="text"
              value={licenseName}
              onChange={(e) => setLicenseName(e.target.value)}
              placeholder="Enter license name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="validTill" className="block text-sm font-medium text-gray-700">
              Validity
            </label>
            <select
              id="validity"
              value={validTill}
              onChange={(e) => setValidtill(parseInt(e.target.value))} // Parse selected value as an integer

              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="" disabled>
                Select validity period
              </option>
              <option value="1 Year">1 Year</option>
              <option value="2 Years">2 Years</option>
              <option value="3 Years">3 Years</option>
              <option value="Lifetime">Lifetime</option>
            </select>
          </div>
          {responseMessage && (
            <p
              className={`text-sm ${
                responseMessage.includes("Failed") ? "text-red-500" : "text-green-500"
              }`}
            >
              {responseMessage}
            </p>
          )}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 text-white rounded ${
                isLoading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LicenceAdd;
