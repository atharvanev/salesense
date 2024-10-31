import React, { useState } from "react";

const TextBox = ({ placeholder }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default TextBox;
