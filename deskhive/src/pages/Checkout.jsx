import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { desk, membership } = state;

  const [hours, setHours] = useState(1);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [formValid, setFormValid] = useState(true); // State to track form validation

  const handleHoursChange = (e) => {
    const value = parseInt(e.target.value);
    setHours(value);
  };

  const handleClientNameChange = (e) => {
    setClientName(e.target.value);
  };

  const handleClientEmailChange = (e) => {
    setClientEmail(e.target.value);
  };

  const handleClientPhoneChange = (e) => {
    setClientPhone(e.target.value);
  };

  const basePrice = desk.id === 1 ? membership.price * hours : 35 * hours;
  const discount = hours >= 3 ? basePrice * 0.1 : 0;
  const totalPrice = basePrice - discount;

  const handlePayment = () => {
    if (!clientName || !clientEmail || !clientPhone) {
      setFormValid(false); // Set formValid state to false
      return;
    }

    // If all fields are filled, navigate to confirmation page
    navigate("/confirmation", {
      state: { desk, membership, hours, totalPrice, clientName, clientEmail, clientPhone },
    });
  };

  return (
    <div className="min-h-screen w-full bg-green-100 flex flex-col items-center p-12">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Checkout</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Booking Summary</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Desk</h3>
          <p className="text-lg text-gray-600">{desk.name}</p>
        </div>
        {desk.id === 1 && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">Membership Tier</h3>
            <p className="text-lg text-gray-600">{membership.name}</p>
          </div>
        )}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Hours</h3>
          <input
            type="number"
            min="1"
            value={hours}
            onChange={handleHoursChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Fullmame</h3>
          <input
            type="text"
            value={clientName}
            onChange={handleClientNameChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Email</h3>
          <input
            type="email"
            value={clientEmail}
            onChange={handleClientEmailChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
          <input
            type="tel"
            value={clientPhone}
            onChange={handleClientPhoneChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your phone number"
          />
        </div>
        {!formValid && (
          <p className="text-red-500 text-sm mb-4">Please fill in all client details.</p>
        )}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Base Price</h3>
          <p className="text-lg text-gray-600">${basePrice.toFixed(2)}</p>
        </div>
        {discount > 0 && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">Discount</h3>
            <p className="text-lg text-gray-600">-${discount.toFixed(2)}</p>
          </div>
        )}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Total Price</h3>
          <p className="text-lg text-gray-600">${totalPrice.toFixed(2)}</p>
        </div>
        <button
          className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 w-full"
          onClick={handlePayment}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default Checkout;
