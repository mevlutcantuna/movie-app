import "./style.scss";

import ArrowRight from "../../assets/arrow-right.svg";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <select className="search-bar_type">
        <option>Movie</option>
        <option>Series</option>
      </select>
      <input
        placeholder="Year"
        className="search-bar_year"
        type="number"
        max={2022}
        min={1000}
        defaultValue={2010}
      />
      <input
        placeholder="Enter movie name here"
        className="search-bar_name"
        type="text"
      />
      <button className="search-bar_button">
        <span>Search</span> <img src={ArrowRight} alt="arrow-right" />
      </button>
    </div>
  );
};

export default SearchBar;
