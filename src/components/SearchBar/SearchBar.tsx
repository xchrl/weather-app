import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./searchBar.module.scss";

function SearchBar({ onSubmit }: any, ref: React.LegacyRef<HTMLInputElement>) {
  return (
    <div className={styles.searchBar}>
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
