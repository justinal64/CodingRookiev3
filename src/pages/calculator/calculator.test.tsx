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

// Tomorrow look into https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme
it("Calculator Component", () => {
  // const wrapper = shallow(<Calculator />);
  const wrapper = mount(shallow(<Calculator />).get(0));
  console.log("wrapper: ", wrapper);

  // this will output the html structure of the component
  // console.log(wrapper.debug());

  // wrapper.find("input.input0").simulate("change", {
  //   target: { value: 1 }
  // });
  // const usernameInput = wrapper.find("input.input0");
  // usernameInput.instance().value = "correctUsername";
  // usernameInput.simulate("change");

  // wrapper.find("input.input0").instance().value = 1;

  // wrapper.find("input.input1").simulate("change", {
  //   target: { value: 2 }
  // });

  // expect(wrapper.find("input.input0").state.value).toEqual(1);
  expect(wrapper.exists()).toBe(true);
});
