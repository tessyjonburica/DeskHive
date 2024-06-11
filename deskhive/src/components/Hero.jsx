import React from "react";

function Hero() {
  return (
    <div className="bg-gray-100 py-8  sm:py-11 h-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:flex-1">
            <h2 className="text-4xl font-bold leading-9  text-gray-900">
              Reserve Your Perfect Workspace with DeskHive
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Welcome to DeskHive, your ultimate solution for booking individual and team workspaces. 
              With flexible membership tiers and seamless booking, DeskHive ensures you find the ideal desk for your needs. 
              Enjoy exclusive discounts on extended bookings and manage your reservations effortlessly. Join us today and experience a new way to work efficiently!
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:flex-1 lg:ml-8">
            <img
              src="https://picsum.photos/800?random"
              alt="Seat Reservation and Booking"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
