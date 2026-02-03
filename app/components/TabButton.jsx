import React from "react";

function TabButton({ active, selectTab, children }) {
  const buttonClass = active
    ? "text-white border-b-2 border-white"
    : "hover:text-white text-[#ABD7BE] border-b border-purple-50";

  return (
    <button onClick={selectTab} className={`mr-3 font-semibold ${buttonClass}`}>
      {children}
    </button>
  );
}
export default TabButton;
