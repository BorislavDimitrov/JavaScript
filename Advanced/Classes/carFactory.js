function solve(requirements) {
  const smallEngine = { power: 90, volume: 1800 };
  const normalEngine = { power: 120, volume: 2400 };
  const monsterEngine = { power: 200, volume: 3500 };
  const hatchback = { type: "hatchback" };
  const coupe = { type: "coupe" };

  const car = { model: requirements.model };

  if (requirements.power <= smallEngine.power) {
    car.engine = smallEngine;
  } else if (requirements.power <= normalEngine.power) {
    car.engine = normalEngine;
  } else if (requirements.power <= monsterEngine) {
    car.engine = monsterEngine;
  }

  let carriage;
  if (requirements.carriage === "hatchback") {
    carriage = hatchback;
  } else if ((requirements.carrieage = "coupe")) {
    carriage = coupe;
  }

  carriage.color = requirements.color;
  car.carriage = carriage;

  let wheelSize = requirements.wheelSize;
  if (wheelSize % 2 === 0) {
    wheelSize--;
  }

  let wheels = [wheelSize, wheelSize, wheelSize, wheelSize];
  car.wheels = wheels;
  return car;
}

console.log(
  solve({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
console.log(
  solve({
    model: "Opel Vectra",

    power: 110,

    color: "grey",

    carriage: "coupe",

    wheelsize: 17,
  })
);
