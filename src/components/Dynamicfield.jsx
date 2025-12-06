import React, { useState } from "react";

const Dynamicfield = ({ additionalFields }) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Extract unique types from additionalFields
  const uniqueTypes = [
    ...new Set(additionalFields?.map((field) => field.type)),
  ];

  // Extract categories based on the selected type
  const filteredCategories = additionalFields
    ?.filter((field) => field.type === selectedType)
    ?.map((field) => ({
      category: field.category,
      link: field.link,
      price: field.price,
    }));

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedCategory(""); // Reset category when type changes
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const selectedCategoryLink =
    filteredCategories?.find((cat) => cat.category === selectedCategory)?.link ||
    "";

  const selectedCategoryPrice =
    filteredCategories?.find((cat) => cat.category === selectedCategory)
      ?.price || 0;

  return (
    <div>
      {/* Dropdown for Type */}
      <div className="w-full mb-4 z-10 relative">
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
          Select College type
        </label>
        <select
          id="type"
          value={selectedType}
          onChange={handleTypeChange}
          className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <option value="">Select</option>
          {uniqueTypes?.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Dropdown for Category */}
      {selectedType && (
        <div className="w-full mb-4 z-10 relative">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Participation Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <option value="">Select Category</option>
            {filteredCategories?.map((cat, index) => (
              <option key={index} value={cat.category}>
                {cat.category}
              </option>
            ))}
          </select>
         
        </div>
      )}

      {/* Register Button */}
      {selectedCategory && (
        <div className="mt-4 z-10 relative">
          <a
            href={selectedCategoryLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full px-4 py-3 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400">
              Register ( ₹{selectedCategoryPrice} )
            </button>
          </a>
           {/* Non-refundable Fee Note */}
           <p className="text-sm text-gray-500 mt-2">
            * Note: The fee once paid is non-refundable.
          </p>
        </div>
        
      )}
    </div>
  );
};

export default Dynamicfield;
