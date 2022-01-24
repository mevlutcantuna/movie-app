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
      `?api_key=644c8949ded7d68ea2417f06b191df75&language=en-US&query=${name}&page=1&include_adult=false&year=${year}`
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
