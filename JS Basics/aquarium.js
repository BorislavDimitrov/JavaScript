function calculateLitersWaterNeededForAquarium(lenght, width, height, percent) {
  let lenghtNumber = Number(lenght);
  let widthNumber = Number(width);
  let heightNumber = Number(height);
  let percentNumber = Number(percent);
  percentNumber = percentNumber / 100;

  let aquariumVolume = lenghtNumber * widthNumber * heightNumber;
  let totalLitters = aquariumVolume * 0.001;
  let littersNeeded = totalLitters * (1 - percentNumber);

  console.log(littersNeeded);
}

calculateLitersWaterNeededForAquarium("85", "75", "47", "17");
