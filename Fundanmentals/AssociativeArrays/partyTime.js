function solve(arr) {
  let vipGuests = {};
  let regularGuests = {};
  let guest = arr.shift();

  while (guest != "PARTY") {
    if (isNaN(guest[0])) {
      regularGuests[guest] = 0;
    } else {
      vipGuests[guest] = 0;
    }

    guest = arr.shift();
  }

  guest = arr.shift();

  while (true) {
    if (vipGuests.hasOwnProperty(guest)) {
      delete vipGuests[guest];
    } else if (regularGuests.hasOwnProperty(guest)) {
      delete regularGuests[guest];
    }

    if (arr.length == 0) {
      break;
    }

    guest = arr.shift();
  }

  let vipKeys = Object.keys(vipGuests);
  let regularKeys = Object.keys(regularGuests);

  console.log(vipKeys.length + regularKeys.length);

  for (const key of vipKeys) {
    console.log(key);
  }

  for (const key of regularKeys) {
    console.log(key);
  }
}

solve([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
