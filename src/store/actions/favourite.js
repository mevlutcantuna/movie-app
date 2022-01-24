import {
  ADD_TO_FAVOURITE,
  REMOVE_TO_FAVOURITE,
  SYNCHRONIZE_LOCAL_AND_REDUCER,
} from "../constants/favourite";

import { errorMessage, successMessage } from "../../helper/message";

export const addToFavourite = (movie) => async (dispatch) => {
  const oldFavs = JSON.parse(localStorage.getItem("favs"));
  let newFavs = [];
  if (oldFavs?.length > 0) {
    newFavs = [...oldFavs, movie];
    const doesContains = oldFavs.some((item) => item?.id === movie?.id);
    if (doesContains) {
      return errorMessage("You already added the movie to favourite...");
    }
    localStorage.setItem("favs", JSON.stringify(newFavs));
    successMessage("You added the movie to favourite...");
    return dispatch({ type: ADD_TO_FAVOURITE, payload: newFavs });
  } else {
    newFavs = [movie];
    localStorage.setItem("favs", JSON.stringify(newFavs));
    successMessage("You added the movie to favourite...");
    return dispatch({ type: ADD_TO_FAVOURITE, payload: newFavs });
  }
};

export const removeFromFavourite = (id) => async (dispatch) => {
  const oldFavs = JSON.parse(localStorage.getItem("favs"));

  const newFavs = oldFavs?.filter((item) => item.id !== id);
  localStorage.setItem("favs", JSON.stringify(newFavs));
  successMessage("The Favourite removed from Favourites...");
  return dispatch({ type: REMOVE_TO_FAVOURITE, payload: newFavs });
};

export const syncLocalAndReducer = () => async (dispatch) => {
  const localStr = JSON.parse(localStorage.getItem("favs"));
  return dispatch({ type: SYNCHRONIZE_LOCAL_AND_REDUCER, payload: localStr });
};
