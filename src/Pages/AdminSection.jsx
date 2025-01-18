import React from "react";
// import { motion } from "framer-motion";
import AdminChart from "../Components/AdminChart";
import AdminTable from "../Components/AdminTable";



const AdminSection = () => {
  return (
    <div>
    

      {/* <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, delay: 1 }} // Added delay for staggered effect
      >
        <ServicesCard />
      </motion.div> */}
      
        <AdminChart />
        <AdminTable />


     
    </div>
  );
};

export default AdminSection;
