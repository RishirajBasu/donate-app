import React from "react";
import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
const Rewards = () => {
  const sidebarProp = {
    home: true,
    rewards: false,
    history: true,
  };
  return (
    <div>
      <div className="sidebar">{/* <Sidebar {...sidebarProp} /> */}</div>
      <div className="header">
        <Header />
      </div>
    </div>
  );
};

export default Rewards;
