function factorial(number) {
  let num = Number(number);
  let factorial = 1;

  for (let index = 1; index <= num; index++) {
    factorial *= index;
  }

  console.log(factorial);
}

factorial("4");
