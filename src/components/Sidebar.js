// Sidebar.js
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";

const Sidebar = ({ activeMenu, onMenuClick, onAddBoardClick }) => {
  const menu = ["Marketing", "HR", "Financial"];

  return (
    <div className="bg-[#2C2C38] h-screen w-60 py-10 text-white justify-around">
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold px-6">KANBAN</h2>
        <div className="w-full grow py-10 space-y-4 flex flex-col pr-2">
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
      </div>
    </div>
  );
};

export default Sidebar;
