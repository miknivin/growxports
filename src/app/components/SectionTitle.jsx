import React from "react";
import icon from "../../assets/icon.png";
export const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="relative w-[50px] h-[50px]">
        {/* The golden squares pattern from the design */}
        <img src={icon} alt="icon" />
      </div>
      <h2 className="text-3xl md:text-4xl font-medium text-[#0F1B45] font-['Roboto']">
        {title}
      </h2>
    </div>
  );
};
