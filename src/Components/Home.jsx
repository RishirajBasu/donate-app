import React from "react";
import "./Home.css";
import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeLeft">
        <div className="sidebarComponent">
          <Sidebar />
        </div>
      </div>
      <div className="homeRight">
        <div className="headerComponent">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Home;
