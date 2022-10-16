import React from "react";
import Card from "../../components/Card/Card";
import "./Documentations.css";

function Documentations() {
  return (
    <div className="documentations">
      <div className="search-input">
        <input placeholder="search docx" />
      </div>
      <div className="wrapper">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Documentations;
