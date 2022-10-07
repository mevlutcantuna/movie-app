import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { renderWithRedux } from "../testUtils";

describe("Home Page Tests", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/");
  });

  it("should render home page", () => {
    renderWithRedux(<App />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });

  it("should search movies in navbar input", async () => {
    renderWithRedux(<App />);

    const movieName = "Orphan: First Kill";
    const navSearchInput = screen.getByLabelText("navbar-input");
    userEvent.type(navSearchInput, `${movieName}{enter}`);

    expect(await screen.findByText(movieName)).toBeInTheDocument();
  });

  it("should render popular movies", async () => {
    renderWithRedux(<App />);

    expect(await screen.findByText(/Fall/i)).toBeInTheDocument();
  });
});
