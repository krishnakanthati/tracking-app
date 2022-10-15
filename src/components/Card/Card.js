import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Trai Cluster Issue</h5>
        <p className="card-desc">
          Issue: The Trai Cluster is in the unhealthy state
        </p>
      </div>
      <button className="card-btn">View Related Docx</button>
    </div>
  );
}

export default Card;
