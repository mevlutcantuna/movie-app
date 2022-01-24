import {
  GET_POPULAR_MOVIES_ERROR,
  GET_POPULAR_MOVIES_LOADING,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_RELATED_MOVIES_SUCCESS,
  GET_RELATED_MOVIES_LOADING,
  GET_RELATED_MOVIES_ERROR,
} from "../constants/constant-movies";

const initialState = {
  popularMovies: [],
  popularMoviesError: "",
  popularMoviesLoading: false,
  relatedMovies: [],
  relatedMoviesError: "",
  relatedMoviesLoading: false,
};

const ConstantMovies = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: action.payload,
        relatedMoviesError: "",
      };
    case GET_POPULAR_MOVIES_ERROR:
      return {
        ...state,
        popularMovies: [],
        popularMoviesError: action.payload,
      };
    case GET_POPULAR_MOVIES_LOADING:
      return {
        ...state,
        popularMovies: [],
        popularMoviesLoading: action.payload,
        error: "",
      };
    case GET_RELATED_MOVIES_SUCCESS:
      return {
        ...state,
        relatedMovies: action.payload,
        relatedMoviesError: "",
      };
    case GET_RELATED_MOVIES_ERROR:
      return {
        ...state,
        relatedMovies: [],
        relatedMoviesError: action.payload,
      };
    case GET_RELATED_MOVIES_LOADING:
      return {
        ...state,
        relatedMovies: [],
        relatedMoviesLoading: action.payload,
        error: "",
      };
    default:
      return { ...state };
  }
};

export default ConstantMovies;
