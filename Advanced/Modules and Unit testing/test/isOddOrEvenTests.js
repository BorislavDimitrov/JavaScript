const { expect } = require("chai");
const { isOddOrEven } = require("../evenOrOdd");

describe("isOddOrEven method tests", () => {
  it("expect isOddOrEven('text') to return even", () => {
    const expected = "even";
    const result = isOddOrEven("text");
    expect(result).to.be.equal(expected);
  });

  it("expect isOddOrEven('texts') to return odd", () => {
    const expected = "odd";
    const result = isOddOrEven("texts");
    expect(result).to.be.equal(expected);
  });

  it("expect isOddOrEven([]) to return undefined", () => {
    const expected = undefined;
    const result = isOddOrEven([]);
    expect(result).to.be.equal(expected);
  });

  it("expect isOddOrEven({}) to return undefined", () => {
    const expected = undefined;
    const result = isOddOrEven({});
    expect(result).to.be.equal(expected);
  });
});
