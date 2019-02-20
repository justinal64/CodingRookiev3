import React from "react";
import { useFetch } from "../components/customHooks/useFetch/useFetch";

export const SpaceX = () => {
  const test = useFetch("add");
  console.log("test: ", test);

  return (
    <div>
      {test.map(ele => {
        console.log("ele: ", ele);
        return <div>{ele.length}</div>;
      })}
      <h2>SpaceX</h2>
    </div>
  );
};
