import BackNavbar from "../components/back-navbar";

const FavouritePage = () => {
  return (
    <div>
      <BackNavbar where={"Favourites"} go={{ name: "Home", path: "/" }} />
      Favourite Page
    </div>
  );
};

export default FavouritePage;
