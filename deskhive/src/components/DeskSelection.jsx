import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function DeskSelection() {
  const [selectedDesk, setSelectedDesk] = useState(null);
  const [selectedMembership, setSelectedMembership] = useState(null);
  const [teamSize, setTeamSize] = useState(2);
  const [fixedPrice, setFixedPrice] = useState(100);

  const desks = [
    {
      id: 1,
      name: "Individual Desk",
      capacity: { basic: 2, premium: 4, executive: 6 },
      status: "Occupied",
    },
    {
      id: 2,
      name: "Team Desk",
      capacity: { basic: 1, premium: 2, executive: 3 },
      status: "Available",
    },
  ];

  const memberships = [
    { name: "Basic", capacity: 2 },
    { name: "Premium", capacity: 4 },
    { name: "Executive", capacity: 6 },
  ];

  const handleDeskSelection = (desk) => {
    setSelectedDesk(desk);
  };

  const handleMembershipSelection = (membership) => {
    setSelectedMembership(membership);
  };

  const handleTeamSizeChange = (e) => {
    const newTeamSize = parseInt(e.target.value);
    setTeamSize(newTeamSize);
    setFixedPrice(newTeamSize * 100);
  };

  return (
    <div className="flex flex-col items-center p-12 bg-green-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">
        Desk Selection
      </h1>
      <p className="text-gray-500 mb-8">
        Choose a desk and membership to reserve or book an appointment
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {desks.map((desk) => (
          <div
            key={desk.id}
            className={`p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
              selectedDesk && selectedDesk.id === desk.id
                ? "opacity-50"
                : ""
            }`}
            onClick={() => handleDeskSelection(desk)}
          >
            <h2 className="text-2xl font-bold mb-2">{desk.name}</h2>
            {desk.capacity && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {memberships.map((membership) => (
                  <div
                    key={membership.name}
                    className={`p-2 bg-gray-100 rounded-lg ${
                      selectedMembership &&
                      selectedMembership.name === membership.name
                        ? "bg-blue-200"
                        : ""
                    }`}
                    onClick={() => handleMembershipSelection(membership)}
                  >
                    {membership.name} - Available:{" "}
                    {desk.capacity[membership.name]}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {selectedDesk && selectedMembership && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Selected Desk</h2>
          <p className="text-xl font-medium mb-2">
            {selectedDesk.name} -{" "}
            <span className="font-normal text-gray-500">{selectedMembership.name}</span>
          </p>
          {selectedDesk.id === 2 && (
            <>
              <div className="flex flex-col gap-2">
                <Label className="mb-2" htmlFor="team-size">
                  Team Size
                </Label>
                <TextInput
                  id="team-size"
                  type="number"
                  value={teamSize}
                  onChange={handleTeamSizeChange}
                  className="w-24"
                />
                <p className="text-gray-500 mt-4">
                  Fixed Price: ${fixedPrice}
                </p>
              </div>
            </>
          )}
          {selectedDesk.id !== 2 && (
            <p className="text-gray-500">
              Available Seats: {selectedDesk.capacity[selectedMembership.name]}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default DeskSelection;

