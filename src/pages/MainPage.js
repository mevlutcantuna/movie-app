import Intro from "../components/intro";
import SearchBar from "../components/search-bar";
import PopularMovies from "../components/popular-movies";

const MainPage = () => {
  return (
    <div style={{ position: "relative", marginBottom: "2rem" }}>
      <Intro />
      <div
        style={{
          position: "absolute",
          top: "27.5rem",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <SearchBar />
      </div>
      <div>
        <PopularMovies />
      </div>
    </div>
  );
};

export default MainPage;
