import React from "react";
import Sidebar from "./UI/Sidebar";
import Header from "./UI/Header";
const History = () => {
  const sidebarProp = {
    home: true,
    rewards: true,
    history: false,
  };
  return (
    <div className="historyContainer">
      <div className="sidebarContainer">
        <Sidebar {...sidebarProp} />
      </div>
      <div className="headerContainer">
        <Header />
      </div>
    </div>
  );
};

export default History;
