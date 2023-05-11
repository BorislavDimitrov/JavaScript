function calculateBoatExpenses(budget, season, fisherman) {
  let budgetCount = Number(budget);
  let fishermanCount = Number(fisherman);

  let boatPrice = 0;

  if (season === "Spring") {
    boatPrice = 3000;
  } else if (season === "Summer" || season === "Autumn") {
    boatPrice = 4200;
  } else {
    boatPrice = 2600;
  }

  if (fishermanCount <= 6) {
    boatPrice = boatPrice - boatPrice * 0.1;
  } else if (fishermanCount > 7 && fishermanCount <= 11) {
    boatPrice = boatPrice - boatPrice * 0.15;
  } else if (fishermanCount > 12) {
    boatPrice = boatPrice - boatPrice * 0.25;
  }

  if (season != "Autumn") {
    if (fishermanCount % 2 == 0) {
      boatPrice = boatPrice - boatPrice * 0.05;
    }
  }

  if (budget > boatPrice) {
    console.log(`Yes! You have ${budget - boatPrice} leva left.`);
  } else {
    console.log(`Not enough money, you need more ${boatPrice - budget} leva/`);
  }
}

calculateBoatExpenses("2000", "Winter", "13");
