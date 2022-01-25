import "./style.scss";
import Arrow from "../../assets/arrow-right.svg";
import { Carousel } from "@trendyol-js/react-carousel";
import CarouselItem from "../carousel-item";
import { useSelector } from "react-redux";

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

const RelatedMovies = () => {
  const relatedMovies = useSelector(
    (state) => state.constantMoviesReducer.relatedMovies
  );
  return (
    <div className="popular-movies">
      <div className="popular-movies_title">Related Movies</div>
      <div className="popular-movies_carousel">
        {relatedMovies.length > 0 ? (
          <Carousel
            show={1}
            slide={1}
            infinite={true}
            responsive={true}
            rightArrow={<RightArrow />}
            leftArrow={<LeftArrow />}
          >
            {relatedMovies.map((movie) => (
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

export default RelatedMovies;
