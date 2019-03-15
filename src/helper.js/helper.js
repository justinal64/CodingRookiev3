const Add = (num, num2) => {
  let val = isNaN(parseFloat(num)) ? 0 : parseFloat(num);
  let val2 = isNaN(parseFloat(num2)) ? 0 : parseFloat(num2);
  return parseFloat(val) + parseFloat(val2);
};

// const Add = (num, num2) => {
//   return num + num2;
// };

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
    console.log("did this get called?");
    return error;
  });
  let data;
  if (response.ok) data = response.json();
  else data = "I think the url is wrong...";
  return data;
};

export { Add, Subtract, Multiply, Divide, IsNumber, GetData };
