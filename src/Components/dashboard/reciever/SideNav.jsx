import React from "react";
import "./SideNav.css";
import { Link, NavLink } from "react-router-dom";

function SideNav() {
  return (
    <>
      <div className="side-nav">
        <div className="side-nav__logo">
          <h1>Donate</h1>
        </div>

        <div className="side-nav__links">
          <ul>
            <li>
              <NavLink to={"/home"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/home/history"}>History</NavLink>
            </li>
            <li>Payment</li>
            <li>Support</li>
          </ul>
          <ul>
            <li>Log out</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideNav;
