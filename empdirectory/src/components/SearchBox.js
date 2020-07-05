import React from 'react';
import "../styles/SearchBox.css";

function SearchBox({ handleSearchChange }) {
  return (
    <div className="searchbox">
      <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Search
            </span>
          </div>
          <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="name"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
        </div>
    </div>
  );
}
  export default SearchBox;
  