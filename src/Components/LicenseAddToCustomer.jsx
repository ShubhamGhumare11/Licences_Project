import React, { useState, useEffect } from "react";
import api from "../Utils/api";

const LicenseAddToCustomer = ({ customerId, showModal, onClose }) => {
  const [licenses, setLicenses] = useState([]);
  const [selectedLicense, setSelectedLicense] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage,setSuccessMessage ] = useState(null);


  // Fetch the list of licenses
  useEffect(() => {
    if (showModal) {
      fetchLicenses();
    }
  }, [showModal]);

  const fetchLicenses = async () => {
    setLoading(true);
    try {
      const response = await api.get("/api/licenseList/getLicenseList");
      if (response.data.code === "SUCCESS") {
        setLicenses(response.data.data); // Fix: accessing 'data' from the response
      } else {
        setError("Failed to fetch licenses");
      }
    } catch (err) {
      setError("Error fetching licenses");
    } finally {
      setLoading(false);
    }
  };

  const handleLicenseChange = (e) => {
    setSelectedLicense(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedLicense) {
      setError("Please select a license");
      return;
    }

    try {
      // PATCH request to assign license to the customer
      const response = await api.patch(
        `api/customer/assignLicence?customerId=${customerId}&licenceId=${selectedLicense}`
      );
      if (response.data.code === "SUCCESS") {
        alert("License added successfully!");
        setSuccessMessage("License added successfully!");
        onClose(); // Close the modal after success
      } else {
        setError("Cutomer already applied for this license.");
   
      }
    } catch (err) {
      setError("Failed to add license : Customer Is Inactive");
    }
  };

  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">Add License to Customer</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Select License</label>
                <select
                  value={selectedLicense}
                  onChange={handleLicenseChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select a license</option>
                  {licenses.map((license) => (
                    <option key={license.licenseID} value={license.licenseID}>
                      {license.licenseName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-300 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Add License
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    )
  );
};

export default LicenseAddToCustomer;
