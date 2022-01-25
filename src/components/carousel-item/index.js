import "./style.scss";

import { useNavigate } from "react-router-dom";
import IMDB from "../../assets/IMDB-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourite,
  removeFromFavourite,
} from "../../store/actions/favourite";
import IsAddedToFavs from "../../helper/isAddedToFav";

const CarouselItem = ({ movie }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favouriteReducer.favourites);

  const viewDetail = () => {
    navigate(`/movie/${movie?.id}`);
    window.location.reload();
  };

  const addToFav = () => {
    dispatch(addToFavourite(movie));
  };

  const removeFromFav = () => {
    dispatch(removeFromFavourite(movie?.id));
  };

  return (
    <div className="carousel-item">
      <div className="carousel-item_image">
        <img
          alt="poster"
          src={"https://image.tmdb.org/t/p/w185" + movie?.poster_path}
        />
      </div>
      <div className="carousel-item_infos">
        <div className="carousel-item_infos_imdb">
          <img src={IMDB} alt="imdb" />
          <span>{movie?.vote_average}</span>
        </div>
        <div className="carousel-item_infos_year">
          {movie?.release_date.slice(0, 4)}
        </div>
        <div className="carousel-item_infos_title">{movie?.original_title}</div>
        <div className="carousel-item_infos_summary">{movie?.overview}</div>
        <div className="carousel-item_infos_buttons">
          {IsAddedToFavs(favourites, movie) ? (
            <button onClick={removeFromFav}>Remove</button>
          ) : (
            <button onClick={addToFav}>Add Favourite</button>
          )}
          <button onClick={viewDetail}>View Detail</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
