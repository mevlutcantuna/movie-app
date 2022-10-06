import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { renderWithRedux } from "../testUtils";

describe("Home Page Tests", () => {
  it("should search movies in navbar input", async () => {
    renderWithRedux(<App />);

    const movieName = "Orphan: First Kill";
    const navSearchInput = screen.getByLabelText("navbar-input");
    userEvent.type(navSearchInput, `${movieName}{enter}`);

    expect(await screen.findByText(movieName)).toBeInTheDocument();
  });
});
