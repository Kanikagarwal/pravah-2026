import React from "react";

const CategoryTable = ({ additionalFields }) => {

    return (
        <div className="flex justify-center items-center ">
            <div className="w-full max-w-md bg-white shadow-sm ">
                <table className="w-full border-collapse ">
                    <thead className="border">
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">College</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Category</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Member Size</th>
                        </tr>
                    </thead>
                    <tbody className="border">
                        {additionalFields.map((field) => (
                            <tr key={field._id} className="hover:bg-gray-50">
                                <td className="border px-4 py-2 text-sm text-gray-600 ">{field.type}</td>
                                <td className="border  px-4 py-2 text-sm text-gray-600">{field.category}</td>
                                <td className=" border px-4 py-2 text-sm text-gray-600">{field.dteamSize}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoryTable;
