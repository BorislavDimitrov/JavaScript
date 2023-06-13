function solve(arr) {
  let cars = {};

  for (let i = 0; i < arr.length; i++) {
    const info = arr[i].split(", ");
    let command = info[0];
    let plateNumber = info[1];

    if (cars.hasOwnProperty(plateNumber) && command == "OUT") {
      delete cars[plateNumber];
    } else {
      cars[plateNumber] = 0;
    }
  }

  let entries = Object.entries(cars);
  let sorted = entries.sort((a, b) => a[0].localeCompare(b[0]));

  if (sorted.length == 0) {
    console.log(`Parking lot is empty!`);
  } else {
    for (const [key] of sorted) {
      console.log(key);
    }
  }
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
