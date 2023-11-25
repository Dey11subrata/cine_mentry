import React from "react";

export const Button = ({ children }) => {
  return (
    <button class="text-xl text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-4 py-1 rounded-lg">
      {children}
    </button>
  );
};
