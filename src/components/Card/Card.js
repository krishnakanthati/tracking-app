import React from "react";
import "./Card.css";

function Card({ id, name, body, email }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-no">Issue No: {id}</h5>
        <p className="card-title">Issue: {name}</p>
        <hr></hr>
        <br />
        <p className="card-desc">Issue Description: {body}</p>
      </div>
      <p className="card-owner">{email}</p>
    </div>
  );
}

export default Card;
