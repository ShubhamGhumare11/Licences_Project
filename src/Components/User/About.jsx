
//   import React from "react";
// // import herosection from "../Image/herosection.jpg";
// import { Link } from "react-router-dom";
// // import Chatbot from "./Chatbot";

// const About = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       {/* <Chatbot /> */}

//       <div className="relative w-full h-[420px] flex items-center">
//         {/* <Chatbot /> */}
//         <img
//           // src={herosection}
//           className="absolute inset-0 w-full h-full object-cover"
//           alt="Background"
//           loading="lazy"
//         />
//         <div className="relative z-10 flex flex-col items-start justify-start md:justify-center h-full text-left text-white px-8 md:px-16 lg:px-24 pt-8 md:pb-20 font-serif">
//           <h1 className="text-3xl md:text-2xl lg:text-5xl font-bold mb-4 md:mb-6 leading-snug">
//             <span className="block text-cyan-500 mb-2">
//               Get To Know Us
//             </span>
//            </h1>
//           {/* <div className="mt-1 mr-1">
//             <Link to="/services" className="px-8 py-4 border text-sm md:text-base font-semibold rounded-full hover:bg-amber-400 hover:text-black transition duration-300">
//               Explore Services &rarr;
//             </Link>
//           </div> */}
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row items-center mt-4 md:mt-8 px-4 md:px-8 lg:px-12  ">
//         <div className="flex-1 p-4 sm:p-6 md:p-10 lg:p-12 mb-10 font-serif">
//           <h2 className="text-md md:text-xl lg:text-3xl font-bold text-cyan-600">
//             My Story
//           </h2>
//           <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl mx-auto p-2">
//           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//           </p>
//         </div>
//         <div className="flex-1 mb-4 md:mb-0">
//           <div className="relative w-full max-w-xl mx-auto border-4 border-cyan-600 rounded-lg shadow-xl overflow-hidden">
//             <a
//               href="https://www.youtube.com/watch?v=BIjhjGjDc14"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block w-full h-full"
//             >
//               <div className="relative w-full h-60 md:h-72 lg:h-80 bg-gray-200 rounded-lg overflow-hidden">
//                 <iframe
//                   className="w-full h-full object-cover"
//                   src="https://www.youtube.com/embed/BIjhjGjDc14"
//                   title="YouTube video player"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Scientific Numerology Section */}
//       <div className="relative w-full h-full flex items-center">
//         <div className="relative z-10 flex flex-col items-start justify-center h-full text-left  px-6 md:px-16 lg:px-24 pb-10 sm:pb-2 md:pd-4 font-serif">
//           <h1 className="text-md md:text-xl lg:text-3xl font-bold ml-2 leading-snug">
//             <span className="block  mb-2 text-cyan-600">
//               Scientific Numerology
//             </span>
//           </h1>
//           <p className="md:text-md lg:text-lg leading-relaxed  p-2">
//           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//           </p>
//           <p className="text-md sm:text-sm md:text-base tracking-wide mb-4">
//             {/* Content goes here */}
//           </p>
//         </div>
//       </div>

//       {/* Predictions Numerology Section */}
//       <div className="relative w-full h-full flex items-start">
//         {/* Content Section */}
//         <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6 md:px-16 lg:px-24 pb-10 sm:pb-2 md:pb-4 font-serif w-full md:w-2/3 lg:w-3/4">
//           <h1 className="text-md md:text-xl lg:text-3xl font-bold ml-2 leading-snug">
//             <span className="block mb-2 text-cyan-600">
//               Expert Predictions
//             </span>
//           </h1>
//           <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl p-2">
//             <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl p-2">
//               Dr. Messhram’s predictions have garnered media attention, with some of his most striking forecasts making headlines. His accurate predictions for the 2011 Cricket World Cup and 2012 T-20 World Cup, published in Marathi newspapers, cemented his reputation as a trusted voice in the feild.
//               <span className="block mb-2">
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//               </span>
//             </p>
//             <span className="block mb-2">
//               • Highlight predictions related to marriage, politics, elections,
//               business, and various life aspects
//             </span>
//             <span className="block mb-2">
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem acce quam eum fugiat quo voluptas nulla pariatur?""
//             </span>
//             <span className="block mb-2">
//               • Mention the prediction accuracy for the T-20 World Cup 2014
//               featured in "NAVA-BHARAT."
//             </span>
//             <span className="block mb-2">
//               • 2023 Predictions Come True: A Year of Surprises and
//               Confirmations!
//             </span>
//           </p>
//           <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl p-2">
//           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"          </p>
//         </div>
//       </div>

