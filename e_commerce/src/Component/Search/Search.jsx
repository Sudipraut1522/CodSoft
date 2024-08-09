import React, { useState } from "react";
import "../Search/Search.css";
import { FiSearch } from "react-icons/fi";
import { data } from "../../Dummy data/Data";

const Search = () => {
  const [search, setSearch] = useState("");

  const searchItem = data?.filter((item) =>
    item.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-container">
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
      {search && ( // Check if search is not empty
        <div className="search-results">
          {searchItem.length > 0 ? (
            searchItem.map((item, index) => (
              <div key={index} className="search-item">
                <p>{item.productName}</p>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
