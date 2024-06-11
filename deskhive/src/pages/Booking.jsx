// import React from "react";
// import { useLocation } from "react-router-dom";

// function Booking() {
//   const location = useLocation();
//   const { desk, membership } = location.state;

//   return (
//     <div className="flex flex-col items-center p-12 bg-green-100">
//       <h1 className="text-4xl font-bold mb-4 text-blue-500">Booking Details</h1>
//       <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3">
//         <h2 className="text-2xl font-bold mb-2 text-gray-800">{desk.name}</h2>
//         {membership && (
//           <>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">{membership.name}</h3>
//             <p className="text-lg font-medium mb-4 text-gray-700">Price: ${membership.price}</p>
//             <ul className="list-disc list-inside text-left text-lg text-gray-700">
//               {membership.features.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//           </>
//         )}
//         {!membership && (
//           <>
//             <p className="text-lg font-medium mb-4 text-gray-700">Fixed Price: $35</p>
//             <ul className="list-disc list-inside text-left text-lg text-gray-700">
//               {["Meeting Room Access", "Dedicated Support", "Flexible Desks"].map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Booking;
