// src/pages/NotFound.js
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8  rounded-lg max-w-md">
        <h1 className="text-9xl font-extrabold text-gray-800 mb-6">404</h1>
        <p className="text-2xl text-gray-600 mb-6">Oops! The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
