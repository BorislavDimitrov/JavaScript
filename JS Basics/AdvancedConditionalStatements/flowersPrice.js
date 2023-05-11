function calculateFlowersPrice(flowerKind, flowersCount, budget) {
  let flowersCountNumber = Number(flowersCount);
  let budgetNumber = Number(budget);

  let oneRosePrice = 5;
  let oneDahliaPrice = 3.8;
  let oneTulipPrice = 2.8;
  let oneNarcicussPrice = 3;
  let oneGladiolusPrice = 2.5;

  let sum = 0;

  if (flowerKind === "Roses") {
    sum = flowersCountNumber * oneRosePrice;

    if (flowersCountNumber > 80) {
      sum = sum - sum * 0.1;
    }
  } else if (flowerKind === "Dahlias") {
    sum = flowersCountNumber * oneDahliaPrice;

    if (flowersCountNumber > 90) {
      sum = sum - sum * 0.15;
    }
  } else if (flowerKind === "Tulips") {
    sum = flowersCountNumber * oneTulipPrice;

    if (flowersCountNumber > 80) {
      sum = sum - sum * 0.15;
    }
  } else if (flowerKind === "Narcissus") {
    sum = flowersCountNumber * oneNarcicussPrice;

    if (flowersCountNumber < 120) {
      sum = sum + sum * 0.15;
    }
  } else if (flowerKind === "Gladiolus") {
    sum = flowersCountNumber * oneGladiolusPrice;

    if (flowersCountNumber < 80) {
      sum = sum + sum * 0.15;
    }
  }

  if (sum < budget) {
    console.log(
      `Hey you have a great garden with ${flowersCountNumber} flowers and ${
        budgetNumber - sum
      } leva left.`
    );
  } else {
    console.log(`Not enough money, you need ${sum - budgetNumber} leva more.`);
  }
}

calculateFlowersPrice("Narcissus", "119", "360");
