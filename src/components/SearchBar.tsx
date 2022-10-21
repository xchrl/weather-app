import { FaSearch } from "react-icons/fa";
import "../styles/searchBar.scss";

export default function SearchBar({ onSubmit, onChange }: any) {
  return (
    <div className="search-bar-container">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Search..." onChange={onChange} />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}
