function passwordValidator(password) {
  let isValid = true;

  if (password.length < 6 || password.length > 10) {
    console.log(`Password must be between 6 and 10 characters.`);
    isValid = false;
  }

  for (let i = 0; i < password.length; i++) {
    let currentChar = password[i];

    if (
      currentChar.charCodeAt(0) < 48 ||
      currentChar.charCodeAt(0) > 57 ||
      currentChar.toUpperCase().charCodeAt(0) < 101 ||
      currentChar.toUpperCase().charCodeAt(0) > 132
    ) {
      console.log(`The password must consist only of letters and digits`);
      isValid = false;
      break;
    }
  }

  let numbersCount = 0;

  for (let i = 0; i < password.length; i++) {
    let currentChar = password[i];
    if (currentChar.charCodeAt(0) >= 48 && currentChar.charCodeAt(0) <= 57) {
      numbersCount++;
    }
  }

  if (numbersCount < 2) {
    console.log(`The password must have at least 2 numbers`);
    isValid = false;
  }

  if (isValid) {
    console.log(`The password is valid`);
  }
}

passwordValidator("Pa$s$s");
