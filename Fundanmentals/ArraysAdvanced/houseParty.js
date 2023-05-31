function solve(arr) {
  let guestList = [];

  while (arr.length > 0) {
    let command = arr.shift().split(" ");
    let name = command[0];
    let isInList = guestList.includes(name);

    if (command.length === 3) {
      if (isInList) {
        console.log(`${name} is already in the list.`);
      } else {
        guestList.push(name);
      }
    } else {
      if (isInList) {
        console.log(`${name} is not going!`);
      }
    }
  }

  console.log(guestList.join(`\r\n`));
}

solve([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
