// // import React, { useState } from "react";
// // import LicenceAdd from "./LicenceAdd";

// // const AdminTable = () => {
// //   // Sample user array
// //   const users = [
// //     {
// //       id: 1,
// //       name: "Ravi Kumar",
// //       mobileNumber: "987-654-3210",
// //       email: "ravi.kumar@example.com",
// //       address: "456 MG Road, Bangalore, Karnataka",
// //       status: "Active",
// //       role: "Admin",
// //       date: "2025-01-01",
// //     },
// //     {
// //       id: 2,
// //       name: "Anita Sharma",
// //       mobileNumber: "123-456-7890",
// //       email: "anita.sharma@example.com",
// //       address: "89 NH Road, Delhi",
// //       status: "Inactive",
// //       role: "User",
// //       date: "2025-01-10",
// //     },
// //     {
// //       id: 3,
// //       name: "Vikram Singh",
// //       mobileNumber: "999-888-7777",
// //       email: "vikram.singh@example.com",
// //       address: "1203 Rajiv Gandhi Nagar, Hyderabad, Telangana",
// //       status: "Active",
// //       role: "User",
// //       date: "2025-01-05",
// //     },
// //     {
// //       id: 4,
// //       name: "Priya Verma",
// //       mobileNumber: "456-789-1234",
// //       email: "priya.verma@example.com",
// //       address: "78 New Friends Colony, Delhi",
// //       status: "Inprogress",
// //       role: "Admin",
// //       date: "2025-01-12",
// //     },
// //     {
// //       id: 5,
// //       name: "Amit Gupta",
// //       mobileNumber: "777-555-4444",
// //       email: "amit.gupta@example.com",
// //       address: "30 Banjara Hills, Hyderabad, Telangana",
// //       status: "Active",
// //       role: "User",
// //       date: "2025-01-15",
// //     },
// //     {
// //       id: 6,
// //       name: "Neha Mehta",
// //       mobileNumber: "222-333-4444",
// //       email: "neha.mehta@example.com",
// //       address: "74 Lajpat Nagar, Mumbai, Maharashtra",
// //       status: "Inactive",
// //       role: "User",
// //       date: "2025-01-20",
// //     },
// //   ];
// //   const [isPopupOpen, setIsPopupOpen] = useState(false);

// //   const [statusFilter, setStatusFilter] = useState("");
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [showModal, setShowModal] = useState(false);
// //   const [newUser, setNewUser] = useState({
// //     name: "",
// //     mobileNumber: "",
// //     email: "",
// //     address: "",
// //     status: "",
// //     date: "",
// //   });
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const usersPerPage = 5;


// //   // Filtered users based on status and search term
// //   const filteredUsers = users.filter(
// //     (user) =>
// //       (statusFilter ? user.status === statusFilter : true) &&
// //       (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         user.email.toLowerCase().includes(searchTerm.toLowerCase()))
// //   );

// //   // Pagination logic
// //   const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
// //   const startIndex = (currentPage - 1) * usersPerPage;
// //   const currentUsers = filteredUsers.slice(
// //     startIndex,
// //     startIndex + usersPerPage
// //   );

// //   const handleNextPage = () => {
// //     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
// //   };

