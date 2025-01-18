import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
// import Home from "./Pages/Home";
import AdminSection from "./Pages/AdminSection";
import UserSection from "./Pages/UserSection";
import WhatsappChat from "./Components/WhatsappChat ";






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
        {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<AdminSection />} />
                <Route path="/user" element={<UserSection />} />

                <Route path="/whatsapp-chat" element={<WhatsappChat />} />



      

      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
