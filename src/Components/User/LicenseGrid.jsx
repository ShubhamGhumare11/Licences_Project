import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Utils/api1";

const LicenseGrid = () => {
  const [licenses, setLicenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        // Make the API request
        const response = await api.get("http://localhost:8080/api/licenseList/getLicenseList");

        // Log response for debugging
        console.log("Response: ", response.data);

        if (response.status === 200) {
          setLicenses(response.data.data || []);
        } else {
          setError("Failed to fetch licenses.");
        }
      } catch (error) {
        console.error("API Error: ", error);
       navigate("/login")
      } finally {
        setIsLoading(false);
      }
    };

    fetchLicenses(); // Call the function to fetch data
  }, []);

  // Loading state
  if (isLoading) {
    return <div className="text-center py-6">Loading...</div>;
  }

  // Error state
  if (error) {
    return <div className="text-center py-6 text-red-500">{error}</div>;
  }

  // Navigate to InterestedUserApplyForm and pass the selected license
  const handleApply = (licenseName) => {
    console.log("Selected License: ", licenseName);
    navigate("/interesteduserapplyform", { state: { interestedToApply: licenseName } });
  };

  // Displaying available licenses
  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Apply For License
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
        </h1>
        <p className="text-lg text-gray-800 mb-8">Choose a license below to apply.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {licenses.length > 0 ? (
          licenses.map((license, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-cyan-100 to-teal-500 text-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold text-center text-black">
                {license.licenseName || "Unknown License"}
              </h3>
              <button
                onClick={() => handleApply(license.licenseName)}
                className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-md text-sm focus:outline-none"
              >
                Apply
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-gray-500">No licenses available.</div>
        )}
      </div>
    </div>
  );
};

export default LicenseGrid;
