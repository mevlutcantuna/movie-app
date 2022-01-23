import "./style.scss";

import { Link } from "react-router-dom";

import SearchLogo from "../../assets/searchLogo.svg";

const Navbar = () => {
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
      <div className="navbar_search-bar">
        <img src={SearchLogo} alt="search-logo" />
        <input type="text" placeholder="Enter movie name here" />
      </div>
    </div>
  );
};

export default Navbar;
