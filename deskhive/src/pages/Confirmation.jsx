import React from "react";
import { useLocation, Link } from "react-router-dom";
import { jsPDF } from "jspdf";

function Confirmation() {
  const { state } = useLocation();
  const { desk, membership, hours, totalPrice, clientName, clientEmail, clientPhone } = state;

  const receiptNumber = `DH-${Date.now()}`;

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Desk Hive Receipt", 20, 20);
    doc.setFontSize(12);
    doc.text(`Receipt Number: ${receiptNumber}`, 20, 30);
    doc.text(`Fullname: ${clientName}`, 20, 40);
    doc.text(`Email: ${clientEmail}`, 20, 50);
    doc.text(`Phone: ${clientPhone}`, 20, 60);
    doc.text(`Desk: ${desk.name}`, 20, 70);
    if (desk.id === 1) {
      doc.text(`Membership Tier: ${membership.name}`, 20, 80);
    }
    doc.text(`Hours: ${hours}`, 20, 90);
    doc.text(`Total Price: $${totalPrice.toFixed(2)}`, 20, 100);

    doc.save(`DeskHive_Receipt_${receiptNumber}.pdf`);
  };

  return (
    <div className="min-h-screen w-full bg-green-100 flex flex-col items-center p-12">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Confirmation</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Booking Details</h2>
        <p className="text-lg text-gray-600 mb-4">Receipt Number: {receiptNumber}</p>
        <p className="text-lg text-gray-600 mb-4">Fullname: {clientName}</p>
        <p className="text-lg text-gray-600 mb-4">Email: {clientEmail}</p>
        <p className="text-lg text-gray-600 mb-4">Phone: {clientPhone}</p>
        <p className="text-lg text-gray-600 mb-4">Desk: {desk.name}</p>
        {desk.id === 1 && (
          <p className="text-lg text-gray-600 mb-4">Membership Tier: {membership.name}</p>
        )}
        <p className="text-lg text-gray-600 mb-4">Hours: {hours}</p>
        <p className="text-lg text-gray-600 mb-4">Total Price: ${totalPrice.toFixed(2)}</p>
        <div className="flex justify-between mt-8">
          <button
            className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
            onClick={generatePDF}
          >
            Download Receipt
          </button>
          <Link
            to="/"
            className="px-6 py-3 bg-gray-300 text-gray-800 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
        <p className="text-gray-600 text-center mt-4">Thank you for booking with Desk Hive!</p>
      </div>
    </div>
  );
}

export default Confirmation;
