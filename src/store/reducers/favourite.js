import {
  ADD_TO_FAVOURITE,
  REMOVE_TO_FAVOURITE,
  SYNCHRONIZE_LOCAL_AND_REDUCER,
} from "../constants/favourite";

const initialState = {
  favourites: [],
};

const Favourite = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return { ...state, favourites: action.payload };
    case REMOVE_TO_FAVOURITE:
      return { ...state, favourites: action.payload };
    case SYNCHRONIZE_LOCAL_AND_REDUCER:
      return { ...state, favourites: action.payload };
    default:
      return { ...state };
  }
};

export default Favourite;
