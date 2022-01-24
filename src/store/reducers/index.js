import { combineReducers } from "redux";
import Search from "./search";
import ConstantMovies from "./constant-movies";

export const reducers = combineReducers({
  searchReducer: Search,
  constantMoviesReducer: ConstantMovies,
});
