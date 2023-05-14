function centuriesConvert(centtuires) {
  let years = centtuires * 100;
  let days = parseInt(years * 365.2422);
  let hours = parseInt(days * 24);
  let minutes = parseInt(hours * 60);

  console.log(
    `${centtuires} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`
  );
}

centuriesConvert(5);
