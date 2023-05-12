function printEvenPowerOf2(number) {
  let n = Number(number);
  let result = 1;

  for (let index = 0; index <= n; index += 2) {
    console.log(result);
    result = result * 2 * 2;
  }
}

printEvenPowerOf2(10);
