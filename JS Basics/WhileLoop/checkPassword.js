function readPassword(input) {
  let username = input[0];
  let password = input[1];

  let passwordInput = input[2];
  let index = 2;

  while (passwordInput !== password) {
    index++;
    passwordInput = input[index];
  }

  console.log(`Welcome ${username}`);
}

readPassword(["Borislav", "Parola", "pass", "Parola"]);
