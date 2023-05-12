function bankAccount(input) {
  let income = input[0];
  let index = 0;
  let sum = 0;

  while (income != "NoMoreMoney") {
    let moneyToAdd = Number(input[index]);

    if (moneyToAdd < 0) {
      console.log(`Invalid Operation!`);
    } else {
      sum += moneyToAdd;
    }
    index++;
    income = input[index];
  }

  console.log(`Total: ${sum}`);
}
