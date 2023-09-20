let x = (function () {
  let cars = {};
  let create = function create(name) {
    let newCar = { name: name };
    cars[name] = newCar;
  };

  let createInherit = function (name, parentName) {
    let existingCar = cars[parentName];
    let newCar = Object.create(existingCar);
    newCar.name = name;
    cars[name] = newCar;
  };
  let set = function createInherit(name, key, value) {
    let existingCar = cars[name];
    existingCar[key] = value;
  };

  let print = function print(name) {
    let existingCar = cars[name];
    let result = "";

    for (const [key, value] of Object.entries(existingCar)) {
      result = result + `${key}: ${value} `;
    }

    console.log(result);
  };

  return { create, createInherit, print, set };
})();

x.create("bmw");
x.print("bmw");
x.createInherit("audi", "bmw");
x.set("bmw", "model", "M5");
x.print("bmw");
x.print("audi");
