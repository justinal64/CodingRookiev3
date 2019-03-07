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
});

describe("Counter with React test utils", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  act(() => {
    ReactDOM.render(<Calculator />, container);
  });

  const buttons = container.querySelectorAll("button");
  const spans = container.querySelectorAll("span");
  const [increaseButton, decreaseButton] = buttons;
  const [label, count] = spans;

  xit("renders and has initial count", () => {
    expect(label.textContent).toEqual("Count");
    expect(count.textContent).toEqual("0");
  });

  xit("increases the count", () => {
    act(() => {
      increaseButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(count.textContent).toEqual("1");
  });

  xit("decreases the count", () => {
    act(() => {
      decreaseButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(count.textContent).toEqual("0");
  });
});
