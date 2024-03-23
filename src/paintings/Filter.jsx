import React, { useState } from "react";

import PaintingOne from "../assets/pearl-earring.jpg";

import { Pictures } from "./Pictures";
import "./Filter.css";

function Filter() {
  const [input, setInput] = useState("");

  return (
    <div className="filter">
      <div className="search-content">
        <h2>✦</h2>
        <input
          type="text"
          placeholder="Type to search..."
          className="search"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <h2>✦</h2>
      </div>

      <ul className="list">
        {Pictures.filter(
          (picture) =>
            picture.workName.toLowerCase().includes(input) ||
            picture.workPainter.toLowerCase().includes(input) ||
            picture.workYear.toString().includes(input)
        ).map((picture) => (
          <li key={picture.id} className="pictures">
            <img src={picture.image} className="frames-img" />
            <h4>
              <i>"{picture.workName}"</i>
            </h4>
            <p>
              by {picture.workPainter}, {picture.workYear}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
