function solve(arr) {
  let numbers = arr.shift().split(" ").map(Number);

  while (arr.length > 0) {
    let currentElements = arr.shift().split(" ");
    let command = currentElements[0];
    let value = Number(currentElements[1]);
    let insertAtIndex = 0;

    if (currentElements.length == 3) {
      insertAtIndex = currentElements[2];
    }

    switch (command) {
      case "Add":
        numbers.push(value);
        break;
      case "Remove":
        numbers = numbers.filter((x) => x !== value);
        break;
      case "RemoveAt":
        numbers.splice(value, 1);
        break;
      case "Insert":
        numbers.splice(insertAtIndex, 0, value);
        break;
    }
  }

  console.log(numbers);
}

solve(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);
