import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPopularMovies } from "../../store/actions/constant-movies";
import CarouselItem from "../carousel-item";
import { Carousel } from "@trendyol-js/react-carousel";
import Arrow from "../../assets/arrow-right.svg";

const RightArrow = () => {
  return (
    <div
      style={{
        background: "#f5c518",
        borderRadius: "100%",
        width: "2.5rem",
        height: "2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <img src={Arrow} alt="arrow" />
    </div>
  );
};

const LeftArrow = () => {
  return (
    <div
      style={{
        background: "#f5c518",
        borderRadius: "100%",
        width: "2.5rem",
        height: "2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <img
        style={{
          transform: "scaleX(-1)",
        }}
        src={Arrow}
        alt="arrow"
      />
    </div>
  );
};

const PopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (state) => state.constantMoviesReducer.popularMovies
  );

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  return (
    <div className="popular-movies">
      <div className="popular-movies_title">Popular Movies</div>
      <div className="popular-movies_carousel">
        {popularMovies.length > 0 ? (
          <Carousel
            show={1}
            slide={1}
            infinite={true}
            responsive={true}
            rightArrow={<RightArrow />}
            leftArrow={<LeftArrow />}
          >
            {popularMovies.map((movie) => (
              <CarouselItem movie={movie} key={movie.id} />
            ))}
          </Carousel>
        ) : (
          <div>Not Found Movie</div>
        )}
      </div>
    </div>
  );
};

export default PopularMovies;
