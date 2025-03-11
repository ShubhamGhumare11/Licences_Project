// import React, { useState } from "react";
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { FaUsers, FaUserTimes, FaIdBadge } from "react-icons/fa";

// // Register Chart.js components
// ChartJS.register(ArcElement, Tooltip, Legend);

// const DashboardOverview = ({ available, unavailable, total, licenseData }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const data = {

//     datasets: [{
//       label: 'My First Dataset',
//       data: [300, 50, 100],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)'
//       ],
      
//       hoverOffset: 4
//     }]
//   };


//   return (
//     <div className="p-4 flex flex-col lg:flex-row gap-6">
//       {/* Cards Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full">
//         <div className="bg-green-500  text-white p-6 rounded-lg shadow-md text-center flex flex-col items-center hover:shadow-lg transition duration-300">
//           <FaUsers className="text-4xl mb-2" /> 25
//           <h3 className="text-lg font-semibold">Available Customers</h3>
//           <p className="text-2xl font-bold">{available}fesd</p>
//         </div>
//         <div className="bg-red-500 text-white p-6 rounded-lg shadow-md text-center flex flex-col items-center hover:shadow-lg transition duration-300">
//           <FaUserTimes className="text-4xl mb-2" />
//           <h3 className="text-lg font-semibold">Unavailable Customers</h3>
//           <p className="text-2xl font-bold">{unavailable}</p>
//         </div>
//         <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md text-center flex flex-col items-center hover:shadow-lg transition duration-300">
//           <FaIdBadge className="text-4xl mb-2" />
//           <h3 className="text-lg font-semibold">Total Licenses</h3>
//           <p className="text-2xl font-bold">{total}</p>
//         </div>

//         <div className=" text-white p-6 rounded-lg shadow-md text-center flex flex-col items-center hover:shadow-lg transition duration-300">

//         <Doughnut data={data}  />
//         </div>
//       </div>

//       {/* Donut Chart Section */}
//       {/* <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
//         <div className="relative w-64 h-64">
//           <Doughnut data={data} options={options} />
       

//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default DashboardOverview;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaUsers, FaUserTimes, FaIdBadge } from "react-icons/fa";
import api from "../../Utils/api1";
import CustomerManagement from "../../Components/CustomerManagement";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardOverview = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await api.get("/api/customer/getAllCustomerCount");
      if (response.data.code === "SUCCESS") {
        setData(response.data.data);
        setLoading(false);
      } else {
        console.error("Failed to fetch customers");
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
      setError("Failed to load data");
      setLoading(false);    }
  };

  // Show Loading State
  if (loading) return <div className="text-center py-10">Loading...</div>;

  // Show Error State
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  // Prepare Chart Data
  const chartData = {
    labels: ["ACTIVE", "PENDING", "RENEW"],  
    datasets: [
      {
        data: [data.ACTIVE, data.PENDING, data.RENEW],
        backgroundColor: ["#B771E5", "#A35C7A", "#A6CDC6"],
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="p-4 flex bg-slate-100 flex-col gap-6">
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        <div className="bg-pink-600 text-white p-6 rounded-lg shadow-md text-center flex flex-col items-center bg-gradient-to-r from-pink-400 to-pink-800 hover:from-pink-600 hover:to-pink-800">
          <FaUsers className="text-4xl mb-2" />
          <p className="text-3xl font-bold">{data.AVAILABLE}</p>
          <h3 className="text-lg font-semibold">Available Customers</h3>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-md text-center flex flex-col items-center bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-600">
          <FaUserTimes className="text-4xl mb-2" />
          <p className="text-3xl font-bold  ">{data.UNAVAILABLE}</p>

          <h3 className="text-lg font-semibold">Unavailable Customers</h3>
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md text-center flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-950 hover:from-blue-600 hover:purple-950">
          <FaIdBadge className="text-4xl mb-2" />
          <p className="text-3xl font-bold">{data["TOTAL License Of CUSTOMERS"]}</p>
          <h3 className="text-lg font-semibold">Licenses Delivered</h3>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center sm:w-72 h-48">
          <Doughnut data={chartData} options={chartOptions} />
        </div>
      </div> 




{/* 
<div class="container max-w-6xl px-5 mx-auto my-2">
        <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            <div class="p-5 bg-white rounded shadow-sm">
                <div class="flex items-center space-x-4">
                    <div>
                        <div class="flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-50 text-fuchsia-400">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3333 9.33334H28M28 9.33334V20M28 9.33334L17.3333 20L12 14.6667L4 22.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="text-gray-400">Total Sales</div>
                        <div class="text-2xl font-bold text-gray-900">$9850.90</div>
                    </div>
                </div>
            </div>
            <div class="p-5 bg-white rounded shadow-sm">
                <div class="flex items-center space-x-4">
                    <div>
                        <div class="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-50 text-cyan-400">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.52325 6.61231C10.2911 5.20443 12.4206 4.32434 14.6667 4.07333V17.3333H27.9267C27.6757 19.5794 26.7956 21.7089 25.3877 23.4767C23.9798 25.2446 22.1013 26.5791 19.9685 27.3265C17.8357 28.0739 15.5351 28.2039 13.3317 27.7015C11.1282 27.1991 9.11142 26.0847 7.51336 24.4866C5.91529 22.8886 4.80094 20.8718 4.29854 18.6683C3.79614 16.4649 3.92612 14.1643 4.67352 12.0315C5.42092 9.89866 6.75535 8.0202 8.52325 6.61231Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20 12H27.3173C26.7188 10.3128 25.7513 8.78047 24.4854 7.5146C23.2195 6.24873 21.6872 5.28125 20 4.68268V12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="text-gray-400">Net Revenue</div>
                        <div class="text-2xl font-bold text-gray-900">$7520.50</div>
                    </div>
                </div>
            </div>
            <div class="p-5 bg-white rounded shadow-sm">
                <div class="flex items-center space-x-4">
                    <div>
                        <div class="flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-400">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.7712 13.1046C20.7714 12.1044 21.3333 10.7478 21.3333 9.33333C21.3333 7.91885 20.7714 6.56229 19.7712 5.5621C18.771 4.5619 17.4145 4 16 4C14.5855 4 13.2289 4.5619 12.2288 5.5621C11.2286 6.56229 10.6667 7.91885 10.6667 9.33333C10.6667 10.7478 11.2286 12.1044 12.2288 13.1046C13.2289 14.1048 14.5855 14.6667 16 14.6667C17.4145 14.6667 18.771 14.1048 19.7712 13.1046Z" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.40033 21.4003C11.1507 19.65 13.5246 18.6667 16 18.6667C18.4753 18.6667 20.8493 19.65 22.5997 21.4003C24.35 23.1507 25.3333 25.5246 25.3333 28H6.66666C6.66666 25.5246 7.64999 23.1507 9.40033 21.4003Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="text-gray-400">Customers</div>
                        <div class="text-2xl font-bold text-gray-900">1375</div>
                    </div>
                </div>
            </div>
            <div class="p-5 bg-white rounded shadow-sm">
                <div class="flex items-center space-x-4">
                  
                <Doughnut data={chartData} options={chartOptions} />

                </div>
            </div>
        </div>
    </div> */}
      {/* CustomerManagement section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <CustomerManagement />
    </div>



      <div className="w-full flex justify-center">
        <div className="bg-slate-100 p-6 rounded-lg shadow-md flex justify-center items-center w-full ">
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
