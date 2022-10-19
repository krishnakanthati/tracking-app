import React from "react";
import "./Card.css";
import * as MdIcons from "react-icons/md";

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
      <p className="card-owner">{email}</p>
      <MdIcons.MdDoubleArrow className="popout" title="show more" />
    </div>
  );
}

export default Card;
