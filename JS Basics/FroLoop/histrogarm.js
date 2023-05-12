function histogram(input) {
  let n = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  let numbers = 0;

  for (let index = 1; index < input.length; index++) {
    var currentNumber = Number(input[index]);

    if (currentNumber < 200) {
      p1++;
    } else if (currentNumber >= 200 && currentNumber <= 399) {
      p2++;
    } else if (currentNumber >= 400 && currentNumber <= 599) {
      p3++;
    } else if (currentNumber >= 600 && currentNumber <= 799) {
      p4++;
    } else if (currentNumber >= 800) {
      p5++;
    }

    numbers++;
  }

  let p1Percent = (p1 / numbers) * 100;
  let p2Percent = (p2 / numbers) * 100;
  let p3Percent = (p3 / numbers) * 100;
  let p4Percent = (p4 / numbers) * 100;
  let p5Percent = (p5 / numbers) * 100;

  console.log(`${p1Percent.toFixed(2)}%`);
  console.log(`${p2Percent.toFixed(2)}%`);
  console.log(`${p3Percent.toFixed(2)}%`);
  console.log(`${p4Percent.toFixed(2)}%`);
  console.log(`${p5Percent.toFixed(2)}%`);
}

histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
