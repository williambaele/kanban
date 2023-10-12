// Home.js
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Home = () => {
  const [activeMenu, setActiveMenu] = useState("Marketing");

  const handleMenuClick = (item) => {
    setActiveMenu(item);
  };

  return (
    <div className="bg-[#21222D] h-screen flex">
      <Sidebar activeMenu={activeMenu} onMenuClick={handleMenuClick} />
      <div className="w-full">
        <Header activeMenu={activeMenu} />
      </div>
    </div>
  );
};

export default Home;
