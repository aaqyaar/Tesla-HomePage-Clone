import React from "react";

function Button({ children }) {
  return (
    <button className="bg-white/70 text-black text-sm w-72  mx-3 uppercase px-12 py-3 rounded-full">
      {children}
    </button>
  );
}

export default Button;
