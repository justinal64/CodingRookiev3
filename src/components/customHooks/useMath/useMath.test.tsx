import React from "react";
import ReactDOM, { render } from "react-dom";
import { useMath } from "./useMath";

// this is completely wrong... watch kentcdodds on youtube now...
it("blah blah blah", () => {
  const result = useMath([1, 2, 3, 4, 5], "add");
  expect(result).toBe(15);
});

// write tests that test the math!!!!!
