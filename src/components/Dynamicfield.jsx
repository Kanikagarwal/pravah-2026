import React, { useState } from "react";

const Dynamicfield = ({ additionalFields, event }) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
const EVENTS_WITHOUT_COLLEGE_TYPE = [
  "street warz",
  // add future events here
  // "open mic",
  // "rap battle",
];
const isCollegeTypeRequired = !EVENTS_WITHOUT_COLLEGE_TYPE.includes(
  event?.toLowerCase()
);

  // Extract unique types from additionalFields
  const uniqueTypes = [
    ...new Set(additionalFields?.map((field) => field.type)),
  ];

  // const isStreetWarz = event?.toLowerCase() === "street warz";

  const filteredCategories = Array.from(
  new Map(
    additionalFields
      ?.filter((field) =>
        isCollegeTypeRequired ? field.type === selectedType: true
      )
      ?.map((field) => [
        field.category, // key (unique)
        {
          category: field.category,
          link: field.link,
          price: field.price,
        },
      ])
  ).values()
);



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
console.log(event);

  return (
    <div>
      {isCollegeTypeRequired && (
  <div className="w-full mb-4 z-10 relative">
    <label
      htmlFor="type"
      className="block text-sm font-medium text-[#f9eddd] mb-2"
    >
      Select College type
    </label>

    <select
      id="type"
      value={selectedType}
      onChange={handleTypeChange}
      className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f9eddd]"
    >
      <option value="">Select</option>
      {uniqueTypes?.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
  </div>
)}


      {/* Dropdown for Category */}
      {(selectedType || !isCollegeTypeRequired) &&(
        <div className="w-full mb-4 z-10 relative">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-[#f9eddd] mb-2"
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
            <button className="w-full px-4 py-3 bg-[#f9eddd] text-[#2d201c] text-sm font-medium rounded-md hover:bg-[#f9eddd] focus:outline-none focus:ring-2 focus:ring-[#f9eddd]">
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
