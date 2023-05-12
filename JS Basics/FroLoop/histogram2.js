function histogram(input) {
  let n = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let numbers = 0;

  for (let index = 1; index <= n; index++) {
    let currentNumber = Number(input[index]);

    if (currentNumber % 2 == 0) {
      p1++;
    }

    if (currentNumber % 3 == 0) {
      p2++;
    }

    if (currentNumber % 4 == 0) {
      p3++;
    }

    numbers++;
  }

  let p1Percent = (p1 / numbers) * 100;
  let p2Percent = (p2 / numbers) * 100;
  let p3Percent = (p3 / numbers) * 100;

  console.log(`${p1Percent.toFixed(2)}%`);
  console.log(`${p2Percent.toFixed(2)}%`);
  console.log(`${p3Percent.toFixed(2)}%`);
}

histogram();
