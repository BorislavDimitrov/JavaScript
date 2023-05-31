function solve(numbers, info) {
  let numbersToTake = info[0];
  let numbersToRemove = info[1];
  let searchedNumber = info[2];

  numbers = numbers.slice(0, numbersToTake);
  numbers.splice(0, numbersToRemove);

  let countOfNumber = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (searchedNumber === numbers[i]) {
      countOfNumber++;
    }
  }

  console.log(countOfNumber);
}

solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);
