function solve(numbers) {
  let result = numbers
    .filter((v, i) => i % 2 != 0)
    .map((x) => x * 2)
    .reverse();

  console.log(result);
}

solve([3, 0, 10, 4, 7, 3]);
