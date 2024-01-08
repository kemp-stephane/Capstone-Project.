import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from '@testing-library/react'
import Home from './pages/Home'

it("renders app without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

 
it('renders homepage', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})