const validCardFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const validCardSuits = ["S", "D", "H", "C"];
const suitCodes = {
  S: "\u2660",
  H: "\u2665",
  D: "\u2666",
  C: "\u2663",
};

class Card {
  constructor(face, suit) {
    if (!validCardFaces.includes(face) || !validCardSuits.includes(suit)) {
      throw new Error("Invalid parameters!");
    }
    this.face = face;
    this.suit = suit;
  }

  toString() {
    return `${this.face}${suitCodes[this.suit]}`;
  }
}

const createCard = (face, suit) => new Card(face, suit);

module.exports = { createCard };