//       {/*Client  Section*/}
//       <div className="relative w-full h-full flex items-center">
//         <div className="relative z-10 flex flex-col items-start justify-center h-full text-left  px-6 md:px-16 lg:px-24 pb-10 sm:pb-2 md:pd-4 font-serif">
//           <h1 className="text-md md:text-xl lg:text-3xl font-bold ml-2 leading-snug">
//             <span className="block  mb-2 text-cyan-600">
//               Notable Clients: Trusted by the Best
//             </span>
//           </h1>
//           <p className="md:text-md lg:text-lg leading-relaxed p-2">
//           </p>
//           <p className="md:text-md lg:text-lg leading-relaxed p-2">
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"            <span className="block mb-2">
//               Renowned figures in Indian politics, such as Mrs. Surekhatai Thakre, Santosh Mahatme and Suresh Deshmukh, have also sought his counsel, alongside many other politicians.
//             </span>
//             <span className="block mb-2">
//             </span>

//           </p>
//         </div>
//       </div>

//       {/*       <section className="text-gray-600 body-font bg-gradient-to-r from-yellow-500 to-amber-950 py-3">
//         <div className="container px-6 py-10 mx-auto font-serif">
//           <div className="flex flex-wrap justify-center text-center">
//             <div className="p-4 w-full sm:w-1/4">
//               <div className="flex flex-col items-center justify-center">
//                 <CountUp target={2700} duration={1000} />
//                 <p className="leading-relaxed text-gray-200 text-lg font-semibold">
//                   Users
//                 </p>
//               </div>
//             </div>
//             <div className="p-4 w-full sm:w-1/4">
//               <div className="flex flex-col items-center justify-center">
//                 <CountUp target={248} duration={1000} />
//                 <p className="leading-relaxed text-gray-200 text-lg font-semibold">
//                   Subscribers
//                 </p>
//               </div>
//             </div>
//             <div className="p-4 w-full sm:w-1/4">
//               <div className="flex flex-col items-center justify-center">
//                 <CountUp target={35} duration={1000} />
//                 <p className="leading-relaxed text-gray-200 text-lg font-semibold">
//                   Downloads
//                 </p>
//               </div>
//             </div>
//             <div className="p-4 w-full sm:w-1/4">
//               <div className="flex flex-col items-center justify-center">
//                 <CountUp target={4} duration={1000} />
//                 <p className="leading-relaxed text-gray-200 text-lg font-semibold">
//                   Products
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/*Beyond Numerology Section*/}
//       <div className="relative w-full h-full flex items-center pt-5">
//         <div className="relative z-10 flex flex-col items-start justify-center h-full text-left  px-6 md:px-16 lg:px-24 pb-10 sm:pb-2 md:pd-4 font-serif">
//           <h1 className="text-md md:text-xl lg:text-3xl font-bold ml-2 leading-snug">
//             <span className="block  mb-2 text-cyan-600">
//               Beyond Numerology: More than just Numbers
//             </span>
//           </h1>
//           <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl p-2">
//           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//           </p>
//           <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl p-2">
//             Dr. Messhram's talents extend far beyond numerology. A poet, skilled sportsperson, and experienced sports physio, he has worked with elite teams in high-profile events, including the Legends League Cricket, ICC World Cricket League, BCCI domestic, and IPL.
//           </p>
//         </div>
//       </div>

