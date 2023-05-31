function solve(numbers) {
  let sorted = [];
  let isBiggest = true;

  while (numbers.length > 0) {
    let numberToAdd = 0;

    if (isBiggest) {
      numberToAdd = Math.max.apply(Math, numbers);
      isBiggest = false;
    } else {
      numberToAdd = Math.min.apply(Math, numbers);
      isBiggest = true;
    }

    let indexToDelete = numbers.indexOf(numberToAdd);
    numbers.splice(indexToDelete, 1);

    sorted.push(numberToAdd);
  }

  console.log(sorted);
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
