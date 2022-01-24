import "./style.scss";

import { Link, useNavigate } from "react-router-dom";

import SearchLogo from "../../assets/searchLogo.svg";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovies } from "../../store/actions/search";
import { useState } from "react";

const Navbar = () => {
  const [name, setName] = useState("");
  const searchedMoviesError = useSelector(
    (state) => state.searchReducer.searchedMoviesError
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const searchMovies = (e) => {
    e.preventDefault();
    !name && alert("Please Fill All Inputs...");
    dispatch(getSearchMovies(name, null));
    searchedMoviesError && alert("An Error Occurred...");
    navigate("/search");
    setName("");
  };

  return (
    <div className="navbar">
      <div className="navbar_left">
        <div className="navbar_left_title">
          <span>Movie</span>
          <span>UP</span>
        </div>
        <div className="navbar_left_menu">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/my-favourites">
            <span>Favourite</span>
          </Link>
        </div>
      </div>
      <form onSubmit={searchMovies}>
        <div className="navbar_search-bar">
          <img src={SearchLogo} alt="search-logo" />
          <input
            value={name}
            onChange={handleChangeName}
            type="text"
            placeholder="Enter movie name here"
          />
        </div>
      </form>
    </div>
  );
};

export default Navbar;
