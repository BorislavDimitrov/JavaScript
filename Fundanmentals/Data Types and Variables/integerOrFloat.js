function integerOrFloat(number1, number2, number3) {
  let sum = number1 + number2 + number3;

  let isInt = Number.isInteger(sum);

  if (isInt) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}

integerOrFloat(100, 200, 303);
