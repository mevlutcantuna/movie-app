import "./style.scss";

import IMDB from "../../assets/IMDB-icon.svg";
import IsAddedToFav from "../../helper/isAddedToFav";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourite,
  removeFromFavourite,
} from "../../store/actions/favourite";

const DetailMovieCard = ({ movie }) => {
  const favourites = useSelector((state) => state.favouriteReducer.favourites);
  const dispatch = useDispatch();

  const addToFav = () => {
    dispatch(addToFavourite(movie));
  };

  const removeFromFav = () => {
    dispatch(removeFromFavourite(movie?.id));
  };

  return (
    <div className="detail-movie">
      <img
        className="detail-movie_image"
        src={"https://image.tmdb.org/t/p/w185" + movie?.poster_path}
        alt="poster"
      />
      <div className="detail-movie_infos">
        <div className="detail-movie_infos_header">
          <div className="detail-movie_infos_header_left">
            <img src={IMDB} alt="imdb" />
            <span>{movie?.vote_average}</span>
          </div>
          <div className="detail-movie_infos_header_right">
            {IsAddedToFav(favourites, movie) ? (
              <button
                className="detail-movie_infos_header_right_remove-btn"
                onClick={removeFromFav}
              >
                Remove From Favourites
              </button>
            ) : (
              <button
                className="detail-movie_infos_header_right_add-btn"
                onClick={addToFav}
              >
                Add To Favourites
              </button>
            )}
          </div>
        </div>
        <div className="detail-movie_infos_year">
          {movie?.release_date.slice(0, 4)}
        </div>
        <div className="detail-movie_infos_title">{movie?.original_title}</div>
        <div className="detail-movie_infos_summary">{movie?.overview}</div>
        <div className="detail-movie_infos_genres">
          {movie?.genres.map((item) => (
            <div className="detail-movie_infos_genres_item" key={item.id}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailMovieCard;
