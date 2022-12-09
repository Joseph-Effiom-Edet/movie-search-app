import React from "react";
import "./search.scss";

function search({ setSearchValue }) {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <div className="input-section">
          <label htmlFor="">Search</label>
          <input
            type="text"
            placeholder="Avengers"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default search;
