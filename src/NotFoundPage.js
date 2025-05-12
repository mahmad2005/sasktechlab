// src/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      {/* You can use your logo here if it's in the public folder */}
      <img src="/chip.png" alt="SaskTech Lab Logo" className="h-24 w-24 mb-8" /> 
      <h1 className="text-5xl md:text-6xl font-bold text-green-700 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg mb-8 text-center max-w-md">
        Oops! The page you are looking for does not exist, might have been moved, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-orange-500 text-white font-semibold px-6 py-3 rounded hover:bg-orange-600 transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;