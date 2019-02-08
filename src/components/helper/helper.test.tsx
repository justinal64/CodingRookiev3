import React from "react";
import ReactDOM from "react-dom";
import { Math } from "./helper";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Math values={[1, 2, 3, 4, 5]} operator="add" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// write tests that test the math!!!!!
