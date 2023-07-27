const result = (function () {
  const faces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  const suits = {
    SPADES: "♠",
    HEARTS: "♥",
    DIAMONDS: "♦",
    CLUBS: "♣",
  };

  class Card {
    #face;
    #suit;
    constructor(face, suit) {
      this.face = face;
      this.suit = suit;
    }

    set face(face) {
      if (!faces.includes(face)) {
        throw new Error("Invalid face.");
      }

      this.#face = face;
    }

    get face() {
      return this.#face;
    }

    set suit(suit) {
      if (!Object.values(suits).includes(suit)) {
        throw new Error("Invalid suit");
      }

      this.#suit = suit;
    }

    get suit() {
      return this.#suit;
    }
  }
  return {
    Suits: suits,
    Card: Card,
  };
})();

function useCard() {
  const Card = result.Card;
  const Suits = result.Suits;

  let card = new Card("2", Suits.CLUBS);
}

useCard();
