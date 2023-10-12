// Sidebar.js
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import LogoSVG from "../assets/logo.svg";

const Sidebar = ({ activeMenu, onMenuClick, onAddBoardClick }) => {
  const menu = ["Marketing", "HR", "Financial"];

  return (
    <div className="hidden md:block bg-[#2C2C38] h-screen w-60 py-10 text-white justify-around">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-1">
          {/* <LogoSVG /> */}
          <h2 className="px-6 text-2xl font-bold">KANBAN</h2>
        </div>
        <div className="flex flex-col w-full py-10 pr-2 space-y-4 grow">
          {menu.map((item, index) => (
            <div
              key={index}
              className={`w-full p-2  ${
                activeMenu === item
                  ? "bg-[#645FC6] font-bold"
                  : "hover:bg-[#837fd1]"
              } rounded-r-xl cursor-pointer flex gap-2 pl-6 items-center`}
              onClick={() => onMenuClick(item)}
            >
              <LuLayoutDashboard />
              <p>{item}</p>
            </div>
          ))}
          <div
            className={`w-full p-2 rounded-r-xl cursor-pointer flex gap-2 pl-6 items-center text-[#645FC6] hover:bg-[#645FC6] hover:text-white`}
            onClick={() => onAddBoardClick()}
          >
            <LuLayoutDashboard />
            <p>Add new board</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div
            className={`w-full p-2 
                   bg-[#645FC6] font-bold
                   hover:bg-[#837fd1]
               rounded-r-xl cursor-pointer flex gap-2 pl-6 items-center`}
          >
            <LuUser2 />
            <p>Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
