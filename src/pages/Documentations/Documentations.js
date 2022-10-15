import React from "react";
import Card from "../../components/Card/Card";
import "./Documentations.css";

function Documentations() {
  return (
    <div className="documentations">
      <input placeholder="search docx" />
      <div className="wrapper">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Documentations;
