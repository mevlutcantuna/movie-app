import {
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_LOADING,
  SEARCH_MOVIE_SUCCESS,
} from "../constants/search";
import { searchMoviesApi } from "../../utils/api";

export const getSearchMovies = (name, year) => async (dispatch) => {
  dispatch({ type: SEARCH_MOVIE_LOADING, payload: true });
  try {
    const response = await searchMoviesApi(
      `?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${name}&page=1&year=${year}`
    );
    dispatch({ type: SEARCH_MOVIE_LOADING, payload: false });
    return dispatch({
      type: SEARCH_MOVIE_SUCCESS,
      payload: response.data.results,
    });
  } catch (err) {
    dispatch({ type: SEARCH_MOVIE_LOADING, payload: false });
    return dispatch({ type: SEARCH_MOVIE_ERROR, payload: err.message });
  }
};
