function solve(number) {
  let sum = 0;
  let numberDuplicate = number;

  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }

  if (number == sum) {
    console.log(`We have a perfect number !`);
  } else {
    console.log(`The number is not perfect`);
  }
}

solve(1236498);
