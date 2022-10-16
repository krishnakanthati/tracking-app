import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import { Link } from "react-router-dom";
import { SidebarItems } from "../Sidebar/SidebarItems";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <span className="logo">Tracking Portal</span>
          <span className="search">
            <FcIcons.FcSearch title="search" />
          </span>
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
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