//       {/*Media Section*/}
//       <div className="relative w-full h-full flex items-center ">
//         <div className="relative z-10 flex flex-col items-start justify-center h-full text-left  px-6 md:px-16 lg:px-24 pb-10 sm:pb-2 md:pd-4 font-serif">
//           <h1 className="text-md md:text-xl lg:text-3xl font-bold ml-2 leading-snug">
//             <span className="block  mb-2 text-cyan-600">In the Media</span>
//           </h1>
//           <p className="md:text-md lg:text-lg leading-relaxed  p-2">
//             <span className="block mb-2">
//               • Showcase the media coverage, including articles in "LOKSHAHI
//               VARTA," "LOKMAT," and "NAVA-BHARAT.
//             </span>
//             <span className="block mb-2">
//               • Mention the exclusive interview on radio_mgiri 90.4 in December
//               2013.
//             </span>
//             <span className="block mb-2">
//               • Radio Wardha 90.8 and few podcasts providing listeners with unique insights.
//             </span>
//             <span className="block mb-2">
//               • A seasoned cricketer, Dr. Messhram has proudly represented his college, district, and zone.
//             </span>
//           </p>
//         </div>
//       </div>

//       {/*Consultation Section*/}
//       <div className="relative w-full h-full flex items-center bg-gradient-to-r p-5 from-amber-950 to-red-600">
//         <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6 md:px-16 lg:px-24 pb-10 sm:pb-4 md:pb-6 font-serif">
//           <h1 className="text-md md:text-xl lg:text-4xl font-bold text-white leading-tight mb-4">
//             <span className="block mb-2 text-yellow-300">
//               Experience the Magic of Numerology
//             </span>
//           </h1>
//           <p className="md:text-md lg:text-lg leading-relaxed text-white mb-6">
//             <span className="block mb-4">
//               "Are you ready to transform your life? Dr. Sumiit Messhram invites
//               you to explore the power of numerology and unlock the potential
//               for positive change."
//             </span>
//           </p>
//           <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <Link
//               to="/contact"
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105"
//             >
//               Get Your Consultation
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default About;





import React from "react";
import herosection from "../../Images/herosection.jpg";
import mission from "../../Images/mission1.png";
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
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Import the icon

