function greaterNumber(number1, number2) {
  let num1 = Number(number1);
  let num2 = Number(number2);

  if (num1 > num2) {
    console.log(`The Greater number is ${num1}`);
  } else {
    console.log(`The Greater number is ${num2}`);
  }
}

greaterNumber(1, 2);
