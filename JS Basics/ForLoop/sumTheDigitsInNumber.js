function sumEachDigitInNumber(number) {
  let sum = 0;

  for (let index = 0; index < number.length; index++) {
    let currentDigit = Number(number[index]);

    sum += currentDigit;
  }

  console.log(`Sum of the digits is: ${sum}`);
}

sumEachDigitInNumber("564891");
