function chooseClothes(degrees, timeOfTheDay) {
  let degreesNumber = Number(degrees);

  let outfit = "";
  let shoes = "";

  if (timeOfTheDay === "Morning") {
    if (degrees >= 10 && degrees <= 18) {
      outfit = "Sweatshirt";
      shoes = "Sneakers";
    } else if (degrees > 18 && degrees <= 24) {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (degrees > 25) {
      outfit = "T-Shirt";
      shoes = "Sandals";
    }
  } else if (timeOfTheDay === "Afternoon") {
    if (degrees >= 10 && degrees <= 18) {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (degrees > 18 && degrees <= 24) {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (degrees > 25) {
      outfit = "Swimsuit";
      shoes = "Bare foot";
    }
  } else {
    if (degrees >= 10 && degrees <= 18) {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (degrees > 18 && degrees <= 24) {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (degrees > 25) {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }

  console.log(`Its ${degreesNumber} get your ${outfit} and ${shoes}.`);
}

chooseClothes("22", "Afternoon");
