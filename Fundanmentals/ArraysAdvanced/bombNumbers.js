function solve(numbers, bomb) {
  let bombNumber = bomb[0];
  let bombPower = bomb[1];

  for (let i = 0; i < numbers.length; i++) {
    let currentElement = numbers[i];

    if (currentElement == "*") {
      continue;
    }

    if (currentElement === bombNumber) {
      numbers[i] = "*";
      let nextIndexesCounter = 0;
      let previousIndexesCounter = 0;

      for (let j = i + 1; j < numbers.length; j++, nextIndexesCounter++) {
        if (nextIndexesCounter === bombPower) {
          break;
        }
        numbers[j] = "*";
      }

      for (let k = i - 1; (k) => 0; k--, previousIndexesCounter++) {
        if (previousIndexesCounter === bombPower) {
          break;
        }
        numbers[k] = "*";
      }
    }
  }

  let finalNums = [];

  for (let i = 0; i < numbers.length; i++) {
    let currentElement = numbers[i];

    if (currentElement !== "*") {
      finalNums.push(currentElement);
    }
  }

  let sum = finalNums.reduce((partialSum, a) => partialSum + a, 0);

  console.log(sum);
}

solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
