import {render,screen} from "@testing-library/react";
import MainPage from '../pages/MainPage'
import {Provider} from "react-redux";
import store from "../store";
import {BrowserRouter} from "react-router-dom";

const Setup = () => {
    return <Provider store={store}>
        <BrowserRouter>
            <MainPage/>
        </BrowserRouter>
    </Provider>
}

describe('Main Page Tests', () => {

    it('should render main page',() => {
        render(<Setup/>)
        screen.getByText(/welcome to/i).toBeInTheDocument()
    })
});