import React from "react";

function About() {
  return (
    <section id="about" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          About Desk Hive
        </h2>
        <div className="text-center md:text-left">
          <p className="text-lg text-gray-600 mb-4">
            Desk Hive is a premier coworking space designed for professionals
            and entrepreneurs. Our mission is to provide a collaborative and
            productive environment where you can work, network, and grow your
            business.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Whether you're a freelancer, a startup, or an established
            business, Desk Hive offers a range of membership options to suit
            your needs. From hot desks to private offices, we have the perfect
            space for you to thrive.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Join our community and enjoy access to modern amenities, high-speed
            internet, meeting rooms, and much more. At Desk Hive, we believe
            in fostering a dynamic and inclusive community that supports your
            professional growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
