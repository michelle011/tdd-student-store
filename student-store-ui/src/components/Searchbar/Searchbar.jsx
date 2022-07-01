import "./SearchBar.css";
import Navbar from "../Navbar/Navbar";

export default function SearchBar(props) {
  return (
    <div className="search-bar-section">
      <div className="search-bar" id="search-bar">
        <input
          placeholder="Search"
          className="input"
          value={props.searchBar}
          onChange={(event) =>
            props.handleOnSearchBarChange(event.target.value)
          }
        />
        <div className="search-btn-emoji">🔍</div>
      </div>
    </div>
  );
}
