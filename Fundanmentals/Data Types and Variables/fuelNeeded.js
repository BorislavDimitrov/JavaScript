function fuelNeeded(distance, passengers, fuelPrice) {
  let fuelNeeded = (distance / 100) * 7;
  fuelNeeded = fuelNeeded + passengers * 0.1;
  let price = fuelNeeded * fuelPrice;

  console.log(`Needed money for that trip is ${price} lv.`);
}

fuelNeeded(90, 14, 2.88);
