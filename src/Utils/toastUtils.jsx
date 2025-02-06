import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

// General toast notification utility functions
export const showToast = (message, type = "default") => {

    console.log("type in TostifyUtils....."+type +"<><><><>"+message)
  switch (type) {
    case "success":
      toast.success(message, {
        position: "top-right",
        autoClose: 3000, // Customize how long the toast stays visible
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;

    case "error":
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;

    case "info":
      toast.info(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;

    case "warning":
      toast.warning(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;

    default:
      toast(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
  }
};

// // Optional: Create a confirmation dialog using Toastify (customize as per need)
// export const showConfirm = async (message) => {
//   return new Promise((resolve, reject) => {
//     const result = window.confirm(message); // Use standard confirm box for simplicity
//     if (result) {
//       resolve(true);
//     } else {
//       reject(false);
//     }
//   });
// };



// Custom confirmation function
// export const showConfirm = (message) => {
//     return new Promise((resolve, reject) => {
//       const toastId = toast(
//         <div className="flex flex-col justify-center items-center">
//           <p>{message}</p>
//           <div className="flex space-x-4">
//           <button
//               onClick={() => {
//                 toast.dismiss(toastId); // Close the toast
//                 resolve(true); // Resolve the promise for "Yes"
//               }}
//               className="bg-green-500 text-white py-1 px-3 rounded mr-2"
//             >
//               Yes
//             </button>
//             <button
//               onClick={() => {
//                 toast.dismiss(toastId); // Close the toast
//                 reject(false); // Reject the promise for "No"
//               }}
//               className="bg-red-500 text-white py-1 px-3 rounded"
//             >
//               No
//             </button>
//           </div>
//         </div>,
//         {
//           position: "top-center",
//           autoClose: false, // Keep it open until action is taken
//           hideProgressBar: true,
//           closeOnClick: false, // Don't allow closing by clicking on the toast
//           pauseOnHover: false,
//           draggable: false,
//           // Optionally customize other toast properties
//         }
//       );
//     });
//   };




export const showConfirm = (message) => {
  return new Promise((resolve, reject) => {
    const toastId = toast(
      <div className="flex flex-col justify-center items-center">
        <p className="mb-4">{message}</p>
        <div className="flex space-x-4">
          <button
            onClick={() => {
              toast.dismiss(toastId); // Close the toast
              resolve(true); // Resolve the promise for "Yes"
            }}
            className="bg-green-500 text-white py-1 px-3 rounded"
          >
            Yes
          </button>
          {/* <button
            onClick={() => {
              toast.dismiss(toastId); // Close the toast
              reject(false); // Reject the promise for "No"
            }}
            className="bg-red-500 text-white py-1 px-3 rounded"
          >
            No
          </button> */}
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false, // Keep it open until action is taken
        hideProgressBar: true,
        closeOnClick: false, // Don't allow closing by clicking on the toast
        pauseOnHover: false,
        draggable: false,
      }
    );
  });
};
