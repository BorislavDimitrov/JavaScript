function calculateSwimmingTime(record, meters, swimmingSpeed) {
  let recordNumber = Number(record);
  let metersNumber = Number(meters);
  let swimmingSpeenNumber = Number(swimmingSpeed);

  let slowing = Math.floor(meters / 15) * 12.5;

  let time = slowing + swimmingSpeenNumber * metersNumber;

  if (time < recordNumber) {
    console.log(`Yes, he succed! The new record is ${time.toFixed(2)}`);
  } else {
    console.log(
      `No he failed! He was ${(time - recordNumber).toFixed(2)} seconds slower.`
    );
  }
}

calculateSwimmingTime(
  "55555.67",

  "3017",

  "5.03"
);
