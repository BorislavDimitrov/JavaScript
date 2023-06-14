function solve(arr) {
  let powers = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  let multipliers = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  let playersCards = {};

  for (let row of arr) {
    let info = row.split(": ");
    let name = info[0];
    let cardsToAdd = info[1].split(", ");
    let power = "";
    let multiplier = "";

    for (let i = 0; i < cardsToAdd.length; i++) {
      let card = cardsToAdd[i];

      if (!playersCards.hasOwnProperty(name)) {
        playersCards[name] = [];
      }

      if (card.length == 2) {
        power = card[0];
        multiplier = card[1];
      } else if (card.length == 3) {
        power = card[0] + card[1];
        multiplier = card[2];
      }

      let cards = playersCards[name];
      let occuredPowers = cards.filter((x) => x.includes(power));
      let occuredMultipliers = cards.filter((x) => x.includes(multiplier));

      if (occuredPowers.length > 0 || occuredMultipliers.length > 0) {
        continue;
      }

      cards.push(card);
    }
  }

  let entries = Object.entries(playersCards);

  for (const [key, value] of entries) {
    let cardsSums = [];

    for (let i = 0; i < value.length; i++) {
      let card = value[i];
      let power = 0;
      let multiplier = 0;

      if (card.length == 2) {
        if (isNaN(card[0])) {
          power = Number(powers[card[0]]);
        } else {
          power = Number(card[0]);
        }

        multiplier = multipliers[card[1]];
      } else if (card.length == 3) {
        power = Number(card[0] + card[1]);
        multiplier = multipliers[card[2]];
      }

      let sum = power * multiplier;
      cardsSums.push(sum);
    }

    let finalSum = cardsSums.reduce((a, b) => a + b, 0);

    console.log(`${key}: ${finalSum}`);
  }
}

solve([
  "Peter: 2C, 4H, 9H, AS, QS",

  "Tomas: 3H, 10S, JC, KD, 5S, 10S",

  "Andrea: QH, QC, QS, QD",

  "Tomas: 6H, 7S, KC, KD, 5S, 10C",

  "Andrea: QH, QC, JS, JD, JC",

  "Peter: JD, JD, JD, JD, JD, JD",
]);
