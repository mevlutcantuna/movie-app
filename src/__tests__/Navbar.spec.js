import { screen } from "@testing-library/react";
import Navbar from "../components/navbar/";
import { renderWithRedux } from "../testUtils";
import userEvent from "@testing-library/user-event";

describe("Navbar Tests", () => {
  it("should render navbar component", () => {
    renderWithRedux(<Navbar />);
    const searchInput = screen.getByLabelText(/navbar-input/i);
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, "orphia");
    expect(searchInput).toHaveValue("orphia");
  });
});
