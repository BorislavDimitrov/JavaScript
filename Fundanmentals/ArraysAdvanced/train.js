function solve(arr) {
  let wagons = arr.shift().split(" ").map(Number);
  let capacity = Number(arr.shift());

  while (arr.length > 0) {
    let command = arr.shift().split(" ");

    if (command.length === 2) {
      let people = Number(command[1]);
      wagons.push(people);
    } else {
      let people = Number(command[0]);
      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + Number(people) <= capacity) {
          wagons[i] += people;
          break;
        }
      }
    }
  }

  console.log(wagons);
}

solve(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