const About = () => {


  const whyUsData = [
    { title: "Better Solution", description: "We offer comprehensive solutions for product certification and regulatory compliance, tailored for your unique needs." },
    { title: "Quality Advice", description: "To provide quality advice about regulatory compliance requirements for products." },
    { title: "Fast Services", description: "Our team is dedicated to providing quick and efficient services, ensuring you meet your goals on time." },
    { title: "Cost Effective", description: "Our services are not only top-notch but also budget-friendly, ensuring value for your money." },
    { title: "Better Quality Services", description: "Quality is at the heart of everything we do, and our services reflect our commitment to excellence." },
    { title: "Value For Money", description: "With us, you get exceptional services that provide real value for your investment." },
   
  ];


  return (
    <div className="flex flex-col min-h-screen bg-white">

      <div className="relative w-full h-[420px] flex items-center">
        <img
          src={herosection}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          loading="lazy"
        />
        <div className="relative z-10 flex flex-col items-start justify-start md:justify-center h-full text-left text-white px-8 md:px-16 lg:px-24 pt-8 md:pb-20 font-serif">
          <h1 className="text-3xl md:text-2xl lg:text-5xl font-bold mb-4 md:mb-6 leading-snug">
            <span className="block text-cyan-800 mb-2">
              Get To Know Us
            </span>
           </h1>
          {/* <div className="mt-1 mr-1">
            <Link to="/services" className="px-8 py-4 border text-sm md:text-base font-semibold rounded-full hover:bg-amber-400 hover:text-black transition duration-300">
              Explore Services &rarr;
            </Link>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-4 md:mt-8 px-4 md:px-8 lg:px-12">
  {/* Text Section */}
  <div className="flex-1 p-4 sm:p-6 md:p-10 lg:p-12 mb-10 font-serif">
    <h2 className="text-md md:text-5xl lg:text-5xl font-bold text-cyan-600">
      Our Mission
    </h2>
    <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl mx-auto p-2">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
      officia deserunt mollitia animi, id est laborum et dolorum fuga.We are committed to building a fair, transparent, sustainable and performance driven company for the long-term. We believe the destiny of all businesses is decided purely by its customers.
      We believe when customers find value in the products and services offered by a business, a business would thrive. When customers do not find value in a business, a business would shut down. It is that simple. So, we place enormous importance on building value for our customers.
    </p>


    <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl mx-auto p-2">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
      officia deserunt mollitia animi, id est laborum et dolorum fuga.We are committed to building a fair, transparent, sustainable and performance driven company for the long-term. We believe the destiny of all businesses is decided purely by its customers.
      We believe when customers find value in the products and services offered by a business, a business would thrive. When customers do not find value in a business, a business would shut down. It is that simple. So, we place enormous importance on building value for our customers.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-1 mb-4 md:mb-0">
    <div className="relative w-full max-w-xl mx-auto   overflow-hidden">
      <a
        href="https://www.youtube.com/watch?v=BIjhjGjDc14"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        {/* Responsive Image */}
        <img 
          src={mission}// Replace with your actual image
          alt="Our Mission"
          className="w-full h-auto max-h-[400px] md:max-h-[800px] object-cover rounded-lg"
        />
      </a>
    </div>
  </div>
</div>

{/* ********Why Choose Us Start******** */}
<section className="py-8 bg-white text-black font-serif">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-cyan-800">
        Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-amber-900">
          Our experts are here to guide you with personalized advice, ensuring compliance while saving you time and effort.
          </p>
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {[
            {
              title: "Better Solution",
              description:
                "We offer comprehensive solutions for product certification and regulatory compliance, tailored for your unique needs.",
              icon: <FaUserGraduate className="text-cyan-300 w-10 h-10" />,
              additionalInfo:
                "",
            },
            {
              title: "Quality Advice",
              description:
              "To provide quality advice about regulatory compliance requirements for products.",
              icon: <FaAward className="text-cyan-300 w-10 h-10" />,
              additionalInfo:
                  ""
            },
         
            {
              title: "Fast Services",
              description:
                "Our team is dedicated to providing quick and efficient services, ensuring you meet your goals on time.",
              icon: (
                <FaServicestack className="text-cyan-300 w-10 h-10" />
              ),
              additionalInfo:
                "",
            },
            {
              title: "Cost Effective",
              description:
                "Our services are not only top-notch but also budget-friendly, ensuring value for your money.",
              icon: <FaStar className="text-cyan-300 w-10 h-10" />,
              additionalInfo:
                "",
            },

            {
              title: "Customer focus",
              description:
                "The company understands the customer's needs and brand .",
              icon: <FaUser className="text-cyan-300 w-10 h-10" />,
              additionalInfo:
                "",
            },   {
              title: "Sustainable Success",
              description:
                "We apply co-creation methodologies. The resulting ownership is a sound basis for sustainable success.",
              icon: <FaAccusoft className="text-cyan-300 w-10 h-10" />,
              additionalInfo:
                "",
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





{/* *****************Happy clients****** */}
<div class="overflow-hidden my-4 font-serif">
  <div class="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-4 lg:py-8 mx-auto bg-gray-100">
    <div class="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
      <h2 className="text-md md:text-5xl lg:text-5xl font-bold text-center py-2  text-cyan-600">
      Our Happy Client Say      </h2>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="flex h-auto">
        <div class="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
          <div class="flex-auto p-4 md:p-6">
            <p class="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
              " With Preline, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience. "
            </p>
          </div>

          <div class="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
            <div class="flex items-center gap-x-3">
              <div class="shrink-0">
                <img class="size-8 sm:size-11.5 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar"/>
              </div>

              <div class="grow">
                <p class="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                  Josh Tyson
                </p>
                <p class="text-xs text-gray-500 dark:text-neutral-400">
                  Product Manager | Capsule
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex h-auto">
        <div class="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
          <div class="flex-auto p-4 md:p-6">
            <p class="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
              " In September, I will be using this theme for 2 years. I went through multiple updates and changes and I'm very glad to see the consistency and effort made by the team. "
            </p>
          </div>

          <div class="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
            <div class="flex items-center gap-x-3">
              <div class="shrink-0">
                <img class="size-8 sm:size-11.5 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar"/>
              </div>

              <div class="grow">
                <p class="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                  Luisa
                </p>
                <p class="text-xs text-gray-500 dark:text-neutral-400">
                  Senior Director of Operations | Fitbit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex h-auto">
        <div class="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
          <div class="flex-auto p-4 md:p-6">
            <p class="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
              " Refreshing and Thought provoking design and it changes my view about how I design the websites. Great typography, modern clean white design, nice tones of the color. "
            </p>
          </div>

          <div class="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
            <div class="flex items-center gap-x-3">
              <div class="shrink-0">
                <img class="size-8 sm:size-11.5 rounded-full" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Avatar"/>
              </div>

              <div class="grow">
                <p class="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                  Alisa Williams
                </p>
                <p class="text-xs text-gray-500 dark:text-neutral-400">
                  Entrepreneur | Happy customer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
      <div>
 
      </div>

      <div>
        {/* <h4 class="text-lg sm:text-xl font-semibold text-white">Startup businesses</h4>
        <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-red-400">2,000+</p>
        <p class="mt-1 text-gray-400">partner with Preline</p> */}
      </div>

      <div>
        {/* <h4 class="text-lg sm:text-xl font-semibold text-white">Happy customer</h4>
        <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-red-400">85%</p>
        <p class="mt-1 text-gray-400">this year alone</p> */}
      </div>
    </div>

    <div class="absolute bottom-0 end-0 transform lg:translate-x-32" aria-hidden="true">
      <svg class="w-40 h-auto sm:w-72" width="1115" height="636" viewBox="0 0 1115 636" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z" fill="currentColor" class="fill-orange-500"/>
        <path d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z" fill="currentColor" class="fill-cyan-500"/>
        <path d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z" fill="currentColor" class="fill-white"/>
      </svg>
    </div>
  </div>
</div>
{/* *************** */}



{/* ***************************************************** */}
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto font-serif">
  <div class="grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-8">
    <div>
      <h4 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">Licenses Issued</h4>
      <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-red-400">2,500</p>
      <p class="mt-1 text-gray-500 dark:text-neutral-500">licenses granted this quarter</p>
    </div>

    <div>
      <h4 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">Customer Satisfaction</h4>
      <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-red-400">98%</p>
      <p class="mt-1 text-gray-500 dark:text-neutral-500">of customers rated us highly</p>
    </div>


    <div>
      <h4 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">Renewals Processed</h4>
      <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-red-400">1,200</p>
      <p class="mt-1 text-gray-500 dark:text-neutral-500">renewals completed successfully</p>
    </div>

   

    <div>
      <h4 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">Feedback Received</h4>
      <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-red-400">500+</p>
      <p class="mt-1 text-gray-500 dark:text-neutral-500">feedback forms submitted</p>
    </div>
  </div>
</div>
    



      {/*Consultation Section*/}
      <div className="relative w-full h-full flex items-center bg-gradient-to-r p-5 from-cyan-800 to-red-300">
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6 md:px-16 lg:px-24 pb-10 sm:pb-4 md:pb-6 font-serif">
          <h1 className="text-md md:text-4xl lg:text-4xl font-bold text-white leading-tight mb-4">
            <span className="block mb-2 text-amber-400">
            We Provide Free Consultation ,
            </span>
          </h1>
          <p className="md:text-md lg:text-lg leading-relaxed text-white mb-6">
            <span className="block mb-4">
            We understand that navigating through licensing and regulatory requirements can be challenging. That’s why we offer a free consultation to help you understand the process and find the best solutions for your needs. Our experts are here to guide you with personalized advice, ensuring compliance while saving you time and effort.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105"
            >
              Get Your Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;
