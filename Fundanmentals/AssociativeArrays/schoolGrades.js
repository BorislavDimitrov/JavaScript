function solve(arr) {
  let gradesBook = new Map();

  for (const item of arr) {
    let info = item.split(" ");
    let name = info.shift();
    let grades = info.map(Number);

    if (!gradesBook.has(name)) {
      gradesBook.set(name, []);
    }

    gradesBook.set(name, gradesBook.get(name).concat(grades));
  }

  let entries = Array.from(gradesBook.entries());
  let sorted = entries.sort(
    (a, b) =>
      a[1].reduce((x, y) => x + y) / a[1].length -
      b[1].reduce((x, y) => x + y) / b[1].length
  );

  for (const [key, value] of sorted) {
    console.log(`${key} -> ${value.join(", ")}`);
  }
}

solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
