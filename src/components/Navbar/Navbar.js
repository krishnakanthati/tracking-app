import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import { Link } from "react-router-dom";
import { SidebarItems } from "./SidebarItems.js";
import "./Navbar.css";
// import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <span className="logo">Tracking Portal</span>
        <Link to="/documentations" className="search">
          <FcIcons.FcSearch title="search" />
        </Link>
        <Link to="/" class="user">
          <AiIcons.AiOutlineUser />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <FaIcons.FaTimes />
            </Link>
            <span className="logo">Tracking Portal</span>
          </li>
          {SidebarItems.map((item, index) => {
            return (
              <li key={index} className={item.class}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* </IconContext.Provider> */}
    </>
  );
}

export default Navbar;
