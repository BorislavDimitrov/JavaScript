function sumEvenNumbers(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let currentNumber = Number(array[i]);

    if (currentNumber % 2 === 0) {
      sum += currentNumber;
    }
  }

  console.log(sum);
}

sumEvenNumbers(["3", "5", "7", "9"]);
