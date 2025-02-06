import React, { useState, useEffect } from "react";
import axios from "axios"; // Importing axios for API calls
import LicenceAdd from "./LicenceAdd"; // Import the License Add Modal Component
import api from "../Utils/api1";
import { showConfirm } from "../Utils/toastUtils";

const LicenseManager = () => {
  const [licenses, setLicenses] = useState([]); // Initialize licenses as an empty array
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  const licensesPerPage = 5;

  const handleOpenPopup = () => {
    setIsPopupOpen(true); // Open the popup
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };
 // Fetch licenses data from the API
  const fetchLicenses = async () => {
    try {
      const response = await api.get("/api/licenseList/getLicenseList");
      if (response.data && Array.isArray(response.data.data)) {
        setLicenses(response.data.data);
      } else {
        console.error("Unexpected response format", response.data);
      }
    } catch (error) {
      console.error("Error fetching licenses:", error);
    }
  };

  useEffect(() => {
    fetchLicenses();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(licenses.length / licensesPerPage);
  const startIndex = (currentPage - 1) * licensesPerPage;
  const currentLicenses = licenses.slice(startIndex, startIndex + licensesPerPage);

  const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);


//   const deleteLicense = async (licenseListID) => {
//     try {

//       const confirmation = await showConfirm("Are you sure you want to Delete License?");

//       if (confirmation) {

//       const response = await api.delete(`/api/licenseList/deleteLicenseListByID`, {
//             params: { licenseListID: licenseListID },
//         });

//         if (response.data.code === "SUCCESS") {
//             setLicenses((prevLicenses) => prevLicenses.filter((license) => license.licenseID !== licenseListID));
//             // alert("License deleted successfully!");
//         } else {
//             alert(`Failed to delete license: ${response.data.message}`);
//         }
//       }
//     } catch (error) {
//         console.error("Error deleting license:", error);
//         if (error.response && error.response.status === 409) {
//             alert("Cannot delete license as it is linked to other entities.");
//         } else {
//             alert("An unexpected error occurred while deleting the license.");
//         }
//     }
  

// };


const deleteLicense = async (licenseListID) => {
  try {
    const confirmation = await showConfirm("Are you sure you want to Delete License?");

    // If the user confirmed (clicked Yes)
    if (confirmation) {
      const response = await api.delete(`/api/licenseList/deleteLicenseListByID`, {
        params: { licenseListID: licenseListID },
      });

      if (response.data.code === "SUCCESS") {
        setLicenses((prevLicenses) => prevLicenses.filter((license) => license.licenseID !== licenseListID));
      } else {
        alert(`Failed to delete license: ${response.data.message}`);
      }
    }
  } catch (error) {
    // This will only be triggered if there's an error other than user canceling
    console.error("Error deleting license:", error);
    if (error.response && error.response.status === 409) {
      alert("Cannot delete license as it is linked to other entities.");
    } else {
      alert("An unexpected error occurred while deleting the license.");
    }
  }
};

  

  return (
    <div className="bg-gray-100 p-5">
 <div class="max-w-3xl mx-auto text-center mt-16">
    <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">List Of License</span>
        <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
    </h1>
    <p class="text-lg text-gray-800 mb-8"></p>
</div>


      {/* Add License Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleOpenPopup}
          className="bg-blue-500 text-white px-4 py-2 rounded bg-pink-600 hover:bg-green-700 ml-auto lg:mx-10 md:mx-5  sm:mx-5 "
        >
          Add License +
        </button>

        <LicenceAdd isOpen={isPopupOpen} onClose={handleClosePopup} onLicenseAdded={fetchLicenses}/>
      </div>

      {/* License Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                License Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                Validity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentLicenses.map((license) => (
              <tr key={license.licenseID}> {/* Use licenseID as the key */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {license.licenseName} {/* Access the correct field */}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {/* You can update this field with the actual status field if available */}
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {license.validTill} 
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {/* <a
                    href="#"
                    className="inline-block bg-indigo-100 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-900 px-3 py-1 rounded-md"
                  >
                    Edit
                  </a> */}
                  <button
                    onClick={() => deleteLicense(license.licenseID)} // Call delete function on click
                    className="inline-block bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-900 px-3 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-md"
        >
          Prev
        </button>
        <span className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LicenseManager;
