import React, { useState, useEffect } from "react";

export interface jsondata {
  username: string;
  first_name: string;
  last_name: string;
  kids: number;
  spouse: string;
  missions: {
    name: string;
    flight: number;
  };
  details: string;
}

export function useFetch(url: string) {
  const [data, setData] = useState(null);

  const setSpacexData = (newData: any) => setData(newData); // fix any......

  useEffect(() => {
    fetchData("Test");
  }, []);

  let fetchData = (api: string) => {
    fetch("data.json") // runs command from the public folder.
      .then(res => res.json())
      .then(data => {
        console.log("data:", data);
        setSpacexData(data);
      });
  };
  return data;
}
