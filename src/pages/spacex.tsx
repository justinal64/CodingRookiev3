import React, { useEffect } from "react";
import { useFetch } from "../components/customHooks/useFetch/useFetch";

export const SpaceX = () => {
  const data = useFetch();
  let dataFromApi = "";

  if (data) {
    data.map((ele: any) => {
      dataFromApi = `Hi my first name is ${
        ele.first_name
      } and my last name is ${ele.last_name} `;
    });
  }

  return (
    <div>
      <h2>SpaceX</h2>
      {dataFromApi}
    </div>
  );
};
