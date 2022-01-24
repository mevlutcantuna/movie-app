import "./style.scss";

import ArrowRight from "../../assets/arrow-right.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovies } from "../../store/actions/search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [year, setYear] = useState(2010);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchedMoviesError } = useSelector((state) => state.searchReducer);

  const handleChangeYear = (e) => {
    setYear(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const searchMovie = () => {
    if (!name || !year) {
      return alert("please fill out all inputs");
    }
    dispatch(getSearchMovies(name, year));
    if (searchedMoviesError) {
      return alert("An Error Occurred...");
    }
    navigate("../search");
  };

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
        value={year}
        onChange={handleChangeYear}
      />
      <input
        placeholder="Enter movie name here"
        className="search-bar_name"
        type="text"
        value={name}
        onChange={handleChangeName}
      />
      <button className="search-bar_button" onClick={searchMovie}>
        <span>Search</span> <img src={ArrowRight} alt="arrow-right" />
      </button>
    </div>
  );
};

export default SearchBar;
