import React from "react";
import { useMath } from "./helper";

type operator = "add" | "subtract" | "multiply" | "divide";

export function HelperPres(values: number[], operator: operator) {
  return useMath(values, operator);
}
