const { expect } = require("chai");
const { lookupChar } = require("../charLookup");

describe("charLookup method tests", () => {
  it('charLookup("text", 2) should return x', () => {
    const expected = "x";
    const result = lookupChar("text", 2);
    expect(result).to.be.equal(expected);
  });

  it("charLookup(2, 2) should return undefined", () => {
    const expected = undefined;
    const result = lookupChar(2, 2);
    expect(result).to.be.equal(expected);
  });

  it("charLookup('text', '4') should return undefined", () => {
    const expected = undefined;
    const result = lookupChar("text", "4");
    expect(result).to.be.equal(expected);
  });

  it("charLookup('text', 60) should return Incorrect index", () => {
    const expected = "Incorrect index";
    const result = lookupChar("text", 60);
    expect(result).to.be.equal(expected);
  });
});
