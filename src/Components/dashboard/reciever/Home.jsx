import React from "react";
import SideNav from "./SideNav";
import PageContent from "./PageContent";
import History from "./History";
import { Routes, Route, Outlet } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="dash-wrapper">
      <SideNav />
      <Routes>
        <Route path="/" element={<PageContent />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Outlet/>
    </div>
  );
}

export default Home;
