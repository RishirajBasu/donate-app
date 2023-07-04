import React from "react";
import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
const Rewards = () => {
  const sidebarProp = {
    home: false,
    historyDonor: false,
    rewards: true,
    donor: true,
    active: {
      padding: "20px",
      border: "none",
      textAlign: "center",
      color: "white",
      borderRadius: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.383)",
      cursor: "pointer",
    },
  };
  return (
    <div>
      <div className="sidebar">
        <Sidebar {...sidebarProp} />
      </div>
      <div className="header">
        <Header />
      </div>
    </div>
  );
};

export default Rewards;
