import React from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/searchBar.scss";

function SearchBar({ onSubmit }: any, ref: React.LegacyRef<HTMLInputElement>) {
  return (
    <div className="search-bar-container">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Search..." ref={ref} />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default React.forwardRef(SearchBar);
