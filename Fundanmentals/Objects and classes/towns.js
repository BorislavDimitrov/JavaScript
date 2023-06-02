function solve(arr) {
  let towns = [];

  for (let i = 0; i < arr.length; i++) {
    [town, latitude, longitude] = arr[i].split(" | ");

    let currTown = {
      town,
      latitude,
      longitude,
    };

    towns.push(currTown);
  }

  for (const town of towns) {
    console.log(town);
  }
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
