import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import "../../styles/Calculator.css";
import {
  Add,
  Subtract,
  Multiply,
  Divide,
  IsNumber
} from "../../helper.js/helper";
let buggyInitialState: any = 0;

export const Calculator = () => {
  const [input0, setInput0] = useState(0);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(buggyInitialState);
  const [input3, setInput3] = useState(buggyInitialState);
  let [result, setResult] = useState(0);

  const test = () => {
    setInput0(parseInt("1"));
    setInput1(parseInt("1"));
    Result(Add(input0, input1));
  };

  let Result = (value: any) => {
    setResult(value);
  };
  return (
    <div className="calculator">
      <div>
        <h2>Calculator working correctly</h2>
        <button type="button" className="btn btn-success" onClick={test}>
          +
        </button>
        <div>
          <input
            className="input0"
            value={input0}
            onChange={e => {
              if (true) setInput0(parseInt("1"));
            }}
          />
          <input
            className="input1"
            value={input1}
            onChange={e => {
              if (true) setInput1(parseInt("1"));
            }}
          />
        </div>
      </div>
      <div>
        <div>
          {/* Do not use the validateInput function with this section */}
          <h2>Calculator with bug</h2>
          <Button
            variant="contained"
            color="primary"
            onClick={() => Result(Add(input2, input3))}
          >
            Add
          </Button>
          <div>
            <input
              value={input2}
              onChange={e => {
                setInput2(1);
              }}
            />
            <input value={input3} onChange={e => setInput3(1)} />
          </div>
        </div>
        <div className="result">
          <p>
            Result is <span>{result}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
