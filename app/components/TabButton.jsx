import React from "react";
import { colors } from "@/app/lib/colors";

function TabButton({ active, selectTab, children }) {
  const buttonStyle = active
    ? { color: "white" }
    : { color: colors.secondary.green };
  const buttonClass = active
    ? "border-b-2 border-white"
    : "hover:text-white border-b border-purple-50";

  return (
    <button onClick={selectTab} style={buttonStyle} className={`mr-3 font-semibold ${buttonClass}`}>
      {children}
    </button>
  );
}
export default TabButton;
