function solve(num1, num2, operator) {
  let result = calculator(num1, num2, operator);
  console.log(result);

  function calculator(num1, num2, operator) {
    let sum = 0;

    if (operator == "add") {
      sum = num1 + num2;
    } else if (operator == "subtract") {
      sum = num1 - num2;
    } else if (operator == "multiply") {
      sum = num1 * num2;
    } else if (operator == "divide") {
      sum = num1 / num2;
    }

    return sum;
  }
}

solve(2, 3, "multiply");
