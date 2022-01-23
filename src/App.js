import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import MovieDetailPage from "./pages/MovieDetailPage";
import SearchPage from "./pages/SearchPage";
import MainPage from "./pages/MainPage";
import FavouritePage from "./pages/FavouritePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route
          exact
          path="/search?name=can&type=horror&year=2000"
          element={<SearchPage />}
        />
        <Route exact path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/my-favourites" element={<FavouritePage />} />
      </Routes>
    </div>
  );
}

export default App;
