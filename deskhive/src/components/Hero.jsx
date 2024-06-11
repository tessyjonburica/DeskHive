import React from "react";

function Hero() {
  return (
    <div className="bg-gray-100 py-8  sm:py-11 h-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:flex-1">
            <h2 className="text-4xl font-bold leading-9  text-gray-900">
              DeskHive - Seat Reservation and Booking Website
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Welcome to DeskHive, your one-stop destination for managing and
              reserving seats, as well as booking appointments. Seamlessly
              switch between the two functionalities, all from the comfort of
              your screen.
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
