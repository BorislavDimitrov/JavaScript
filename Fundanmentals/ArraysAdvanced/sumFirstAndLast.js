function solve(numbers) {
  let firstElement = Number(numbers.shift());
  let lastElement = Number(numbers.pop());
  let sum = firstElement + lastElement;

  console.log(sum);
}

solve(["20", "30", "40"]);
