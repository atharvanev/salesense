// src/components/Button.js
import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-green-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-800 transition-colors duration-300">
      {text}
    </button>
  );
};

export default Button;
