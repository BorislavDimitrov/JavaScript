function interpolation(firstName, lastName, age, town) {
  let years = Number(age);

  console.log(
    `You are ${firstName} ${lastName}, a ${years} old person from ${town}.`
  );
}

interpolation("Borislav", "Dimitrov", "24", "Stara Zagora");
