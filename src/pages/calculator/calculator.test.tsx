import React from "react";
import ReactDOM from "react-dom";
import { Calculator } from "./calculator";
import { mount, shallow, render } from "enzyme";
import { act } from "react-dom/test-utils";

// Ensures that the component renders
// shallow/exists are part of enzyme
// .toBe is from jest

// Tomorrow look into https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme

describe("Calculator with React test utils", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Calculator />, container);
  });

  const inputs = container.querySelectorAll("input");
  const buttons = container.querySelectorAll("button");
  const result = container.querySelector("div.result p span");

  const [input0, input1] = inputs;
  const [add] = buttons;

  it("Calculator Component", () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Should render complete html", () => {
    const wrapper = shallow(<Calculator />);
    expect(
      render(<Calculator />)
        .find(".result")
        .text()
    ).toBe("Result is 0");
  });

  it("change input values", () => {
    input0.value = 1;
    input1.value = 1;

    expect(input0.value).toEqual("1");
    expect(input1.value).toEqual("1");
  });

  it("add function working", () => {
    const wrapper = mount(<Calculator />);
    const button = wrapper.find("button").at(0);
    input0.value = 1;
    input1.value = 1;
    // neither one works
    // button.simulate("click");

    // button.props().onClick();

    // wrapper
    // .find(".add")
    // .at(0)
    // .simulate("click");

    // act(() => {
    //   add.dispatchEvent(new MouseEvent("click"));
    // });

    // console.log(calculator.debug());
    expect(input0.value).toEqual("1");
    expect(input1.value).toEqual("1");
    expect(result.textContent).toEqual("2");
  });

  xit("subtract function working", () => {
    input0.value = 1;
    input1.value = 1;

    expect(input0.value).toEqual("1");
    expect(input1.value).toEqual("1");

    act(() => {
      add.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(result.textContent).toEqual("2");
  });
});
