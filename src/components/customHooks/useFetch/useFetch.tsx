import React, { useState, useEffect } from "react";

export interface jsondata {
  username?: string;
  first_name?: string;
  last_name?: string;
  kids?: number;
  spouse?: string;
  missions?: {
    name?: string;
    flight?: number;
  };
  details?: string;
}

let jsonData: jsondata[] = [
  {
    username: "",
    first_name: "",
    last_name: "",
    kids: 0,
    spouse: "",
    missions: {
      name: "",
      flight: 0
    },
    details: ""
  }
];

export function useFetch() {
  const [data, setData] = useState(null);

  const setSpacexData = (newData: any) => setData(newData);

  useEffect(() => {
    fetch("data.json") // runs command from the public folder.
      .then(res => res.json())
      .then(data => {
        setSpacexData(data);
      });
  }, []);

  return data;
}
