let Add = (num, num2) => {
  // I have to use type :any to show the bug
  return num + num2;
};

let Subtract = (num, num2) => {
  return num - num2;
};

let Multiply = (num, num2) => {
  return num * num2;
};

let Divide = (num, num2) => {
  return num / num2;
};

export { Add, Subtract, Multiply, Divide };
