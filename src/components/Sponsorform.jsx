import React from 'react';

const Sponsorform = () => {
  return (
    <div className="w-full flex justify-center items-center mt-40 mb-20 ">
<form
  className="w-full max-w-6xl bg-transparent p-8  rounded-lg flex flex-col space-y-6 border border-gray-300"
>
  <div className="grid grid-cols-3 gap-6 w-full">
    {/* First Name */}
    <div className="flex flex-col">
      <label className="font-medium text-gray-700 mb-2">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        className="p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition"
      />
    </div>

    {/* Last Name */}
    <div className="flex flex-col">
      <label className="font-medium text-gray-700 mb-2">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        className="p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition"
      />
    </div>

    {/* Mobile No */}
    <div className="flex flex-col">
      <label className="font-medium text-gray-700 mb-2">Mobile No</label>
      <input
        type="text"
        placeholder="Mobile No"
        className="p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition"
      />
    </div>

    {/* Email ID */}
    <div className="flex flex-col">
      <label className="font-medium text-gray-700 mb-2">Email ID</label>
      <input
        type="email"
        placeholder="Email ID"
        className="p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition"
      />
    </div>

    {/* Company Name */}
    <div className="flex flex-col">
      <label className="font-medium text-gray-700 mb-2">Company Name</label>
      <input
        type="text"
        placeholder="Company Name"
        className="p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition"
      />
    </div>

    {/* Designation */}
    <div className="flex flex-col">
      <label className="font-medium text-gray-700 mb-2">Designation</label>
      <input
        type="text"
        placeholder="Designation"
        className="p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition"
      />
    </div>

    {/* Company Full Address */}
    <div className="flex flex-col col-span-3">
      <label className="font-medium text-gray-700 mb-2">Company Full Address</label>
      <input
        type="text"
        placeholder="Company Full Address"
        className="p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition"
      />
    </div>

    {/* Monetary / Non-Monetary */}
    <div className="flex flex-col">
      <label className="font-medium text-gray-700 mb-2">Monetary / Non-Monetary</label>
      <select
        className="p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition"
      >
        <option value="" disabled selected>
          Select
        </option>
        <option value="monetary">Monetary</option>
        <option value="non-monetary">Non-Monetary</option>
      </select>
    </div>

    {/* Queries */}
    <div className="flex flex-col col-span-2">
      <label className="font-medium text-gray-700 mb-2">Queries</label>
      <textarea
        placeholder="Describe your Queries"
        rows="2"
        className="p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition"
      ></textarea>
    </div>

    {/* Your Consent */}
    <div className="flex flex-col col-span-3">
      <label className="font-medium text-gray-700 mb-2">Your Consent</label>
      <textarea
        placeholder="Describe here"
        rows="2"
        className="p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition"
      ></textarea>
    </div>
  </div>

  {/* Submit Button */}
  <div className="flex justify-center mt-4">
    <button
      type="submit"
      className="bg-gray-800 text-white font-bold py-3 px-8 rounded-md shadow-md hover:bg-gray-900 focus:ring-1 focus:ring-gray-700 transition"
    >
      Submit Proposal
    </button>
  </div>
</form>


    </div>
  );
};

export default Sponsorform;
