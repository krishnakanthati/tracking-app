import React from "react";
import "./Card.css";

function Card({ id, name, body, email }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-no">
          <b>Issue No:</b> {id}
        </h5>
        <p className="card-title">
          <b>Issue:</b> {name}
        </p>
        <hr></hr>
        <br />
        <p className="card-desc">
          <b>Issue Description:</b> {body.substring(0, 75)}...
        </p>
      </div>
      <p className="card-owner">{email} </p>
      <span
        className={
          Math.floor(Math.random() * (10 - 1) + 1) % 2 === 0
            ? "status active"
            : "status deactive"
        }
      ></span>
    </div>
  );
}

export default Card;
