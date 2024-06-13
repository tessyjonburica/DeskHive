import React from "react";
import { useLocation } from "react-router-dom";

function BookingDetails() {
  const location = useLocation();
  const { desk, membership } = location.state || {};

  return (
    <div className="flex flex-col items-center p-12 bg-green-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Booking Details</h1>
      {desk && membership ? (
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Selected Desk</h2>
          <p className="text-xl font-medium mb-2 text-gray-800">
            {desk.name}
            {membership && (
              <span className="font-normal text-gray-700"> - {membership.name}</span>
            )}
          </p>
          {desk.id === 1 && membership && (
            <p className="text-lg font-semibold text-gray-700">Price: ${membership.price}</p>
          )}
          {desk.id === 2 && (
            <p className="text-lg font-semibold text-gray-700">Fixed Price: $35</p>
          )}
          <div className="mt-6 px-6 py-3 bg-white text-gray-800 text-lg font-semibold rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Features</h3>
            <ul className="list-disc list-inside text-left text-lg">
              {(desk.id === 1 ? membership.features : ["Meeting Room Access", "Dedicated Support", "Flexible Desks"]).map(
                (feature, index) => (
                  <li key={index}>{feature}</li>
                )
              )}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-xl font-medium text-gray-800">No booking details available.</p>
      )}
    </div>
  );
}

export default BookingDetails;
