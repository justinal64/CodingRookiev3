import React from "react";

type operator = "add" | "subtract" | "multiply" | "divide";

interface Props {
  values: number[];
  operator: operator;
}

export function Math(props: Props) {
  const { values, operator } = props;

  let add = (val: number[]) => {
    return val.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  };

  let subtract = (val: number[]) => {
    return val.reduce(
      (accumulator, currentValue) => accumulator - currentValue
    );
  };

  let calculate = (val: number[], operator: operator) => {
    switch (operator) {
      case "add":
        return add(val);
      case "divide":
        // divide function
        break;
      case "multiply":
        // mul function
        break;
      case "subtract":
        return subtract(val);
    }
  };
  return (
    <h1>
      values are {values} and operator is {operator} and the answer =
      {calculate(values, operator)}
    </h1>
  );
}
