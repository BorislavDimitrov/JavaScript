function sovle(text) {
  let headings = text[0]
    .split("|")
    .map((x) => x.trim())
    .filter((x) => x != "");
  let towns = [];

  for (let i = 1; i < text.length; i++) {
    let townInfo = text[i]
      .split("|")
      .map((x) => x.trim())
      .filter((x) => x != "");

    let town = {
      [headings[0]]: townInfo[0],
      [headings[1]]: townInfo[1],
      [headings[2]]: townInfo[2],
    };

    towns.push(town);
  }

  let jsonTowns = JSON.stringify(towns);

  console.log(jsonTowns);
}

sovle([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
