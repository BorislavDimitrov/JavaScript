function solve(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let currentElement = numbers[i];
    let indexToChekAfter = i + 1;
    while (indexToChekAfter < numbers.length) {
      let checkIndex = numbers.indexOf(currentElement, indexToChekAfter);

      if (checkIndex !== -1) {
        numbers.splice(checkIndex, 1);
      }

      indexToChekAfter++;
    }
  }

  console.log(numbers);
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
