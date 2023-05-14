function calculator(number1, operation, number2) {
  let num1 = Number(number1);
  let num2 = Number(number2);
  let sum = 0;

  if (operation === "+") {
    sum = num1 + num2;
  } else if (operation === "-") {
    sum = num1 - num2;
  } else if (operation === "*") {
    sum = num1 * num2;
  } else if (operation === "/") {
    sum = num1 / num2;
  }

  console.log(`${sum.toFixed(2)}`);
}

calculator(5, "+", 10);
