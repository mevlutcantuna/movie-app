import BackNavbar from "../components/back-navbar";
import { useParams } from "react-router-dom";
import { getMoviesApi } from "../utils/api";
import { useEffect, useState } from "react";
import DetailMovieCard from "../components/detail-movie-card";
import RelatedMovies from "../components/related-movies";
import { useDispatch } from "react-redux";
import { getRelatedMovies } from "../store/actions/constant-movies";

const MovieDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [movieDetail, setMovieDetail] = useState();

  const getMovieDetail = async () => {
    const response = await getMoviesApi(
      `${params.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    );
    setMovieDetail(response.data);
  };

  useEffect(() => {
    getMovieDetail();
    dispatch(getRelatedMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div>
      <BackNavbar
        where={movieDetail?.original_title}
        go={{ name: "Home", path: "/" }}
      />
      <DetailMovieCard movie={movieDetail} />
      <RelatedMovies />
    </div>
  );
};

export default MovieDetailPage;
