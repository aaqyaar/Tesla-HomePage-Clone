import React from "react";

function Button({ children }) {
  return (
    <button className="bg-black/70 text-white text-sm w-72  mx-3 uppercase px-12 py-3 rounded-full">
      {children}
    </button>
  );
}

export default Button;
