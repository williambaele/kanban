import React from "react";
import { LuPlus } from "react-icons/lu";
import { LuMoreVertical } from "react-icons/lu";

const Header = ({ activeMenu }) => {
  return (
    <div className="w-full bg-[#2C2C38] h-20 text-white flex justify-between items-center px-2 md:px-10">
      <h2 className="text-2xl font-bold">{activeMenu}</h2>
      <div className="flex items-center gap-2">
        <div className="bg-[#645FC6] flex gap-1 items-center p-2 rounded-xl font-bold cursor-pointer">
          <LuPlus />
          <p className="hidden md:block">New task</p>
        </div>
        <LuMoreVertical size={24} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
