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

  return (
    <div className="calculator">
      <div>
        <h2>Calculator working correctly</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (IsNumber(input0, input1)) Add(input0, input1);
          }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (IsNumber(input0, input1)) Subtract(input0, input1);
          }}
        >
          Subtract
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (IsNumber(input0, input1)) Multiply(input0, input1);
          }}
        >
          Multiply
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (IsNumber(input0, input1)) Divide(input0, input1);
          }}
        >
          Divide
        </Button>
        <div>
          <input
            className="input0"
            value={input0}
            onChange={e => {
              if (e.target.value) setInput0(parseInt(e.target.value));
            }}
          />
          <input
            className="input1"
            value={input1}
            onChange={e => {
              if (e.target.value) setInput1(parseInt(e.target.value));
            }}
          />
        </div>
      </div>
      <div>
        <div>
          {/* Do not use the validateInput function with this section */}
          <h2>Calculator with bugs</h2>
          <Button
            variant="contained"
            color="primary"
            onClick={() => Add(input2, input3)}
          >
            Add
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => Subtract(input2, input3)}
          >
            Subtract
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => Multiply(input2, input3)}
          >
            Multiply
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => Divide(input2, input3)}
          >
            Divide
          </Button>
          <div>
            <input
              value={input2}
              onChange={e => {
                setInput2(e.target.value);
              }}
            />
            <input value={input3} onChange={e => setInput3(e.target.value)} />
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
