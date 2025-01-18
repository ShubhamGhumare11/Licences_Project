import React, { useState } from "react";

const AdminTable = () => {
  // Sample user array
  const users = [
    {
      id: 1,
      name: "Ravi Kumar",
      mobileNo: "987-654-3210",
      email: "ravi.kumar@example.com",
      address: "456 MG Road, Bangalore, Karnataka",
      status: "Active",
      role: "Admin",
      date: "2025-01-01",
    },
    {
      id: 2,
      name: "Anita Sharma",
      mobileNo: "123-456-7890",
      email: "anita.sharma@example.com",
      address: "89 NH Road, Delhi",
      status: "Inactive",
      role: "User",
      date: "2025-01-10",
    },
    {
      id: 3,
      name: "Vikram Singh",
      mobileNo: "999-888-7777",
      email: "vikram.singh@example.com",
      address: "1203 Rajiv Gandhi Nagar, Hyderabad, Telangana",
      status: "Active",
      role: "User",
      date: "2025-01-05",
    },
    {
      id: 4,
      name: "Priya Verma",
      mobileNo: "456-789-1234",
      email: "priya.verma@example.com",
      address: "78 New Friends Colony, Delhi",
      status: "Inprogress",
      role: "Admin",
      date: "2025-01-12",
    },
    {
      id: 5,
      name: "Amit Gupta",
      mobileNo: "777-555-4444",
      email: "amit.gupta@example.com",
      address: "30 Banjara Hills, Hyderabad, Telangana",
      status: "Active",
      role: "User",
      date: "2025-01-15",
    },
    {
      id: 6,
      name: "Neha Mehta",
      mobileNo: "222-333-4444",
      email: "neha.mehta@example.com",
      address: "74 Lajpat Nagar, Mumbai, Maharashtra",
      status: "Inactive",
      role: "User",
      date: "2025-01-20",
    },
  ];

  const [statusFilter, setStatusFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    mobileNo: "",
    email: "",
    address: "",
    status: "",
    date: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Filtered users based on status and search term
  const filteredUsers = users.filter(
    (user) =>
      (statusFilter ? user.status === statusFilter : true) &&
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const     handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User added successfully!");
    setShowModal(false);
  };

  return (
    <div className="bg-gray-100 p-5">
      <div className="flex justify-between mb-4">
        {/* Left side: Filters and Search */}
        <div className="flex space-x-1">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Filter by Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Inprogress">In Progress</option>
          </select>

          {/* Search Box */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or email"
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

    
      </div>

      {/* User Form Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New User</h2>
            <form onSubmit={handleSubmit}>
              {/* Form Fields */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Mobile No
                </label>
                <input
                  type="text"
                  name="mobileNo"
                  value={newUser.mobileNo}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  name="address"
                  value={newUser.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  name="status"
                  value={newUser.status}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Inprogress">In Progress</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={newUser.date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
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
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
      <div className="flex justify-between items-center mb-7 lg:mx-10 sm:mx-2">
    {/* Right side: Add User button */}
    <button
      onClick={() => setShowModal(true)}
      className="bg-blue-500 text-white px-4 py-2 rounded bg-green-500 hover:bg-green-700 ml-auto "
    >
      Add User +
    </button>
  </div>
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray- uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://i.pravatar.cc/150?img=${user.id}`}
                        alt={`${user.name}`}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.title}</div>
                  <div className="text-sm text-gray-500">{user.department}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : user.status === "Inactive"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2">
                  <a
                    href="#"
                    className="inline-block bg-indigo-100 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-900 px-3 py-1 rounded-md"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="inline-block bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-900 px-3 py-1 rounded-md"
                  >
                    Delete
                  </a>
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
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
        >
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
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
