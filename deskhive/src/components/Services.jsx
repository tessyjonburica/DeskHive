import React from "react";

const services = [
  {
    title: "Private Offices",
    description: "Get your own private office space to work with privacy and comfort.",
    features: [
      "Fully Furnished",
      "High-Speed Internet",
      "24/7 Access",
      "Personalized Workspace",
      "Office Supplies",
      "Cleaning Services",
    ],
  },
  {
    title: "Dedicated Desks",
    description: "Have a dedicated desk space reserved just for you in a shared office.",
    features: [
      "Personal Desk",
      "Lockable Storage",
      "High-Speed Internet",
      "Ergonomic Chairs",
      "Power Outlets",
      "Access to Shared Facilities",
    ],
  },
  {
    title: "Meeting Rooms",
    description: "Book meeting rooms for your team meetings, client presentations, and more.",
    features: [
      "Projector",
      "Whiteboard",
      "Video Conferencing",
      "Comfortable Seating",
      "Soundproofing",
      "Refreshments Available",
    ],
  },
  {
    title: "Virtual Office",
    description: "Get a business address and other virtual office services without a physical office.",
    features: [
      "Mail Handling",
      "Reception Services",
      "Business Address",
      "Call Answering Services",
      "Meeting Room Access",
      "Networking Opportunities",
    ],
  },
  {
    title: "Event Spaces",
    description: "Rent event spaces for workshops, seminars, and other corporate events.",
    features: [
      "Customizable Layout",
      "AV Equipment",
      "Catering Services",
      "On-site Support",
      "Flexible Booking",
      "High Capacity",
    ],
  },
  {
    title: "Coworking Desks",
    description: "Book a desk in a shared workspace with access to all amenities.",
    features: [
      "Flexible Booking Hours",
      "Access to All Common Areas",
      "Networking Events",
      "Community Managers",
      "Tea and Coffee",
      "Printing Services",
    ],
  },
];

function Services() {
  return (
    <div className="flex flex-col items-center p-12 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-700">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{service.description}</p>
            <ul className="list-none text-left text-lg text-gray-700 space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-indigo-500">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
