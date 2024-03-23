import React, { useState } from "react";

function Filter({ paintings, setFilteredPaintings }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const filtered = paintings.filter((painting) =>
      painting.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPaintings(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="filter">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search painting name..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Filter;
