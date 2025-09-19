import React from "react";

const Button = ({ label, onClick, type = "button", className ="" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
