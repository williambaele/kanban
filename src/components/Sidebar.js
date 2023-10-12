import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#2C2C38] h-screen w-56 py-10 px-6 text-white  justify-around">
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold">KANBAN</h2>
        <div className="w-full  grow py-10 space-y-4 flex flex-col">
          <div className="w-full p-2 bg-gray-200 rounded-xl">
            <p>Lorem ipsum</p>
          </div>
        </div>
        <div className="w-full h-10 bg-red-200">
          <p>hi</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
