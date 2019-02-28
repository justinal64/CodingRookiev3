import React, { useEffect, useState } from "react";
import { useFetch } from "../components/customHooks/useFetch/useFetch";

export const SpaceX = () => {
  const data = useFetch();

  let tester = () => {
    return <div>Hi!!!!</div>;
  };

  return (
    <div>
      <h2>SpaceX</h2>
      {Object.keys(data || {}).map((element: any, index) => {
        return (
          <div key={index}>
            <a href={data[element]}>{data[element]}</a>
          </div>
        );
      })}
    </div>
  );
};
