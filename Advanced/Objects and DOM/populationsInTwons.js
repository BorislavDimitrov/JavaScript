function solve(arr) {
  let townsInfo = {};

  for (let i = 0; i < arr.length; i++) {
    let info = arr[i].split(" <-> ");
    let town = info[0];
    let population = Number(info[1]);

    if (!townsInfo.hasOwnProperty(town)) {
      townsInfo[town] = 0;
    }

    townsInfo[town] += population;
  }

  let townsKeys = Object.keys(townsInfo);

  for (const key of townsKeys) {
    console.log(`${key} " ${townsInfo[key]}`);
  }
}

solve([
  "Sofia <-> 1200000",

  "Montana <-> 20000",

  "New York <-> 10000000",

  "Washington <-> 2345000",

  "Las Vegas <-> 1000000",
]);
