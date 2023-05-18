function solve(product, quanity) {
  let result = order(product, quanity);
  console.log(result.toFixed(2));

  function order(product, quanity) {
    const coffeePrice = 1.5;
    const waterPrice = 1.0;
    const cokePrice = 1.4;
    const snacksPrice = 2.0;
    let sum = 0;

    if (product == "coffee") {
      sum = coffeePrice * quanity;
    } else if (product == "water") {
      sum = waterPrice * quanity;
    } else if (product == "coke") {
      sum = cokePrice * quanity;
    } else if (product == "snacks") {
      sum = snacksPrice * quanity;
    }

    return sum;
  }
}

solve("coffee", 2);
