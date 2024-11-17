import React, { useState } from "react";

const TextBox = ({ placeholder }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder={placeholder}
        className="bg-purple-300 rounded-lg w-full py-2 px-3 h-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default TextBox;
