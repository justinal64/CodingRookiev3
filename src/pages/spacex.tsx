import React, { useEffect, useState } from "react";
import { useFetch } from "../components/customHooks/useFetch/useFetch";

export const SpaceX = () => {
  const data = useFetch();
  let array = [1, 2, 3, 4, 5];

  let test = (arrayToMap: any) => {
    let result: JSX.Element[] = [];
    {
      Object.keys(data || []).map((element: any, index) => {
        result.push(
          <div key={index}>
            <a href={data[element]}>{data[element]}</a>
          </div>
        );
      });
    }
    return result;
  };

  return (
    <div>
      <h2>SpaceX</h2>
      {test(data)}
    </div>
  );
};
