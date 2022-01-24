import BackNavbar from "../components/back-navbar";
import { useSelector } from "react-redux";
import MovieCard from "../components/movie-card";

const FavouritePage = () => {
  const favourites = useSelector((state) => state.favouriteReducer.favourites);

  return (
    <div>
      <BackNavbar where={"Favourites"} go={{ name: "Home", path: "/" }} />
      <div
        style={{
          marginLeft: "18%",
          marginRight: "18%",
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        Favorites
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "16%",
          marginRight: "10%",
        }}
      >
        {favourites?.map((movie) => (
          <MovieCard movie={movie} key={movie?.id} />
        ))}
      </div>
    </div>
  );
};

export default FavouritePage;
