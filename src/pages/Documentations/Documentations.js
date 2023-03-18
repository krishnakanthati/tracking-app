import React, { useState, useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import "./Documentations.css";

function Documentations() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setInfo(json));
  }, []);
  const [searchfield, setSearchfield] = useState("");
  const filteredSearch = info.filter((data) => {
    return data.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  return (
    <div className="documentations">
      <div className="search-input">
        <input
          placeholder="search issue"
          onChange={onSearchChange}
          className="search-docx"
        />
      </div>
      <div>
        <CardList info={filteredSearch} />
      </div>
    </div>
  );
}

export default Documentations;
