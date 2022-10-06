import { rest } from "msw";

const url = "https://api.themoviedb.org/3/";

const getSearchMovies = rest.get(
  url +
    `search/movieapi_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&queryOrphan=&page=1&year=`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          vote_average: "6.935",
          original_title: "Orphan: First Kill",
          overview:
            "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at",
          release_date: "2022-07-27",
          genres: [
            { id: "1", name: "Horror" },
            { id: "2", name: "Thriller" },
          ],
        },
      ])
    );
  }
);

const getPopularMovies = rest.get(url + "movie/popular", (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        vote_average: "6.935",
        original_title: "Orphan: First Kill",
        overview:
          "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at",
        release_date: "2022-07-27",
        genres: [
          { id: "1", name: "Horror" },
          { id: "2", name: "Thriller" },
        ],
      },
    ])
  );
});

export const handlers = [getSearchMovies, getPopularMovies];
