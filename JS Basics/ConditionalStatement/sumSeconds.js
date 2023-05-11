function sumSeconds(firstSeconds, secondSeconds, thirdSeconds) {
  let firstSecondsNumber = Number(firstSeconds);
  let secondSecondsNumber = Number(secondSeconds);
  let thirdSecondsNumber = Number(thirdSeconds);

  let secondsSum =
    firstSecondsNumber + secondSecondsNumber + thirdSecondsNumber;
  let seconds = secondsSum % 60;
  let minutes = Math.floor(secondsSum / 60);

  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}

sumSeconds("35", "45", "44");
