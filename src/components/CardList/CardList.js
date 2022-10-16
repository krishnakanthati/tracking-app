import React from "react";
import Card from "../Card/Card";

function CardList({ info }) {
  const cardComponent = info.map((data, index) => {
    return (
      <Card key={index} id={data.id} name={data.name} website={data.website} />
    );
  });
  return <div className="wrapper">{cardComponent}</div>;
}

export default CardList;
