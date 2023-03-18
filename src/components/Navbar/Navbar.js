import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import { Link } from "react-router-dom";
import { SidebarItems } from "./SidebarItems.js";
import "./Navbar.css";
// import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const [nova, setNova] = useState("");
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const showNova = (e) => {
    setNova(props.nova);
  };

  const hideNova = (e) => {
    setNova("");
  };

  return (
    <>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <span className="logo">Tracking Portal</span>
        <div className="main-search">
          <input className="main-search-input" value={"search"} />
        </div>
        <Link to="/documentations" className="search">
          <FcIcons.FcSearch title="search" />
        </Link>
        <Link
          to="/"
          className="user"
          onMouseEnter={showNova}
          onMouseLeave={hideNova}
        >
          <AiIcons.AiOutlineUser className="user-icon" />
          <p className="nova" title="nova">
            {nova}
          </p>
        </Link>
        <Link to="/" className="notif">
          <IoIcons.IoMdNotificationsOutline />
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
