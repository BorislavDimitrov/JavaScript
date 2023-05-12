function findNumberDivisibleBy9(start, end) {
  let n = Number(start);
  let m = Number(end);
  let sum = 0;
  let numbers = "";

  for (let index = start; index <= end; index++) {
    let currentNumber = index;

    if (currentNumber % 9 == 0) {
      sum += currentNumber;
      numbers += " " + currentNumber;
    }
  }

  console.log(`The sum is: ${sum}`);
  console.log(numbers);
}

findNumberDivisibleBy9("100", "200");
