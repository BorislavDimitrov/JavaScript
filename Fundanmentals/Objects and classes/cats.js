function solve(catsInfo) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says hello.`);
    }
  }

  for (const info of catsInfo) {
    [catName, catAge] = info.split(" ");
    let cat = new Cat(catName, catAge);
    cat.meow();
  }
}

solve(["Mellow 2", "Tom 5"]);