// //   const handlePrevPage = () => {
// //     if (currentPage > 1) setCurrentPage(currentPage - 1);
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewUser((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert("User added successfully!");
// //     setShowModal(false);
// //   };

// //   return (
// //     <div className="bg-gray-100 p-5">
// //       <div className="flex justify-between mb-4">
// //         {/* Left side: Filters and Search */}
// //         <div className="flex space-x-1">
// //           {/* Status Filter */}
// //           <select
// //             value={statusFilter}
// //             onChange={(e) => setStatusFilter(e.target.value)}
// //             className="px-4 py-2 border border-gray-300 rounded-md"
// //           >
// //             <option value="">Filter by Status</option>
// //             <option value="Active">Active</option>
// //             <option value="Inactive">Inactive</option>
// //             <option value="Inprogress">In Progress</option>
// //           </select>

// //           {/* Search Box */}
// //           <input
// //             type="text"
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             placeholder="Search by name or email"
// //             className="px-4 py-2 border border-gray-300 rounded-md"
// //           />
// //         </div>
// //       </div>

// //       {/* User Form Modal */}
// //       {showModal && (
// //         <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
// //           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
// //             <h2 className="text-xl font-bold mb-4">Add New User</h2>
// //             <form onSubmit={handleSubmit}>
// //               {/* Form Fields */}
// //               <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700">
// //                   Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   value={newUser.name}
// //                   onChange={handleInputChange}
// //                   required
// //                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //                 />
// //               </div>
// //               <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700">
// //                   Mobile No
// //                 </label>
// //                 <input
// //                   type="text"
// //                   name="mobileNumber"
// //                   value={newUser.mobileNumber}
// //                   onChange={handleInputChange}
// //                   required
// //                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //                 />
// //               </div>
// //               <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700">
// //                   Email
// //                 </label>
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   value={newUser.email}
// //                   onChange={handleInputChange}
// //                   required
// //                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //                 />
// //               </div>
// //               <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700">
// //                   Address
// //                 </label>
// //                 <textarea
// //                   name="address"
// //                   value={newUser.address}
// //                   onChange={handleInputChange}
// //                   required
// //                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //                 />
// //               </div>
// //               <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700">
// //                   Status
// //                 </label>
// //                 <select
// //                   name="status"
// //                   value={newUser.status}
// //                   onChange={handleInputChange}
// //                   required
// //                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //                 >
// //                   <option value="">Select Status</option>
// //                   <option value="Active">Active</option>
// //                   <option value="Inactive">Inactive</option>
// //                   <option value="Inprogress">In Progress</option>
// //                 </select>
// //               </div>
// //               <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700">
// //                   Date
// //                 </label>
// //                 <input
// //                   type="date"
// //                   name="date"
// //                   value={newUser.date}
// //                   onChange={handleInputChange}
// //                   required
// //                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //                 />
// //               </div>
// //               <div className="flex justify-end space-x-4">
// //                 <button
// //                   type="button"
// //                   onClick={() => setShowModal(false)}
// //                   className="bg-gray-300 px-4 py-2 rounded-md"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button
// //                   type="submit"
// //                   className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
// //                 >
// //                   Add User
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}

// //       <div className="overflow-x-auto">
// //         <div className=" justify-between items-center mb-7 lg:mx-10 sm:mx-2">
// //           {/* Right side: Add User button */}

// //           {/* <button
// //             onClick={handleOpenPopup}
// //             className="bg-blue-500 text-white px-4 py-2 rounded bg-pink-600 hover:bg-green-700 ml-auto lg:mx-10 md:mx-5  sm:mx-5 "
// //           >
// //             Add License +
// //           </button>

// //           <LicenceAdd isOpen={isPopupOpen} onClose={handleClosePopup} /> */}

// //           <button
// //             onClick={() => setShowModal(true)}
// //             className="bg-blue-500 text-white px-4 py-2 rounded bg-green-500 hover:bg-green-700 ml-auto  "
// //           >
// //             Add User +
// //           </button>
// //         </div>
// //         <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
// //           <thead className="bg-gray-200">
// //             <tr>
// //               <th
// //                 scope="col"
// //                 className="px-6 py-3 text-left text-xs font-medium text-gray- uppercase tracking-wider"
// //               >
// //                 Name
// //               </th>
// //               <th
// //                 scope="col"
// //                 className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
// //               >
// //                 Title
// //               </th>
// //               <th
// //                 scope="col"
// //                 className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
// //               >
// //                 Status
// //               </th>
// //               <th
// //                 scope="col"
// //                 className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
// //               >
// //                 Role
// //               </th>
// //               <th
// //                 scope="col"
// //                 className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
// //               >
// //                 Email
// //               </th>
// //               <th
// //                 scope="col"
// //                 className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
// //               >
// //                 Actions
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody className="bg-white divide-y divide-gray-200">
// //             {currentUsers.map((user) => (
// //               <tr key={user.id}>
// //                 <td className="px-6 py-4 whitespace-nowrap">
// //                   <div className="flex items-center">
// //                     <div className="flex-shrink-0 h-10 w-10">
// //                       <img
// //                         className="h-10 w-10 rounded-full"
// //                         src={`https://i.pravatar.cc/150?img=${user.id}`}
// //                         alt={`${user.name}`}
// //                       />
// //                     </div>
// //                     <div className="ml-4">
// //                       <div className="text-sm font-medium text-gray-900">
// //                         {user.name}
// //                       </div>
// //                       <div className="text-sm text-gray-500">{user.email}</div>
// //                     </div>
// //                   </div>
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap">
// //                   <div className="text-sm text-gray-900">{user.title}</div>
// //                   <div className="text-sm text-gray-500">{user.department}</div>
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap">
// //                   <span
// //                     className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
// //                       user.status === "Active"
// //                         ? "bg-green-100 text-green-800"
// //                         : user.status === "Inactive"
// //                         ? "bg-red-100 text-red-800"
// //                         : "bg-yellow-100 text-yellow-800"
// //                     }`}
// //                   >
// //                     {user.status}
// //                   </span>
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                   {user.role}
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                   {user.email}
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2">
// //                   <a
// //                     href="#"
// //                     className="inline-block bg-indigo-100 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-900 px-3 py-1 rounded-md"
// //                   >
// //                     Edit
// //                   </a>
// //                   <a
// //                     href="#"
// //                     className="inline-block bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-900 px-3 py-1 rounded-md"
// //                   >
// //                     Delete
// //                   </a>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Pagination */}
// //       <div className="flex justify-between items-center mt-4">
// //         <button
// //           onClick={handlePrevPage}
// //           disabled={currentPage === 1}
// //           className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
// //         >
// //           Previous
// //         </button>
// //         <span className="text-sm">
// //           Page {currentPage} of {totalPages}
// //         </span>
// //         <button
// //           onClick={handleNextPage}
// //           disabled={currentPage === totalPages}
// //           className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
// //         >
// //           Next
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminTable;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AdminTable = () => {
//   // Sample state for users
//   const [customers, setCustomers] = useState([]);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [newUser, setNewUser] = useState({
//     name: "",
//     mobileNumber: "",
//     email: "",
//     city: "",
//     area: "",
//     pincode: "",
//   });
//   const [statusFilter, setStatusFilter] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const usersPerPage = 5;
//   const [currentPage, setCurrentPage] = useState(1);

//   // Fetch all customers on component mount
//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   // Fetch all customers from API
//   const fetchCustomers = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/customer/getAllCustomer");
//       if (response.data.code === "SUCCESS") {
//         setCustomers(response.data.data);
//       } else {
//         console.error("Failed to fetch customers");
//       }
//     } catch (error) {
//       console.error("Error fetching customers:", error);
//     }
//   };

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewUser((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submit to create a new customer
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8080/api/customer/saveCustomer", newUser);
//       if (response.data.code === "Success") {
//         alert("Customer added successfully!");
//         fetchCustomers(); // Refresh the customer list
//         setShowModal(false); // Close the modal
//       } else {
//         alert("Error adding customer");
//       }
//     } catch (error) {
//       console.error("Error adding customer:", error);
//     }
//   };

//   // Pagination logic
//   const filteredCustomers = customers.filter(
//     (customer) =>
//       (statusFilter ? customer.licenceDTOS.some(lic => lic.status === statusFilter) : true) &&
//       (customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         customer.email.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   const totalPages = Math.ceil(filteredCustomers.length / usersPerPage);
//   const startIndex = (currentPage - 1) * usersPerPage;
//   const currentCustomers = filteredCustomers.slice(startIndex, startIndex + usersPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className="bg-gray-100 p-5">
//       <div className="flex justify-between mb-4">
//         <div className="flex space-x-1">
//           <select
//             value={statusFilter}
//             onChange={(e) => setStatusFilter(e.target.value)}
//             className="px-4 py-2 border border-gray-300 rounded-md"
//           >
//             <option value="">Filter by Status</option>
//             <option value="ACTIVE">Active</option>
//             <option value="INACTIVE">Inactive</option>
//             <option value="INPROGRESS">In Progress</option>
//           </select>

//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Search by name or email"
//             className="px-4 py-2 border border-gray-300 rounded-md"
//           />
//         </div>
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl font-bold mb-4">Add New Customer</h2>
//             <form onSubmit={handleSubmit}>
//               {/* Form Fields */}
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={newUser.name}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Mobile No</label>
//                 <input
//                   type="text"
//                   name="mobileNumber"
//                   value={newUser.mobileNumber}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={newUser.email}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">City</label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={newUser.city}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Area</label>
//                 <input
//                   type="text"
//                   name="area"
//                   value={newUser.area}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Pincode</label>
//                 <input
//                   type="text"
//                   name="pincode"
//                   value={newUser.pincode}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className="bg-gray-300 px-4 py-2 rounded-md"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                 >
//                   Add Customer
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <div className="overflow-x-auto">
//         <button
//           onClick={() => setShowModal(true)}
//           className="bg-blue-500 text-white px-4 py-2 rounded bg-green-500 hover:bg-green-700 ml-auto"
//         >
//           Add Customer +
//         </button>

//         <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
//           <thead className="bg-gray-200">
//             <tr>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
//                 Name
//               </th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
//                 Mobile Number
//               </th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
//                 Status
//               </th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
//                 Email
//               </th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {currentCustomers.map((customer) => (
//               <tr key={customer.customerId}>
//                 <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{customer.mobileNumber}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   {customer.licenceDTOS.length > 0 ? customer.licenceDTOS[0].status : "No License"}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                   <button className="bg-indigo-100 text-indigo-600 hover:bg-indigo-200 px-3 py-1 rounded-md">
//                     Edit
//                   </button>
//                   <button className="bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1 rounded-md">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={handlePrevPage}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
//         >
//           Previous
//         </button>
//         <span className="text-sm">Page {currentPage} of {totalPages}</span>
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminTable;






import React, { useState, useEffect } from "react";
import LicenseAddToCustomer from "./LicenseAddToCustomer";
import EditCustomerPopup from "./EditCustomerPopup";

import api from "../Utils/api";
const AdminTable = () => {
  const [customers, setCustomers] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    city: "",
    area: "",
    pincode: "",
    state: "",
  
  });
  const [statusFilter, setStatusFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const usersPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddLicenseModal, setShowAddLicenseModal] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [licenseModalVisible, setLicenseModalVisible] = useState(false); // For toggling modal visibility
const [currentCustomerLicenses, setCurrentCustomerLicenses] = useState([]); // For storing licenses of the selected customer

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await api.get("/api/customer/getAllCustomer");
      if (response.data.code === "SUCCESS") {
        setCustomers(response.data.data);
      } else {
        console.error("Failed to fetch customers");
      }
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/customer/saveCustomer", newUser);
      if (response.data.code === "Success") {
        alert("Customer added successfully!");
        fetchCustomers(); // Refresh the customer list
        setShowModal(false); // Close the modal
        setNewUser({ // Reset the form
          firstName: "",
          lastName: "",
          mobileNumber: "",
          email: "",
          city: "",
          area: "",
          pincode: "",
          state: "",
        });
      } else {
        alert(`Error: ${response.data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error adding customer:", error);
      alert(`Error: ${error.response?.data?.message || "Something went wrong"}`);
    }
  };


  const handleDeleteCustomerById = async (customerId) => {
    try {
      // const response = await axios.delete(
      //   `http://localhost:8080/api/customer/DeleteCustomerById?CustomerId=${customerId}`
      // );

      const response = await api.delete("/api/customer/DeleteCustomerById", {
        params: { CustomerId: customerId },
    });
  


      if (response.data.code === "success") {
        // Update the state by removing the deleted customer
      
    fetchCustomers();
        alert("Customer deleted successfully!");
      } else {
        alert("Failed to delete the customer.");
      }
    } catch (error) {
      console.error("Error deleting customer:", error);
      alert("Error deleting the customer.");
    }
  };


  const handleAddLicenseClick = (customerId) => {
    setSelectedCustomerId(customerId);
    setShowAddLicenseModal(true);
  };

  const handleCloseModal = () => {
    setShowAddLicenseModal(false);
    fetchCustomers(); 
  };


  const handleEditClick = (customer) => {
    setSelectedCustomer(customer);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedCustomer(null);
  };


  const openLicenseModal = (licenses) => {
    setCurrentCustomerLicenses(licenses); // Set licenses for the selected customer
    setLicenseModalVisible(true); // Open the modal
  };
  
  const closeLicenseModal = () => {
    setLicenseModalVisible(false); // Close the modal
    setCurrentCustomerLicenses([]); // Reset the licenses
  };

  // Filter customers based on status and search term
  const filteredCustomers = customers.filter(
    (customer) =>
      (statusFilter ? customer.licenceDTOS.some(lic => lic.status === statusFilter) : true) &&
      (customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredCustomers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentCustomers = filteredCustomers.slice(startIndex, startIndex + usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="bg-gray-100 p-5">
      <div className="flex justify-between mb-4">
        <div className="flex space-x-1">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Filter by Status</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
            <option value="PENDING">PENDING</option>
          </select>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or email"
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-bold mb-4">Add New Customer</h2>
      <form onSubmit={handleSubmit}>
        {/* Form Fields */}

        <div className="flex flex-col md:flex-row gap-4">       
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Firstname</label>
          <input
            type="text"
            name="firstName"
            value={newUser.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter Firstname"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Lastname</label>
          <input
            type="text"
            name="lastName"
            value={newUser.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter Lastname"
          />
        </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Mobile No</label>
          <input
            type="tel"
            name="mobileNumber"
            value={newUser.mobileNumber}
            onChange={(e) =>
              handleInputChange({
                target: { name: "mobileNumber", value: e.target.value.replace(/\D/g, "") },
              })
            }
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter 10-digit mobile number"
            maxLength={10}
            pattern="\d{10}"
            title="Mobile number should be 10 digits"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter email address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={newUser.city}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter city"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Area</label>
          <input
            type="text"
            name="area"
            value={newUser.area}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter area"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={newUser.pincode}
            onChange={(e) =>
              handleInputChange({
                target: { name: "pincode", value: e.target.value.replace(/\D/g, "") },
              })
            }
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter pincode"
            maxLength={6}
            pattern="\d{6}"
            title="Pincode should be 6 digits"
          />
        </div>
        <div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">State</label>
  <select
    name="state"
    value={newUser.state}
    onChange={handleInputChange}
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm md:text-sm lg:text-sm"
  >
    <option value="" disabled>Select a state</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
    <option value="Chandigarh">Chandigarh</option>
    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
    <option value="Lakshadweep">Lakshadweep</option>
    <option value="Delhi">Delhi</option>
    <option value="Puducherry">Puducherry</option>
  </select>
</div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="bg-gray-300 px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Customer
          </button>
        </div>
      </form>
    </div>
  </div>
)}


      <div className="overflow-x-auto">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded bg-green-500 hover:bg-green-700 ml-auto"
        >
          Add Customer +
        </button>

        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                Fullname
              </th>
             
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                Mobile Number
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                Number Of Licenses 
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentCustomers.map((customer) => (
              <tr key={customer.customerId}>
                <td className="px-3 py-4 whitespace-nowrap">{customer.firstName} </td>
                <td className="px-3 py-4 whitespace-nowrap">{customer.mobileNumber}</td>
               


<td className="px-3 py-4 whitespace-nowrap">
  {customer.licenceDTOS && customer.licenceDTOS.length > 0 ? (
    <span 
    onClick={() => openLicenseModal(customer.licenceDTOS)}
    className="inline-flex items-center justify-center w-8 h-8 
    rounded-full bg-green-500 text-white text-sm font-bold">
      {customer.licenceDTOS.length}
    </span>
  ) : (
    <span 
    onClick={() => openLicenseModal(customer.licenceDTOS)}
    className="inline-flex items-center justify-center w-8 h-8 
    rounded-full bg-red-600 text-white text-sm font-bold">
     0
    </span>
  )}
</td>




                <td className="px-3 py-4 whitespace-nowrap">{customer.email}</td>
                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                     onClick={() => handleEditClick(customer)}
                  className="bg-indigo-100 text-indigo-600 hover:bg-indigo-200 px-3 mx-3 py-1 rounded-md">
                    Edit
                  </button>
                  <button 
                     onClick={() => handleDeleteCustomerById(customer.customerId)} 
                  className="bg-red-100 text-red-600 hover:bg-red-200 px-3 mx-3 py-1 rounded-md">
                    Delete
                  </button>
                    {/* Add the button to add a license */}
      <button
        onClick={() => handleAddLicenseClick(customer.customerId)} // Pass customer ID dynamically
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add License to Customer
      </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>







      {licenseModalVisible && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-bold mb-4">License Details</h2>
      <h2 className="text-xl font-bold mb-4">Customer Name :<h2 className="text-xl  mb-4">{customer.firstName} </h2> </h2>
      {currentCustomerLicenses.length > 0 ? (
        <ul className="space-y-2">
          {currentCustomerLicenses.map((license, index) => (
            <li key={license.licenseOfCustomerId || index} className="border p-2 rounded-md">
              <p>
                <strong>License Name:</strong> {license.licenseName}
              </p>
              <p>
                <strong>Status:</strong> {license.status}
              </p>
              <p>
                <strong>Issue Date:</strong> {license.issueDate || "Not Issued"}
              </p>
              <p>
                <strong>Expiry Date:</strong> {license.expiryDate || "No Expiry"}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No licenses found.</p>
      )}
      <div className="flex justify-end mt-4">
        <button
          onClick={closeLicenseModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


      {showEditModal && (
        <EditCustomerPopup
          customer={selectedCustomer}
          showModal={showEditModal}
          onClose={handleCloseEditModal}
          fetchCustomers={fetchCustomers}
        />
      )}
       {/* Show the AddLicenseModal */}
       <LicenseAddToCustomer
        customerId={selectedCustomerId}
        showModal={showAddLicenseModal}
        onClose={handleCloseModal}
      />

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
        >
          Previous
        </button>
        <span className="text-sm">Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminTable;
