import React, { useState, useEffect } from "react";
import api from "../Utils/api1";
import UpdateStatusPopup from "./UpdateStatusPopup";
import CustomerImgPreviewPopup from "./CustomerDocsPreviewPopup";

import { showConfirm,showToast } from "../Utils/toastUtils";
import { FaRegTrashAlt, FaRegEye } from "react-icons/fa"; // Import Eye Icon

const LicenseManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState(null);
  // Image Preview States
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCustomerImages, setSelectedCustomerImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const usersPerPage = 5;

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await api.get(
        "api/licenseOfCustomerController/getAllLicenseOfCustomer"
      );
      if (response.data.code === "ALL OK") {
        const licenses = response.data.data;

        const customersMap = new Map();
        licenses.forEach((license) => {
          const customer = license.customer;
          if (!customersMap.has(customer.customerId)) {
            customersMap.set(customer.customerId, {
              ...customer,
              licenceDTOS: [],
            });
          }
          customersMap.get(customer.customerId).licenceDTOS.push(license);
        });

        setCustomers(Array.from(customersMap.values()));
      } else {
        console.error("Failed to fetch customers");
      }
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };





  const deleteLicense = async (licenseOfCustomerId) => {
    try {

      const confirmation =  await showConfirm("Are you sure to delete?");

      if (confirmation) {
      const response = await api.delete(
        `/api/licenseOfCustomerController/deleteLicenseOfCustomer`,
        {
          params: { licenseOfCustomerId: licenseOfCustomerId },
        }
      );

  

    
console.log(response.data.code)
      if (response.data.code=== "ALL OK") {
        showToast("License deleted successfully", "success");
        fetchCustomers();
      } else {
        showToast("Failed to delete license", "error");
      }
    }
    } catch (error) {
      console.error("Error deleting license:", error);
      alert("Error deleting license");
    }
  };




  const handleStatusChange = (license) => {
    setSelectedLicense(license);
    setIsPopupOpen(true);
  };

  const updateLicenseStatus = async (newStatus) => {

    console.log(newStatus)
    try {
      const response = await api.patch(
        `api/licenseOfCustomerController/updateStatus`,
        null,
        {
          params: {
            licenseOfCustomerId: selectedLicense.licenseOfCustomerId,
            status: newStatus,
          },
        }
      );

      if (response.data.code === "Success") {
        // alert("License status updated successfully");
        showToast("License status updated...!","success")

        fetchCustomers();
      } else {
        alert("Failed to update license status");
        showToast("Failed to update license status","error")

      }
    } catch (error) {
      console.error("Error changing license status:", error);
      alert("Error updating license status");
    } finally {
      setIsPopupOpen(false);
      setSelectedLicense(null);
    }
  };


  // Function to open the image preview popup
  const openImagePopup = (images) => {
    if (images.length > 0) {
      setSelectedCustomerImages(images);
      setCurrentImageIndex(0);
      setIsImagePopupOpen(true);
    } else {
      showToast("No images available for this customer", "warning");
    }
  };


  const filteredCustomers = customers.filter((customer) =>
    customer.licenceDTOS?.some((lic) => 
      (statusFilter ? lic.status === statusFilter : true) &&
      (customer.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
       customer.email?.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );

  const totalPages = Math.ceil(filteredCustomers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const customerRows = [];
currentCustomers.forEach((customer) => {
  customer.licenceDTOS.forEach((license) => {
    if (!statusFilter || license.status === statusFilter) {
      customerRows.push({
        ...customer,
        license,
      });
    }
  });
});

  return (
    <div className="mx-auto text-center mt-2 mb-4">


      <div className="bg-gray-100 ">
      <div className="flex items-center justify-center h-20">
  <h1 className="text-3xl font-bold underline decoration-2 decoration-cyan-400 font-serif">
    License Management
  </h1>
</div>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
            >
              <option value="">Filter By Status</option>
              <option value="ACTIVE">Active License</option>
              <option value="RENEW">Renew</option>
              <option value="PENDING">Pending</option>
            </select>

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or email"
              className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
              <th
          scope="col"
          className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
        >
          Sr.No
        </th>
        <th className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Hotel Name
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Fullname
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Mobile Number
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  License Name
                </th>

                <th className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
          Issue Date
        </th>
        <th className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
          Expiry Date
        </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  License Status
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customerRows.map((row, index) => (
                <tr key={row.customerId + (row.license ? row.license.licenseOfCustomerId : index)}>
                      <td className="px-3 py-4 whitespace-nowrap">
            {index + 1} {/* Serial number */}
          </td>
          <td className="px-3 py-4">{row.firstName} </td>

                  <td className="px-3 py-4">{row.lastName}</td>
                  <td className="px-3 py-4">{row.mobileNumber}</td>
                  <td className="px-3 py-4">
                    {row.license ? row.license.licenseName : "No License"}
                  </td>

                  <td className="px-3 py-4">
            {row.license && row.license.issueDate
              ? new Date(row.license.issueDate).toLocaleDateString()
              : "N/A"}
          </td>

          <td className="px-3 py-4">
            {row.license && row.license.expiryDate
              ? new Date(row.license.expiryDate).toLocaleDateString()
              : "N/A"}
          </td>
                  <td className="px-3 py-4">
  <span
    className={`${
      row.license?.status === 'ACTIVE'
        ? 'px-4 py-1 text-sm text-green-600 rounded-full bg-green-100'
        : row.license?.status === 'RENEW'
        ? 'px-4 py-1 text-sm text-pink-600 rounded-full bg-pink-100'
        : row.license?.status === 'PENDING'
        ? 'px-4 py-1 text-sm text-yellow-600 rounded-full bg-yellow-100'
        : 'bg-gray-100 text-gray-500 border border-gray-500'
    } px-2 py-1 rounded-md`}
  >

{/* <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">completed</span> */}

    {row.license ? row.license.status : "N/A"}
  </span>
</td>

<td className="px-3 py-4 flex items-center gap-3">                    <button
                      onClick={() => handleStatusChange(row.license)}
                      className="bg-cyan-500 text-white px-8 py-2 rounded-md hover:bg-cyan-700"
                    >
                      Change Status
                    </button>
                     {/* Eye Icon for Image Preview */}
                     <button
                      onClick={() => openImagePopup(row.license?.images || [])}
                      className="px-4 py-2 text-white bg-cyan-500 hover:bg-cyan-700 rounded-md "

                    >
                      {/* <FaRegEye className=" text-2xl text-grey-300" /> */}
                      View
                    </button>
                    <div 
    onClick={() => deleteLicense(row.license.licenseOfCustomerId)}
    className="px-4 py-2 rounded-full bg-gray-100"

    
  >
    <FaRegTrashAlt className=" text-xl text-red-500" />
  </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:bg-gray-200"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:bg-gray-200"
          >
            Next
          </button>
        </div>
      </div>



 {/* Image Preview Popup */}
 {isImagePopupOpen && (
        <CustomerImgPreviewPopup images={selectedCustomerImages} onClose={() => setIsImagePopupOpen(false)} />
      )}
      <UpdateStatusPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onStatusChange={updateLicenseStatus}
      />
    </div>
  );
};

export default LicenseManagement;
