import React from "react";



function Features() {
  return (
    <div className=" py-16 mt-12 sm:py-11">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h2 className="text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Available Features
          </h2>
          <ul className="mt-4 text-lg text-gray-500 list-disc list-inside">
            <li>Real-time Desk Booking</li>
            <li>Flexible Membership Tiers</li>
            <li>Discounts on Extended Bookings</li>
            <li>Booking Management</li>
            <li>Secure and Easy Payment</li>
            <li>Report Generation</li>
          </ul>
        </div>
        <div>
          <img
            src="https://picsum.photos/800/500?random"
            alt="Features"
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
