import React from "react";
import "./Card.css";

function Card({ id, name, website }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-no">Issue No: {id}</h5>
        <p className="card-title">Issue: {name}</p>
        <hr></hr>
        <p className="card-desc">
          Issue: lorem Contrary to popular belief, Lorem Ipsum is not simply
          random text. It has roots in a piece of classical Latin literature
          from 45 BC, making it over 2000 years old. Richard
        </p>
      </div>
      <p>{website}</p>
    </div>
  );
}

export default Card;
