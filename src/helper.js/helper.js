const Add = (num, num2) => {
  // I have to use type :any to show the bug
  return num + num2;
};

const Subtract = (num, num2) => {
  return num - num2;
};

const Multiply = (num, num2) => {
  return num * num2;
};

const Divide = (num, num2) => {
  return num / num2;
};

// function to check data
const IsNumber = (num, num2) => {
  if (!isNaN(num) && !isNaN(num2)) {
    return true;
  } else {
    return false;
  }
};

const GetData = async url => {
  const response = await fetch(
    url || "https://api.spacexdata.com/v3/launches/latest",
    {}
  ).catch(error => {
    console.log("error = ", error.response);
    return error;
  });
  const json = await response.json();
  return json;
};

export { Add, Subtract, Multiply, Divide, IsNumber, GetData };
