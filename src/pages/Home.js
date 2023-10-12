// Home.js
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ModalNewBoard from "../components/ModalNewBoard";

const Home = () => {
  const [activeMenu, setActiveMenu] = useState("Marketing");
  const [modalVisibility, setModalVisibility] = useState(false);

  const handleMenuClick = (item) => {
    setActiveMenu(item);
  };

  const handleAddBoardClick = () => {
    setModalVisibility(true);
  };

  const handleModalClose = () => {
    setModalVisibility(false);
  };

  return (
    <div
      className={`bg-[#21222D] h-screen flex relative ${
        modalVisibility ? "backdrop-blur-xl" : ""
      }`}
    >
      <Sidebar
        activeMenu={activeMenu}
        onMenuClick={handleMenuClick}
        onAddBoardClick={handleAddBoardClick}
      />
      <div className="w-full">
        <Header activeMenu={activeMenu} />
      </div>
      {modalVisibility ? <ModalNewBoard onClose={handleModalClose} /> : null}
    </div>
  );
};

export default Home;
