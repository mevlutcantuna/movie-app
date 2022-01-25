import {
  GET_POPULAR_MOVIES_ERROR,
  GET_POPULAR_MOVIES_LOADING,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_RELATED_MOVIES_ERROR,
  GET_RELATED_MOVIES_LOADING,
  GET_RELATED_MOVIES_SUCCESS,
} from "../constants/constant-movies";
import { getMoviesApi } from "../../utils/api";

export const getPopularMovies = () => async (dispatch) => {
  dispatch({ type: GET_POPULAR_MOVIES_LOADING, payload: true });
  try {
    const response = await getMoviesApi(
      `/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    );
    const sortedResponse = response.data.results.slice(0, 6);
    dispatch({ type: GET_POPULAR_MOVIES_LOADING, payload: false });
    return dispatch({
      type: GET_POPULAR_MOVIES_SUCCESS,
      payload: sortedResponse,
    });
  } catch (err) {
    dispatch({ type: GET_POPULAR_MOVIES_LOADING, payload: false });
    return dispatch({ type: GET_POPULAR_MOVIES_ERROR, payload: err.message });
  }
};

export const getRelatedMovies = () => async (dispatch) => {
  dispatch({ type: GET_RELATED_MOVIES_LOADING, payload: true });

  try {
    const response = await getMoviesApi(
      `/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    );
    const sortedResponse = response.data.results.slice(0, 6);
    dispatch({ type: GET_RELATED_MOVIES_LOADING, payload: false });
    return dispatch({
      type: GET_RELATED_MOVIES_SUCCESS,
      payload: sortedResponse,
    });
  } catch (err) {
    dispatch({ type: GET_POPULAR_MOVIES_LOADING, payload: false });
    return dispatch({ type: GET_RELATED_MOVIES_ERROR, payload: err.message });
  }
};
