function amazingNumbers(number) {
  let numberAsString = number.toString();
  let sum = 0;

  for (let i = 0; i < numberAsString.length; i++) {
    let currentDigit = Number(numberAsString[i]);
    sum += currentDigit;
  }

  numberAsString = sum.toString();

  let isAmazing = numberAsString.includes("9");

  if (isAmazing) {
    console.log(`${number} Amazing? True`);
  } else {
    console.log(`${number} Amazing? False`);
  }
}

amazingNumbers(999);
