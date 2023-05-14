function sumOfDigits(number) {
  let sum = 0;

  while (number !== 0) {
    let currentDigit = number % 10;
    sum += currentDigit;
    number = parseInt(number / 10);
  }

  console.log(sum);
}

sumOfDigits(97561);
