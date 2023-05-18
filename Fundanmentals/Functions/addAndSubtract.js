function solve(num1, num2, num3) {
  let sumResult = sum(num1, num2);
  let subtractResult = subtract(sumResult, num3);

  console.log(subtractResult);

  function sum(num1, num2) {
    return num1 + num2;
  }

  function subtract(num1, num2) {
    return num1 - num2;
  }
}

solve(1, 17, 30);
