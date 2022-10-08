import { screen } from "@testing-library/react";
import FavouritePage from "../pages/FavouritePage";
import { renderWithRedux } from "../testUtils";

describe("Favourite page tests", () => {
  it("should render favourite page correctly", () => {
    renderWithRedux(<FavouritePage />);
  });
});
