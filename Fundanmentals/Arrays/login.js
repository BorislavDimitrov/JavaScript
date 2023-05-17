function login(array) {
  let accountName = array[0];
  let correctPassowrd = accountName.split("").reverse().join("");
  let triesCounter = 0;
  let index = 1;

  while (true) {
    if (array[index] == correctPassowrd) {
      console.log(`${accountName} loged in.`);
      triesCounter++;
      index++;
      break;
    } else {
      console.log(`Incorrect password. Try again.`);
    }

    if (triesCounter >= 4) {
      break;
    }
  }

  if (triesCounter >= 4) {
    console.log(`User ${accountName} is blocked.`);
  }
}

login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
