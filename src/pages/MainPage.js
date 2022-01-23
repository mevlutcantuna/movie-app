import Intro from "../components/intro";
import SearchBar from "../components/search-bar";

const MainPage = () => {
  return (
    <div style={{ position: "relative" }}>
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
      <div style={{ marginTop: "3rem" }}>Popular Movies Part</div>
    </div>
  );
};

export default MainPage;
