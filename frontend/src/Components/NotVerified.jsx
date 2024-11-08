import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const KYCFailedPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-200 via-pink-200 to-orange-200 text-gray-800 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
        <FaTimesCircle className="text-red-500 text-6xl mx-auto mb-4" />
        <h1 className="text-3xl font-semibold mb-2">KYC Verification Failed</h1>
        <p className="text-lg mb-6">
          Unfortunately, we couldn't verify your KYC details. Please check your
          documents and try again.
        </p>
        <button
          className="bg-[#e74c3c] text-white px-6 py-2 font-semibold rounded-lg hover:bg-red-600 transition duration-300"
          onClick={() => (window.location.href = "/upload")}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default KYCFailedPage;
