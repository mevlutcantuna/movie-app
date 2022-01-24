import { combineReducers } from "redux";
import Search from "./search";
import ConstantMovies from "./constant-movies";
import Favourite from "./favourite";

export const reducers = combineReducers({
  searchReducer: Search,
  constantMoviesReducer: ConstantMovies,
  favouriteReducer: Favourite,
});
