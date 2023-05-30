function solve(arr) {
  let k = arr.shift();

  let firstElements = arr.slice(0, k);
  let lastElements = arr.slice(-k);

  console.log(firstElements);
  console.log(lastElements);
}

solve([3, 6, 7, 8, 9]);
