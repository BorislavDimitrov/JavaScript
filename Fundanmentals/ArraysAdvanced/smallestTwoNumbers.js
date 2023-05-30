function solve(numbers) {
  let sortedNumbers = numbers.sort((a, b) => a - b);
  let smallest = sortedNumbers.slice(0, 2);

  console.log(smallest);
}

solve([3, 0, 10, 4, 7, 3]);
