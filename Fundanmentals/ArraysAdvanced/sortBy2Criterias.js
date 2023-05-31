function solve(arr) {
  arr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

  console.log(arr);
}

solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
