export default function SearchBar(props) {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <input
          placeholder="Search Orders"
          className="input"
          value={props.searchBar}
          onChange={(e) => props.handleOnSearchBarChange(e.target.value)}
        />
        <div className="img-wrapper">
          <img src="" className="search-img"></img>
        </div>
      </div>
    </div>
  );
}
