function solve(arr) {
  let phoneBook = {};

  for (let i = 0; i < arr.length; i++) {
    let info = arr[i].split(" ");
    let name = info[0];
    let phone = info[1];

    phoneBook[name] = phone;
  }

  for (let key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}

solve([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
