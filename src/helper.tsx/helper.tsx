let Add = (num: number, num2: number) => {
  // I have to use type :any to show the bug
  return num + num2;
};

let Subtract = (num: number, num2: number) => {
  return num - num2;
};

let Multiply = (num: number, num2: number) => {
  return num * num2;
};

let Divide = (num: number, num2: number) => {
  return num / num2;
};

export { Add, Subtract, Multiply, Divide };
