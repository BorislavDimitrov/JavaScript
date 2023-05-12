function solve(input) {
  let num = Number(input[0]);
  let previousNumber = 1;

  while (previousNumber < num) {
    console.log(previousNumber);
    previousNumber = previousNumber * 2 + 1;
  }
}

solve([""]);
