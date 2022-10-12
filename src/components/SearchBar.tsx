import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSubmit, onChange }: any) {
  return (
    <div className="search-bar container">
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button type="submit" style={{ cursor: "pointer" }}>
          <FaSearch />
        </button>
      </form>
    </div>
  );
}
