import React, { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Utils/api1";
import { AuthContext } from "../../Utils/AuthContext";
import UserRegisterPopup from "../../Components/UserRegisterPopup"; // Import Popup Component

    import { Link } from "react-router-dom";

    import heroimg from "../../Images/herosection.jpg";
    import {
        FaUserGraduate,
        FaAward,
        FaMicroscope,
        FaServicestack,
        FaStar,
        FaChalkboardTeacher,
        FaUser,
        FaAccusoft,
      } from "react-icons/fa";

    const UserSection = () => {



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

      return (
        <>
          {/* **********Hero Section************ */}
          <main
            className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-8 sm:mt-2 mt-4 bg-gradient-to-r from-cyan-700 to-red-100"
            // style={{
            //     // backgroundImage: `url(${heroimg})`, // Use the imported image here
            //     // background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(255, 165, 0, 0.7))', // Adjust the colors and direction as needed

            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center'
            // }}
          >
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              class="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
            >
              Inspired by the amazing
              <span class="font-semibold">restorePhotos</span> app
            </a>
            <h1 class="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
              Make your photos
              <span class="relative whitespace-nowrap text-orange-400">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  class="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span class="relative">Pop</span>
              </span>
            </h1>
            <p class="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
              Want to style up your photos? Maybe get that perfect LinkedIn
              headshot? Let our AI do its magic and replace your background with
              your color of choice. 100% free – pop your photos today.
            </p>
            <a
              class="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
              href="#"
            >
              Pop your photos →
            </a>
          </main>
          {/* **********Hero Section End************ */}


{/**********************Featured On Start*****************************/}














          {/* Stats Section Start */}
          <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="relative p-6 md:p-16">
              <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                  <h2 class="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
                    Fully customizable rules to match your unique needs
                  </h2>

                  <nav
                    class="grid gap-4 mt-5 md:mt-10"
                    aria-label="Tabs"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      type="button"
                      class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active"
                      id="tabs-with-card-item-1"
                      aria-selected="true"
                      data-hs-tab="#tabs-with-card-1"
                      aria-controls="tabs-with-card-1"
                      role="tab"
                    >
                      <span class="flex gap-x-6">
                        <svg
                          class="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                        </svg>
                        <span class="grow">
                          <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                            Advanced tools
                          </span>
                          <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                            Use Preline thoroughly thought and automated
                            libraries to manage your businesses.
                          </span>
                        </span>
                      </span>
                    </button>

                    <button
                      type="button"
                      class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      id="tabs-with-card-item-2"
                      aria-selected="false"
                      data-hs-tab="#tabs-with-card-2"
                      aria-controls="tabs-with-card-2"
                      role="tab"
                    >
                      <span class="flex gap-x-6">
                        <svg
                          class="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m12 14 4-4" />
                          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                        </svg>
                        <span class="grow">
                          <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                            Smart dashboards
                          </span>
                          <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                            Quickly Preline sample components, copy-paste codes,
                            and start right off.
                          </span>
                        </span>
                      </span>
                    </button>

                    <button
                      type="button"
                      class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      id="tabs-with-card-item-3"
                      aria-selected="false"
                      data-hs-tab="#tabs-with-card-3"
                      aria-controls="tabs-with-card-3"
                      role="tab"
                    >
                      <span class="flex gap-x-6">
                        <svg
                          class="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                          <path d="M5 3v4" />
                          <path d="M19 17v4" />
                          <path d="M3 5h4" />
                          <path d="M17 19h4" />
                        </svg>
                        <span class="grow">
                          <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                            Powerful features
                          </span>
                          <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                            Reduce time and effort on building modern look
                            design with Preline only.
                          </span>
                        </span>
                      </span>
                    </button>
                  </nav>
                </div>

                <div class="lg:col-span-6">
                  <div class="relative">
                    <div>
                      <div
                        id="tabs-with-card-1"
                        role="tabpanel"
                        aria-labelledby="tabs-with-card-item-1"
                      >
                        <img
                          class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                          src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                          alt="Features Image"
                        />
                      </div>

                      <div
                        id="tabs-with-card-2"
                        class="hidden"
                        role="tabpanel"
                        aria-labelledby="tabs-with-card-item-2"
                      >
                        <img
                          class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                          src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                          alt="Features Image"
                        />
                      </div>

                      <div
                        id="tabs-with-card-3"
                        class="hidden"
                        role="tabpanel"
                        aria-labelledby="tabs-with-card-item-3"
                      >
                        <img
                          class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                          src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                          alt="Features Image"
                        />
                      </div>
                    </div>
                    <div class="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                      <svg
                        class="w-16 h-auto text-orange-500"
                        width="121"
                        height="135"
                        viewBox="0 0 121 135"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                          stroke="currentColor"
                          stroke-width="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                          stroke="currentColor"
                          stroke-width="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                          stroke="currentColor"
                          stroke-width="10"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div class="absolute inset-0 grid grid-cols-12 size-full">
                <div class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
              </div>
            </div>
          </div>
          {/* Stats Section End */}
          {/* ********Why Choose Us Start******** */}
          <section className="py-8 bg-white text-black font-serif">
            <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl text-center">
              <h2 className="text-4xl font-bold text-cyan-800">
                Why Choose Us
              </h2>
              <p className="mt-4 text-lg text-amber-900">
                Our experts are here to guide you with personalized advice,
                ensuring compliance while saving you time and effort.
              </p>
            </div>
            <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {[
                {
                  title: "Better Solution",
                  description:
                    "We offer comprehensive solutions for product certification and regulatory compliance, tailored for your unique needs.",
                  icon: <FaUserGraduate className="text-cyan-300 w-10 h-10" />,
                  additionalInfo: "",
                },
                {
                  title: "Quality Advice",
                  description:
                    "To provide quality advice about regulatory compliance requirements for products.",
                  icon: <FaAward className="text-cyan-300 w-10 h-10" />,
                  additionalInfo: "",
                },

                {
                  title: "Fast Services",
                  description:
                    "Our team is dedicated to providing quick and efficient services, ensuring you meet your goals on time.",
                  icon: <FaServicestack className="text-cyan-300 w-10 h-10" />,
                  additionalInfo: "",
                },
                {
                  title: "Cost Effective",
                  description:
                    "Our services are not only top-notch but also budget-friendly, ensuring value for your money.",
                  icon: <FaStar className="text-cyan-300 w-10 h-10" />,
                  additionalInfo: "",
                },

                {
                  title: "Customer focus",
                  description:
                    "The company understands the customer's needs and brand .",
                  icon: <FaUser className="text-cyan-300 w-10 h-10" />,
                  additionalInfo: "",
                },
                {
                  title: "Sustainable Success",
                  description:
                    "We apply co-creation methodologies. The resulting ownership is a sound basis for sustainable success.",
                  icon: <FaAccusoft className="text-cyan-300 w-10 h-10" />,
                  additionalInfo: "",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white text-black rounded-lg shadow-lg"
                >
                  {item.icon}
                  <h3 className="text-2xl font-semibold mt-4 text-cyan-800">
                    {item.title}
                  </h3>
                  <p className="text-center mt-2">{item.description}</p>
                  <p className="text-sm mt-2 text-customBrown">
                    {item.additionalInfo}
                  </p>
                </div>
              ))}
            </div>
            <div className="container mx-auto text-center mt-12">
              <Link
                to="/contact"
                className="px-8 py-3 bg-cyan-800 text-white font-semibold rounded hover:bg-customBrown transition duration-300"
              >
                Contact
              </Link>
            </div>
          </section>
          {/* ********Why Choose Us End******** */}

          {/* ********Our Services Start************* */}
          <div className="p-6 bg-slate-100 font-serif">
            <div className="flex flex-col text-center w-full mb-2 md:mb-1">
              <h2 className="text-4xl font-bold text-cyan-700 font-serif">
                Explore Our Services
              </h2>
              <p className="mt-4 text-lg text-amber-800">
                Choose a License Below to Apply.
              </p>
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
                    <div
                      key={index}
                      className="w-full max-w-sm bg-white border border-cyan-700 rounded-lg shadow-lg"
                    >
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
                          <span className="text-xs text-slate-900">
                            (Validity: {item.validTill} year)
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm  text-gray-900 tracking-tight  line-clamp-2">
                            {item.description}
                          </span>
                        </div>

                        {/* Button Section */}
                        <button
                          onClick={() =>
                            handleApply(
                              item.licenseName,
                              item.validTill,
                              item.images,
                              item.description
                            )
                          }
                          className=" bg-cyan-600 hover:bg-cyan-700flex items-center justify-center w-full rounded-lg  focus:ring-4 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center text-white mt-5"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-6 text-gray-500">
                No licenses available.
              </div>
            )}

            {/* User Registration Popup */}
            {showRegisterPopup && (
              <UserRegisterPopup
                isOpen={showRegisterPopup}
                onClose={() => setShowRegisterPopup(false)}
              />
            )}
          </div>

          {/* ********************************************* */}

          <div class="body-font bg-gradient-to-r from-cyan-500 to-red-300 text-white py-12 font-serif">
            <div class="container mx-auto text-center px-4">
              <h2 class="text-lg md:text-3xl font-bold mb-4">Find us on</h2>
              <p class="mb-8 text-sm md:text-base">
                Auspicious Numerology has a strong community of 10Mn+ followers
                across all popular social media.
              </p>
              <div class="flex justify-center flex-wrap gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                <a
                  href="https://www.youtube.com/@AuspiciousNumerology"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex flex-col items-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    class="text-3xl md:text-4xl"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                  <p class="mt-2 text-xs md:text-sm">YouTube</p>
                </a>
                <a
                  href="https://www.instagram.com/auspicious_numerology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex flex-col items-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="text-3xl md:text-4xl"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                  <p class="mt-2 text-xs md:text-sm">Instagram</p>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex flex-col items-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="text-3xl md:text-4xl"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                  <p class="mt-2 text-xs md:text-sm">Twitter</p>
                </a>
                <a
                  href="https://www.facebook.com/AuspiciousNumerology"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex flex-col items-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="text-3xl md:text-4xl"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                  </svg>
                  <p class="mt-2 text-xs md:text-sm">Facebook</p>
                </a>
              </div>
            </div>
          </div>
        </>
      );
    };
    
    export default UserSection;
    