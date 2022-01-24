import { useSelector } from "react-redux";
import BackNavbar from "../components/back-navbar";
import MovieCard from "../components/movie-card";
import SearchBar from "../components/search-bar";
import { Link } from "react-router-dom";

import { Spin } from "antd";

const SearchPage = () => {
  const { searchedMovies, searchedMoviesLoading } = useSelector(
    (state) => state.searchReducer
  );

  return (
    <div>
      <BackNavbar where={"Search Results"} go={{ name: "Home", path: "/" }} />
      <div style={{ margin: "0 auto" }}>
        <SearchBar />
      </div>
      <Spin spinning={searchedMoviesLoading}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "3rem 10%",
          }}
        >
          {searchedMovies?.length > 0 ? (
            searchedMovies?.map((movie) => (
              <MovieCard movie={movie} key={movie?.id} />
            ))
          ) : (
            <div>Not Found Movie</div>
          )}
        </div>
      </Spin>
    </div>
  );
};

export default SearchPage;
