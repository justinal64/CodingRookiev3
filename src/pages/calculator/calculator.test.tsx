import React from "react";
import ReactDOM from "react-dom";
import { Calculator } from "./calculator";
import { mount, shallow, render } from "enzyme";

// Ensures that the component renders
// shallow/exists are part of enzyme
// .toBe is from jest
it("Calculator Component", () => {
  const wrapper = shallow(<Calculator />);
  expect(wrapper.exists()).toBe(true);
});

it("Calculator Component", () => {
  const wrapper = shallow(<Calculator />);
  expect(wrapper.exists()).toBe(true);
});
