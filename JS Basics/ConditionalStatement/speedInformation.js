function speedInformation(speed) {
  let speedNumber = parseInt(speed);

  if (speedNumber <= 10) {
    console.log("Slow");
  } else if (speedNumber <= 50) {
    console.log("Average");
  } else if (speedNumber <= 150) {
    console.log("Fast");
  } else if (speedNumber <= 1000) {
    console.log("Ultra fast");
  } else if (speedNumber > 1000) {
    console.log("Extremely fast");
  }
}

speedInformation("156");
