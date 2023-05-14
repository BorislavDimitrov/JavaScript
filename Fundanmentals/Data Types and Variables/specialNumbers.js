function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let number = i;
    let sum = 0;

    while (number !== 0) {
      let currentDigit = number % 10;
      sum += currentDigit;
      number = parseInt(number / 10);
    }

    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

specialNumbers(15);
