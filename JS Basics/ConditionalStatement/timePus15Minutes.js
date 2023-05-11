function calculateTime(hour, minutes) {
  let hourNumber = parseInt(hour);
  let minutesNumber = parseInt(minutes);
  let minutesIncreased = minutesNumber + 15;
  let finalMinutes = 0;

  if (minutesIncreased > 59) {
    hourNumber++;
    finalMinutes = minutesIncreased - 60;
  } else {
    finalMinutes = minutesIncreased;
  }

  if (hourNumber > 23) {
    hourNumber = 0;
  }

  if (finalMinutes < 10) {
    console.log(`${hourNumber}:0${finalMinutes}`);
  } else {
    console.log(`${hourNumber}:${finalMinutes}`);
  }
}

calculateTime("12", "49");
