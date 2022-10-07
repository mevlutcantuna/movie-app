import { rest } from "msw";

const getSearchMovies = rest.get(
  "https://api.themoviedb.org/3/movie/search",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        page: 1,
        results: [
          {
            adult: false,
            backdrop_path: "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
            genre_ids: [27, 53],
            id: 760161,
            original_language: "en",
            original_title: "Orphan: First Kill",
            overview:
              "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
            popularity: 4909.815,
            poster_path: "/l8WZDmjJCxOhGToTlhO6l9YAytr.jpg",
            release_date: "2022-07-27",
            title: "Orphan: First Kill",
            video: false,
            vote_average: 6.9,
            vote_count: 884,
          },
        ],
      })
    );
  }
);

const getPopularMovies = rest.get(
  "https://api.themoviedb.org/3/movie/popular",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        page: 1,
        results: [
          {
            adult: false,
            backdrop_path: "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
            genre_ids: [27, 53],
            id: 760161,
            original_language: "en",
            original_title: "Orphan: First Kill",
            overview:
              "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
            popularity: 4909.815,
            poster_path: "/l8WZDmjJCxOhGToTlhO6l9YAytr.jpg",
            release_date: "2022-07-27",
            title: "Orphan: First Kill",
            video: false,
            vote_average: 6.9,
            vote_count: 884,
          },
          {
            adult: false,
            backdrop_path: "/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg",
            genre_ids: [28, 35, 53],
            id: 718930,
            original_language: "en",
            original_title: "Bullet Train",
            overview:
              "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
            popularity: 4639.566,
            poster_path: "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
            release_date: "2022-07-03",
            title: "Bullet Train",
            video: false,
            vote_average: 7.5,
            vote_count: 1469,
          },
          {
            adult: false,
            backdrop_path: "/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
            genre_ids: [53],
            id: 985939,
            original_language: "en",
            original_title: "Fall",
            overview:
              "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
            popularity: 4335.648,
            poster_path: "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
            release_date: "2022-08-11",
            title: "Fall",
            video: false,
            vote_average: 7.4,
            vote_count: 1259,
          },
          {
            adult: false,
            backdrop_path: "/rgZ3hdzgMgYgzvBfwNEVW01bpK1.jpg",
            genre_ids: [28, 53],
            id: 429473,
            original_language: "en",
            original_title: "Lou",
            overview:
              "A young girl is kidnapped during a powerful storm. Her mother joins forces with her mysterious neighbour to set off in pursuit of the kidnapper. Their journey will test their limits and expose the dark secrets of their past.",
            popularity: 3198.707,
            poster_path: "/djM2s4wSaATn4jVB33cV05PEbV7.jpg",
            release_date: "2022-09-23",
            title: "Lou",
            video: false,
            vote_average: 6.5,
            vote_count: 187,
          },
        ],
        total_pages: 35355,
        total_results: 707096,
      })
    );
  }
);

export const handlers = [getSearchMovies, getPopularMovies];
