class Rat {
  #unitedWith;
  constructor(name) {
    this.name = name;
    this.#unitedWith = [];
  }

  unite(rat) {
    if (rat instanceof Rat) {
      this.#unitedWith.push(rat);
    }
  }

  getRats() {
    return this.#unitedWith;
  }

  toString() {
    let result = `${this.name}\n`;

    for (let i = 0; i < this.#unitedWith.length; i++) {
      let currentRat = this.#unitedWith[i];
      result += `##${currentRat.name}\n`;
    }
    return result;
  }
}

function useRat() {
  let firstRat = new Rat("Dimitri");
  let secondRat = new Rat("Stoqn");
  let thirdRat = new Rat("Petur");
  let fourthRat = new Rat("Stilqna");

  firstRat.unite(secondRat);
  firstRat.unite(thirdRat);
  firstRat.unite(fourthRat);
  console.log(firstRat.toString());
}
useRat();
