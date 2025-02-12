
import React, { useState, useEffect, useContext } from "react";
import api from "../../Utils/api1";
import { showToast } from "../../Utils/toastUtils";
import { AuthContext } from "../../Utils/AuthContext";
import { FaDownload } from "react-icons/fa"; // Import Download Icon

const LicenseManagement = () => {
  const [data, setData] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const { user } = useContext(AuthContext);
  const userEmail = user?.sub || "";

  useEffect(() => {
    fetchCustomers(userEmail);
  }, []);

  const fetchCustomers = async (email) => {
    try {
      const response = await api.get(
        "/api/licenseOfCustomerController/getByMailID",
        { params: { mailID: decodeURIComponent(email) } }
      );
      console.log("API Response:", response.data);
   

 
        const userData = response.data.data || [];
        setData(userData);
    

      
    } catch (error) {
      console.error("Error fetching customers:", error);
      showToast("Error fetching customers", "error");
    }
  };

  // Open image popup with multiple images
  const handleImageClick = (images) => {
    if (images.length > 0) {
      setSelectedImages(images);
      setCurrentImageIndex(0);
      setIsImagePopupOpen(true);
    }
  };
  const downloadImage = () => {
    const base64Image = selectedImages[currentImageIndex]; // Get current image
    const link = document.createElement("a");
    link.href = `data:image/jpeg;base64,${base64Image}`;
    link.download = `Document_${currentImageIndex + 1}.jpg`; // Image name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Navigate to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < selectedImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : selectedImages.length - 1
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Licenses : </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4">License Name</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Customer</th>
              <th className="py-2 px-4">Mobile Number</th>
              <th className="py-2 px-4">Images</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.licenseOfCustomerId} className="border-b">
                <td className="py-2 px-4">{item.licenseName}</td>
                <td className="py-2 px-4">{item.status}</td>
                <td className="py-2 px-4">
                  {`${item.customer.firstName} ${item.customer.lastName}`}
                </td>
                <td className="py-2 px-4">{item.customer.mobileNumber}</td>
                <td className="py-2 px-4">
                  {item.images.length > 0 && (
                    <button
                      onClick={() => handleImageClick(item.images)}
                      className="text-blue-500 underline"
                    >
                      View  ({item.images.length})
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Image Popup */}
      {isImagePopupOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
  onClick={() => setIsImagePopupOpen(false)}>
    <div className="bg-gray-300 p-4 rounded-lg shadow-lg w-[800px] h-[700px] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
    <div className="w-[650px] h-[500px] overflow-hidden flex justify-center items-center">

             <img
              src={`data:image/jpeg;base64,${selectedImages[currentImageIndex]}`}
              alt="License"
              className="max-w-lg max-h-96 mx-auto"
            />
    </div>
    <div className="flex justify-between mt-2 space-x-10">
  <button onClick={prevImage} className="bg-gray-400 text-black px-4 py-2 rounded-lg">
    Prev
  </button>
  <span className="text-sm font-bold">
    {currentImageIndex + 1} / {selectedImages.length}
  </span>
  <button onClick={nextImage} className="bg-gray-400 text-black px-4 py-2 rounded-lg">
    Next
  </button>
</div>



            <div className="flex justify-between mt-2">

            <button
  onClick={downloadImage}
  className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center"
>
  <FaDownload className="mr-2" /> Download
</button>

            {/* <button
              onClick={() => setIsImagePopupOpen(false)}
              className="ml-10 mt-2 bg-gray-800 text-white px-4 py-2 rounded-lg w-full"
            >
              Close
            </button> */}
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LicenseManagement;
