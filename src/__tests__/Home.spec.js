import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { renderWithRedux } from "../testUtils";

describe("Home Page Tests", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/");
    localStorage.setItem("favs", null);
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
    expect(await screen.findByText(/Orphan: First Kill/i)).toBeInTheDocument();
  });

  it("should add popular movie to favourites", async () => {
    renderWithRedux(<App />);
    expect(await screen.findByText(/Orphan: First Kill/i)).toBeInTheDocument();
    const favButtons = screen.getAllByText(/Add Favourite/i)[0];

    userEvent.click(favButtons);
    const favs = JSON.parse(localStorage.getItem("favs"));
    expect(favs).toHaveLength(1);
  });

  it("should remove popular movie that added to local storage, from local storage", async () => {
    renderWithRedux(<App />);
    expect(await screen.findByText(/Orphan: First Kill/i)).toBeInTheDocument();

    userEvent.click(screen.getAllByText(/Add Favourite/i)[0]);
    expect(JSON.parse(localStorage.getItem("favs"))).toHaveLength(1);

    userEvent.click(screen.getAllByText(/Remove/i)[0]);
    expect(JSON.parse(localStorage.getItem("favs"))).toHaveLength(0);
  });
});
