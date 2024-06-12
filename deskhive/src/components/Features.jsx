import React from "react";

function Features() {
  return (
    <div className="bg-white py-16 mt-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Available Features
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="flex flex-col justify-center">
            <ul className="text-lg text-gray-600 list-disc list-inside space-y-4">
              <li>Real-time Desk Booking</li>
              <li>Flexible Membership Tiers</li>
              <li>Discounts on Extended Bookings</li>
              <li>Booking Management</li>
              <li>Secure and Easy Payment</li>
              <li>Report Generation</li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="src/assets/workspace.jpg" // Replace with the actual image URL
              alt="Features"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
