function solve(arr) {
  class Heroe {
    constructor(name, level, items) {
      this.name = name;
      this.level = level;
      this.items = items;
    }
  }

  let inventory = [];

  for (let i = 0; i < arr.length; i++) {
    let info = arr[i].split(" / ");
    let heroName = info.shift();
    let heroLevel = Number(info.shift());
    let items = info.shift().split(", ");
    let heroItems = [];

    while (items.length > 0) {
      let item = items.shift();
      heroItems.push(item);
    }

    heroItems = heroItems.sort((a, b) => a.localeCompare(b));
    let hero = new Heroe(heroName, heroLevel, heroItems);
    inventory.push(hero);
  }

  inventory.sort((a, b) => a.level - b.level);

  for (const hero of inventory) {
    console.log(`Hero: ${hero.name}`);
    console.log(`Level: ${hero.level}`);
    console.log(`Items => ${hero.items.join(", ")}`);
  }
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
