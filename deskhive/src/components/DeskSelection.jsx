import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DeskSelection() {
  const [selectedDesk, setSelectedDesk] = useState(null);
  const [selectedMembership, setSelectedMembership] = useState(null);
  const navigate = useNavigate();

  const desks = [
    { id: 1, name: "Individual Desk", status: "Available" },
    { id: 2, name: "Team Desk", status: "Available" },
  ];

  const memberships = [
    { name: "Basic", price: 100, features: ["24/7 Access", "Free Coffee", "High-Speed Internet"] },
    { name: "Premium", price: 200, features: ["Private Cabin", "Free Coffee", "High-Speed Internet"] },
    { name: "Executive", price: 300, features: ["Personal Assistant", "Private Cabin", "High-Speed Internet"] },
  ];

  const teamFeatures = ["Meeting Room Access", "Dedicated Support", "Flexible Desks"];

  const handleDeskSelection = (desk) => {
    setSelectedDesk(desk);
    setSelectedMembership(null); // Reset membership when desk type changes
  };

  const handleMembershipSelection = (membership) => {
    setSelectedMembership(membership);
  };

  const handleBooking = () => {
    navigate("/booking", { state: { desk: selectedDesk, membership: selectedMembership } });
  };

  return (
    <div className="flex flex-col items-center p-12 bg-green-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">Desk Selection</h1>
      <p className="text-gray-700 mb-8">
        Choose a desk and membership to reserve or book an appointment
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        {desks.map((desk) => (
          <div
            key={desk.id}
            className={`p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
              selectedDesk && selectedDesk.id === desk.id ? "ring-4 ring-blue-300" : ""
            }`}
            onClick={() => handleDeskSelection(desk)}
          >
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{desk.name}</h2>
            <p className={`text-lg font-semibold ${desk.status === "Available" ? "text-green-600" : "text-red-600"}`}>
              Status: {desk.status}
            </p>
          </div>
        ))}
      </div>
      {selectedDesk && selectedDesk.id === 1 && (
        <div className="mt-8 w-full">
          <h2 className="text-3xl font-bold mb-4 text-blue-500">Membership Tiers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {memberships.map((membership) => (
              <div
                key={membership.name}
                className={`p-6 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ${
                  selectedMembership && selectedMembership.name === membership.name
                    ? "bg-blue-200"
                    : ""
                }`}
                onClick={() => handleMembershipSelection(membership)}
              >
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{membership.name}</h3>
                <p className="text-xl font-medium mb-4 text-gray-700">Price: ${membership.price}</p>
                <ul className="list-disc list-inside text-left text-lg text-gray-700">
                  {membership.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedDesk && selectedDesk.id === 2 && (
        <div className="mt-8 w-full flex justify-center">
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3">
            <h2 className="text-3xl font-bold mb-4 text-blue-500">Team Desk</h2>
            <p className="text-xl font-medium mb-4 text-gray-700">Fixed Price: $35</p>
            <ul className="list-disc list-inside text-left text-lg text-gray-700">
              {teamFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {selectedDesk && selectedMembership && (
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-500">Selected Desk</h2>
          <p className="text-xl font-medium mb-2 text-gray-800">
            {selectedDesk.name}
            {selectedMembership && (
              <span className="font-normal text-gray-700"> - {selectedMembership.name}</span>
            )}
          </p>
          {selectedDesk.id === 1 && selectedMembership && (
            <p className="text-lg font-semibold text-gray-700">Price: ${selectedMembership.price}</p>
          )}
          {selectedDesk.id === 2 && (
            <p className="text-lg font-semibold text-gray-700">Fixed Price: $35</p>
          )}
          <button
            className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
            onClick={handleBooking}
          >
            Book Now
          </button>
        </div>
      )}
    </div>
  );
}

export default DeskSelection;
