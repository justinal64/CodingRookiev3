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

// function to check data
let IsNumber = (num: number, num2: number) => {
  if (!isNaN(num) && !isNaN(num2)) {
    return true;
  } else {
    return false;
  }
};

export { Add, Subtract, Multiply, Divide, IsNumber };
