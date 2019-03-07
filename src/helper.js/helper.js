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

// function to check data
let IsNumber = (num, num2) => {
  if (!isNaN(num) && !isNaN(num2)) {
    return true;
  } else {
    return false;
  }
};

export { Add, Subtract, Multiply, Divide, IsNumber };
