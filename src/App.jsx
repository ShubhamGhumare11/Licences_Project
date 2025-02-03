import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import AdminSection from "./Pages/AdminSection";
import UserSection from "./Pages/UserSection";
import WhatsappChat from "./Components/User/WhatsappChat ";
import LicenseManager from "./Components/LicenseManager";
import InterestedUserApplyForm from "./Components/User/InterestedUserApplyForm";

import Login from "./Components/Login";
import UserProfile from "./Components/UserProfile";

import RoleProtectedRoute from "./Components/RoleProtectedRoute ";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/userprofile" element={<UserProfile />} />

        <Route path="/unauthorized" element={<h2>Access Denied</h2>} />






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
          path="/adminsection"
          element={
            <RoleProtectedRoute allowedRoles={["ADMIN"]}>
              <AdminSection />
            </RoleProtectedRoute>
          }
        />







        {/* user routes */}
        <Route path="/user" element={<UserSection />} />
        <Route
          path="/interesteduserapplyform"
          element={<InterestedUserApplyForm />}
        />
        <Route path="/whatsapp-chat" element={<WhatsappChat />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
