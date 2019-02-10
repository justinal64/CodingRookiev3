import React, { useState, useEffect } from "react";

type operator = "add" | "subtract" | "multiply" | "divide";

interface Props {
  values: number[];
  operator: operator;
}

export function useMath(values: number[], operator: operator) {
  const [answer, setAnswer] = useState(0);

  const mathAnswerSet = (newValue: number) => setAnswer(newValue);

  let add = (val: number[]) => {
    mathAnswerSet(
      val.reduce((accumulator, currentValue) => accumulator + currentValue)
    );
  };

  let subtract = (val: number[]) => {
    mathAnswerSet(
      val.reduce((accumulator, currentValue) => accumulator - currentValue)
    );
  };

  useEffect(() => {
    calculate(values, operator);
  });

  let calculate = (val: number[], operator: operator) => {
    let value: number;
    switch (operator) {
      case "add":
        add(val);
        break;
      case "divide":
        // divide function
        break;
      case "multiply":
        // mul function
        break;
      case "subtract":
        subtract(val);
        break;
    }
  };
  return answer;
}
