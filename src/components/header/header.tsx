import React from "react";

interface Props {
  name: string;
}

export default function Welcome(props: Props) {
  return <h1>Hello, {props.name}</h1>;
}
