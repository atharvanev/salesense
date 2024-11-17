// src/components/Button.js
import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-purple-300 text-white font-semibold px-6 py-2 rounded-full hover:bg-purple-800 transition-colors duration-300">
      {text}
    </button>
  );
};

export default Button;
