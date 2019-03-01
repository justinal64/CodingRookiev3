import React, { useState } from "react";
import { useMath } from "../../components/customHooks/useMath/useMath";
import { Button, TextField } from "@material-ui/core";
import "../../styles/Calculator.css";

export const Calculator = () => {
  // const number = useMath([1, 2, 3, 4, 5], "add");
  const [input0, setInput0] = useState(0);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  let Add = () => {
    console.log("You clicked the add button");
    console.log("input0 + input0 =  ", input0 + input1);
  };

  let Subtract = () => {
    console.log("You clicked the Subtract button");
    console.log("input0 - input0 =  ", input0 - input1);
  };

  let Multiply = () => {
    console.log("You clicked the Multiple button");
  };

  let Divide = () => {
    console.log("You clicked the Divide button");
  };

  // function to check data
  let verifyInput = () => {
    // this function should test that the data is a valid number if not return 0
  };

  return (
    <div>
      <div>
        <h2>Calculator working correctly</h2>
        <Button variant="contained" color="primary" onClick={Add}>
          Add
        </Button>
        <Button variant="contained" color="primary" onClick={Subtract}>
          Subtract
        </Button>
        <Button variant="contained" color="primary" onClick={Multiply}>
          Multiply
        </Button>
        <Button variant="contained" color="primary" onClick={Divide}>
          Divide
        </Button>
        <div>
          <input
            value={input0}
            onChange={(e: any) => {
              setInput0(parseInt(e.target.value));
            }}
          />
          <input
            value={input1}
            onChange={(e: any) => setInput1(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div>
        <div>
          {/* Do not use the validateInput function with this section */}
          <h2>Calculator with bugs</h2>
          <Button variant="contained" color="primary" onClick={Add}>
            Add
          </Button>
          <Button variant="contained" color="primary" onClick={Subtract}>
            Subtract
          </Button>
          <Button variant="contained" color="primary" onClick={Multiply}>
            Multiply
          </Button>
          <Button variant="contained" color="primary" onClick={Divide}>
            Divide
          </Button>
        </div>
      </div>
    </div>
  );
};
