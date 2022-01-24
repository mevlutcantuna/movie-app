import "./style.scss";

import NoMovie from "../../assets/no-movie.png";
import IMDB from "../../assets/IMDB-icon.svg";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        className="movie-card_image"
        src={
          movie?.poster_path
            ? "https://image.tmdb.org/t/p/w185" + movie?.poster_path
            : NoMovie
        }
        alt="no-movie"
      />
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
