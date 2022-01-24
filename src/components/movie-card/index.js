import "./style.scss";

import NoMovie from "../../assets/no-movie.png";
import IMDB from "../../assets/IMDB-icon.svg";
import Favourite from "../../assets/favourite.svg";
import UnFavourite from "../../assets/unfavourite.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourite,
  removeFromFavourite,
} from "../../store/actions/favourite";

const MovieCard = ({ movie }) => {
  const [isAdded, setIsAdded] = useState();
  const favourites = useSelector((state) => state.favouriteReducer.favourites);

  const dispatch = useDispatch();

  const addToFav = () => {
    dispatch(addToFavourite(movie));
  };

  const removeFromFav = () => {
    dispatch(removeFromFavourite(movie?.id));
  };

  useEffect(() => {
    setIsAdded(favourites?.some((item) => item.id === movie.id));
  }, [isAdded, favourites, movie.id]);
  return (
    <div className="movie-card">
      <div className="movie-card_img-logo">
        <img
          className="movie-card_image"
          src={
            movie?.poster_path
              ? "https://image.tmdb.org/t/p/w185" + movie?.poster_path
              : NoMovie
          }
          alt="no-movie"
        />
        <div className="movie-card_fav-buttons">
          {isAdded ? (
            <img onClick={removeFromFav} src={UnFavourite} alt="un-favorite" />
          ) : (
            <img onClick={addToFav} src={Favourite} alt="favourite" />
          )}
        </div>
      </div>
      <div className="movie-card_imdb">
        <img src={IMDB} alt="imdb" />
        <span>{movie?.vote_average}</span>
      </div>
      <div className="movie-card_year">{movie?.release_date.slice(0, 4)}</div>
      <div className="movie-card_title">{movie?.original_title}</div>
      <div className="movie-card_summary">{movie?.overview}</div>
    </div>
  );
};

export default MovieCard;
