import React, { useState } from "react";
import "../Search/Search.css";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const [search, setSearch] = useState("");

  // const searchProduct = data.filter((product)=>product.name.toLowerCase().include(ser))

  return (
    <div className="search">
      <label>
        <FiSearch className="search-icon" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search for an item..."
          className="inputSearch"
        />
      </label>
    </div>
  );
};

export default Search;
