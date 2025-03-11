import React, { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Utils/api1";
import { AuthContext } from "../../Utils/AuthContext";
import UserRegisterPopup from "../../Components/UserRegisterPopup"; // Import Popup Component

const LicenseGrid = () => {
  const [licenses, setLicenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext); // Get user from AuthContext
  const [showRegisterPopup, setShowRegisterPopup] = useState(false); // Control popup
  const [selectedLicense, setSelectedLicense] = useState(null); // Store selected license

  const navigate = useNavigate();

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        // Make the API request
        const response = await api.get("http://localhost:8080/api/licenseList/getLicenseList");

        // Log response for debugging
        console.log("Response: ", response.data);

        if (response.status === 200) {
          setLicenses(response.data.data || []);
        } else {
          setError("Failed to fetch licenses.");
        }
      } catch (error) {
        console.error("API Error: ", error);
       navigate("/login")
      } finally {
        setIsLoading(false);
      }
    };

    fetchLicenses(); // Call the function to fetch data
  }, []);

  // Loading state
  if (isLoading) {
    return   <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>;
  }

  // Error state
  if (error) {
    return <div className="text-center py-6 text-red-500">{error}</div>;
  }

  // Navigate to InterestedUserApplyForm and pass the selected license
  const   handleApply = (licenseName,validTill,images,description) => {
    console.log("Selected License: ", licenseName);
    // navigate("/interesteduserapplyform", { state: { interestedToApply: licenseName } });



    if (user) {
      // If user is logged in, navigate to InterestedUserApplyForm
      navigate("/licensedetail", { state: { licenseName:licenseName,validTill:validTill,images:images,description:description } });
    } else {
      // If user is not logged in, navigate to UserRegistration
      setSelectedLicense(licenseName);
      setShowRegisterPopup(true);    }
  };

  // Displaying available licenses
  return (
    <div className="p-6 bg-slate-100">
      <div className="max-w-3xl mx-auto text-center mt-16">
    
        <p className="text-lg text-gray-800 mb-8">Choose a license below to apply.</p>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {licenses.length > 0 ? (
          licenses.map((license, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-cyan-100 to-teal-500 text-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold text-center text-black">
                {license.licenseName || "Unknown License"}
              </h3>
              <button
                onClick={() => handleApply(license.licenseName)}
                className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-md text-sm focus:outline-none"
              >
                Apply
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-gray-500">No licenses available.</div>
        )}
      </div> */}





   {/* Services Grid */}

   {licenses.length > 0 ? (
   <div className="px-4  md:px-8 lg:px-16 py-8 font-serif">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {licenses.map((item, index) => (
              <div key={index} className="w-full max-w-sm bg-white border border-cyan-700 rounded-lg shadow-lg">
                <img
                  className="p-4 rounded-t-lg object-cover w-full h-52 md:h-56"
                  src={`data:image/jpeg;base64,${item.images}`}
                  alt="service image"
                />

                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate">
                      {item.licenseName}
                    </h5>
                  </a>
                  <h3 className="text-black mb-1 italic line-clamp-2 text-sm ">
                    {item.subTitle}
                  </h3>

               

                  {/* Pricing Section */}
                  <div className="flex items-center justify-between">
                    
                    <span className="text-xs text-slate-900">(Validity: {item.validTill} year)</span>
                  </div>
                  <div className="flex items-center justify-between">

                  <span className="text-sm  text-gray-900 tracking-tight  line-clamp-2">
                      {item.description}
                    </span>
                    </div>

                  {/* Button Section */}
                  <button
                onClick={() => handleApply(item.licenseName,item.validTill,item.images,item.description)}
                className=" bg-cyan-600 hover:bg-cyan-700flex items-center justify-center w-full rounded-lg  focus:ring-4 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center text-white mt-5"
              >
                Apply
              </button>


                </div>
              </div>
            
          ))}
        </div>
      </div>):(
          <div className="text-center py-6 text-gray-500">No licenses available.</div>
        )}

         {/* User Registration Popup */}
         {showRegisterPopup && (
        <UserRegisterPopup isOpen={showRegisterPopup} onClose={() => setShowRegisterPopup(false)} />
      )}
    </div>
  );
};

export default LicenseGrid;
