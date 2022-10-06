import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store/";
import { render } from "@testing-library/react";

export const renderWithRedux = (ui) => {
  render(
    <BrowserRouter>
      <Provider store={store}>{ui}</Provider>
    </BrowserRouter>
  );
};
