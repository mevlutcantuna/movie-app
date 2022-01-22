import {SEARCH_MOVIE_ERROR, SEARCH_MOVIE_LOADING, SEARCH_MOVIE_SUCCESS} from "../constants/search";

const initialState = {
    searchedMovies:[],
    type:"",
    year:"",
    name:"",
}

const Search = (state=initialState,action) => {
    switch (action.type) {
        case SEARCH_MOVIE_SUCCESS:
            return {...state};
        case SEARCH_MOVIE_LOADING:
            return {...state};
        case SEARCH_MOVIE_ERROR:
            return {...state};
        default:
            return {...state};
    }
}

export default Search;