import React, { useEffect } from "react";
import { useFetch } from "../components/customHooks/useFetch/useFetch";

export const SpaceX = () => {
  const data = useFetch();

  if (data) {
    // console.log(data);
    // console.log(data["details"]);
    // Object.keys(data).forEach((element: any) => {
    //   console.log(data[element]);
    // });
  }

  let test = () => {
    Object.keys(data || {}).map((element: any) => {
      console.log("element: ", data[element]);
      return <div>{data[element]}</div>;
    });
  };

  return (
    <div>
      <h2>SpaceX</h2>
      {Object.keys(data || {}).map((element: any) => {
        console.log("element: ", data[element]);
        return (
          <div>
            <a href={data[element]} key={data[element]}>
              {data[element]}
            </a>
          </div>
        );
      })}
    </div>
  );
};
