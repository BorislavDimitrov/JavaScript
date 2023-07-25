const { expect } = require("chai");
const { createCard } = require("../playingCards");

describe("createCard method tests", () => {
  it(`expect createCard('A', 'S') to return a card with toString method which returns A\u2660`, () => {
    const expected = `A\u2660`;
    const card = createCard("A", "S");
    const result = card.toString();
    expect(result).to.be.equal(expected);
  });

  it(`expect createCard(1, 'S') to throw an exception error`, () => {
    expect(() => createCard(1, "S")).to.throw(Error, "Invalid parameters!");
  });

  it(`expect createCard(2, 4) to throw an exception error`, () => {
    expect(() => createCard(1, 4)).to.throw(Error, "Invalid parameters!");
  });
});
