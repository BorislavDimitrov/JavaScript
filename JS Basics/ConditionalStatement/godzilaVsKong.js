function calculateExpenses(budget, statists, clothesPrice) {
  let budgetNumber = Number(budget);
  let statistsNumber = Number(statists);
  let clothesPriceNumber = Number(clothesPrice);

  let decorExpenses = budgetNumber * 0.1;
  let clothesExpenses = statistsNumber * clothesPriceNumber;

  if (statistsNumber > 150) {
    clothesExpenses = clothesExpenses - clothesExpenses * 0.1;
  }

  let totalExpenses = decorExpenses + clothesExpenses;

  let moneyAfterExpenses = budget - totalExpenses;

  if (moneyAfterExpenses < 0) {
    console.log(`Not enough money!`);
    console.log(
      `Wingard needs ${Math.abs(moneyAfterExpenses.toFixed(2))} leva more.`
    );
  } else {
    console.log(`Action!`);
    console.log(
      `Wingard stats filming with ${moneyAfterExpenses.toFixed(2)} leva left.`
    );
  }
}

calculateExpenses("9587.88", "222", "55.68");
