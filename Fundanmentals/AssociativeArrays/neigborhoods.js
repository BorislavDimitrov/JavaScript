function solve(arr) {
  let neighborhoodBook = new Map();
  let neighborhoods = arr.shift().split(", ");

  for (const neighborhood of neighborhoods) {
    neighborhoodBook.set(neighborhood, []);
  }

  for (let neighbor of arr) {
    let splitted = neighbor.split("-");
    let neighborhood = splitted[0].trim();
    let person = splitted[1].trim();

    if (neighborhoodBook.has(neighborhood)) {
      let neighbors = neighborhoodBook.get(neighborhood);
      neighbors.push(person);
    }
  }

  let sorted = Array.from(neighborhoodBook.entries());

  sorted.sort((a, b) => b[1].length - a[1].length);

  for (const [neighborhood, people] of sorted) {
    console.log(`${neighborhood}:${people.length}`);
    console.log(`${people.join("\r\n")}`);
  }
}

solve([
  "Abbey Street, Herald Street, Bright Mews",
  "Bright Mews - Garry",
  "Bright Mews - Andrea",
  "Invalid Street - Tommy",
  "Abbey Street - Billy",
]);
