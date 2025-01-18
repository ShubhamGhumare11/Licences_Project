import React from "react";
import { Link } from "react-router-dom";

const licenses = [
  "Trade License",
  "Shop and Establishment License",
  "FSSAI License",
  "GST Registration",
  "Import/Export License",
  "Fire License",
  "Permanent Driving License",
  "Learner’s License",
  "Commercial Driving License",
  "International Driving Permit",
  "Brewery License",
  "Retail Liquor License",
  "Club License",
  "Medical License",
  "Legal License",
  "Engineering License",
  "Pharmacy License",
  "Patent License",
  "Trademark License",
  "Copyright License",
  "Income Tax PAN",
  "Service Tax Registration",
  "Professional Tax License",
  "Pollution Control License",
  "Biomedical Waste License",
  "Forest and Wildlife Licenses",
  "Building Approval License",
  "RERA License",
  "Land Conversion License",
  "Cinema and Theater License",
  "Music and Dance License",
  "Import-Export Code (IEC)",
  "Private Security Agency License",
  "Gun License",
  "Recognition by the Government (Educational License)",
  "Rent Control License",
];

const LicenseGrid = () => {
  return (
    <div className="p-6">
       <div class="max-w-3xl mx-auto text-center mt-16">
    <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Apply For Licence</span>
        <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
    </h1>
    <p class="text-lg text-gray-800 mb-8"></p>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {licenses.map((license, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-cyan-100 to-teal-500 text-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-lg font-semibold text-center text-black">{license}</h3>
            <Link to="/whatsapp-chat">
              <button className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-md text-sm focus:outline-none">
                Apply
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LicenseGrid;
