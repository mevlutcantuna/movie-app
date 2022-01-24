import {
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_LOADING,
  SEARCH_MOVIE_SUCCESS,
} from "../constants/search";

const initialState = {
  searchedMovies: [],
  searchedMoviesError: "",
  searchedMoviesLoading: false,
};

const Search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_SUCCESS:
      return { ...state, searchedMovies: action.payload, error: "" };
    case SEARCH_MOVIE_LOADING:
      return {
        ...state,
        searchedMovies: [],
        error: "",
        searchedMoviesLoading: action.payload,
      };
    case SEARCH_MOVIE_ERROR:
      return { ...state, searchedMovies: [], error: action.payload };
    default:
      return { ...state };
  }
};

export default Search;
