import axios from "axios";

export const getMoviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});

export const searchMoviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie",
});
