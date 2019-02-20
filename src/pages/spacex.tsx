import React from "react";
import { useFetch } from "../components/customHooks/useFetch/useFetch";

export const SpaceX = () => {
  const data = useFetch("add");
  console.log("data: ", data); // data is logging to the console. Now get it showing up on screen.

  return <div>{/* {data}<h2>SpaceX</h2> */}</div>;
};
