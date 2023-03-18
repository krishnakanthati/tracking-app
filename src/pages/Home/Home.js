import React from "react";
import "./Home.css";
import * as BiIcons from "react-icons/bi";
import { Link } from "react-router-dom";

function home(props) {
  function handleClick() {
    localStorage.setItem("nova", "login");
    console.log(props);
    props.getnova("login");
    return;
  }

  return (
    <h1 className="home">
      <Link to="/">
        <BiIcons.BiLogOut
          title="logout"
          className="logout"
          onClick={handleClick}
        />
      </Link>
    </h1>
  );
}

export default home;
