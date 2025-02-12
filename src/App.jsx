import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
// import AdminSection from "./Pages/AdminSection";
import CustomerManagement from "./Components/CustomerManagement";
import LicenseManagement from "./Components/LicenseManagement";

import UserSection from "./Pages/UserSection";
import WhatsappChat from "./Components/User/WhatsappChat ";
import CustomerLicenseListPopup from "./Components/User/CustomerLicenseListPopup";

import LicenseManager from "./Components/LicenseManager";
import LicenseDetail from "./Components/User/LicenseDetail";

import InterestedUserApplyForm from "./Components/User/InterestedUserApplyForm";

import Login from "./Components/Login";
import UserRegisterPopup from "./Components/UserRegisterPopup";
import UnAuthorize from "./Components/UnAuthorize";


import UserProfile from "./Components/UserProfile";

import RoleProtectedRoute from "./Components/RoleProtectedRoute ";
import { AuthProvider } from "./Utils/AuthContext"; // Import AuthProvider
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS globally
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<UserRegisterPopup mode="inline" />} />

          <Route path="/userprofile" element={<UserProfile />} />

          <Route path="/unauthorized" element={<UnAuthorize/>} />

          {/* Admin Routes */}
          {/* <Route path="/adminsection" element={<AdminSection />} />
        <Route path="/licensemanager" element={<LicenseManager />} /> */}

          <Route
            path="/licensemanager"
            element={
              <RoleProtectedRoute allowedRoles={["ADMIN"]}>
              <LicenseManager />
              </RoleProtectedRoute>
            }
          />

          <Route
            path="/licensemanagement"
            element={
              <RoleProtectedRoute allowedRoles={["ADMIN"]}>
              <LicenseManagement />
               </RoleProtectedRoute>
            }
          />
          
          <Route
            path="/customermanagement"
            element={
              <RoleProtectedRoute allowedRoles={["ADMIN"]}>
              <CustomerManagement/>
               </RoleProtectedRoute>
            }
          />



          {/* user routes */}
          <Route path="/" element={<UserSection />} />
          <Route
            path="/customerlicenselist"
            element={<CustomerLicenseListPopup/>}
          />
          <Route
            path="/licensedetail"
            element={<LicenseDetail/>}
          />
          <Route
            path="/interesteduserapplyform"
            element={<InterestedUserApplyForm />}
          />
          <Route path="/whatsapp-chat" element={<WhatsappChat />} />
        </Routes>

        <ToastContainer /> {/* ToastContainer should be here, or at the root of the app */}

        {/* <Footer /> */}
      </Router>
    </AuthProvider>
  );
}

export default App;
