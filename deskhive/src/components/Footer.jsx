import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold">Desk Hive</h4>
          <p className="text-sm">The ultimate workspace solution.</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h5 className="text-md font-semibold">Quick Links</h5>
          <ul className="list-none">
            <li>
              <a href="#desk" className="hover:underline">
                Book a seat
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h5 className="text-md font-semibold">Contact Us</h5>
          <p className="text-sm">1234 Desk Hive Lane</p>
          <p className="text-sm">Workspace City, WH 56789</p>
          <p className="text-sm">Email: info@deskhive.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2024 Desk Hive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
