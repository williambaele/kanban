import React from "react";
import { LuX } from "react-icons/lu";

import { LuPlus } from "react-icons/lu";

const ModalNewBoard = ({ onClose }) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex mx-auto items-center justify-center backdrop-blur-sm">
      <div className="rounded-xl w-1/3 h-96 bg-[#2C2C38] p-6 space-y-4">
        <div className="flex justify-between">
          <h2 className="text-xl text-white font-bold">Add a new board</h2>
          <LuX
            style={{ color: "#ffffff", fontSize: "24px" }}
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
        <form className="flex flex-col space-y-6">
          <div className="space-y-2 flex flex-col">
            <label className="text-white text-md">Board name</label>
            <input
              className="border-[#828fa3] border p-2 rounded bg-[#2C2C38] outline-none text-white"
              placeholder="E.g: Marketing"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label className="text-white text-md">Column</label>
            <div className="flex gap-2 items-center">
              <input className="grow border-[#828fa3] border p-1 rounded bg-[#2C2C38] outline-none text-white pl-2" />
              <LuX
                style={{ color: "#ffffff", fontSize: "24px" }}
                className="cursor-pointer"
              />
            </div>
          </div>
          <button className="bg-white rounded-xl w-full p-2 text-[#645FC6] flex gap-2 items-center justify-center">
            <LuPlus />
            Add column
          </button>
          <button className="bg-[#645FC6] rounded-xl w-full p-2 text-white flex gap-2 items-center justify-center">
            <LuPlus />
            Create board
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalNewBoard;
