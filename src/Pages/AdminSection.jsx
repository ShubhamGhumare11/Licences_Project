// import React from "react";
// // import { motion } from "framer-motion";
// import AdminChart from "../Components/AdminChart";
// import CutomerManagement from "../Components/CutomerManagement";



// const AdminSection = () => {
//   return (
//     <div>
    

//       {/* <motion.div
//         whileInView={{ opacity: 1, scale: 1 }}
//         initial={{ opacity: 0, scale: 0.8 }}
//         transition={{ duration: 0.8, delay: 1 }} // Added delay for staggered effect
//       >
//         <ServicesCard />
//       </motion.div> */}
      
//         <AdminChart />
//         <CutomerManagement />


     
//     </div>
//   );
// };

// export default AdminSection;
import React, { useState } from "react";
// import AdminChart from "../Components/AdminChart";
import LicenseManagement from "../Components/LicenseManagement";

import CutomerManagement from "../Components/CustomerManagement";

const AdminSection = () => {
  const [activeTab, setActiveTab] = useState("customer");

  return (
    <div className="p-4">
      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("customer")}
          className={`w-48 px-6 py-3 text-lg font-medium rounded-md transition-all duration-300 ${
            activeTab === "customer"
              ? "bg-purple-800 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Customer Management
        </button>
        <button
          onClick={() => setActiveTab("license")}
          className={`w-48 px-6 py-3 text-lg font-medium rounded-md transition-all duration-300 ${
            activeTab === "license"
              ? "bg-purple-800 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          License Management
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6 border rounded-md bg-gray-50 shadow-md">
        {/* {activeTab === "license" && <AdminChart />} */}
        {activeTab === "license" && <LicenseManagement />}

        {activeTab === "customer" && <CutomerManagement />}
      </div>
    </div>
  );
};

export default AdminSection;
