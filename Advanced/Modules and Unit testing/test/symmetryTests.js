const { expect } = require("chai");
const { symmetry } = require("../symmetry");

describe("array symmetry tests", () => {
  it("expect symmetry([1, 2, 3, 2, 1]) to return true", () => {
    var expected = true;
    var result = symmetry([1, 2, 3, 2, 1]);
    expect(result).to.be.equal(expected);
  });

  it("expect symmetry([1,2,3,4,5]) to return false", () => {
    var expected = false;
    var result = symmetry([1, 2, 3, 4, 5]);
    expect(result).to.be.equal(expected);
  });

  it("expect symmetry(1) to return false", () => {
    var expected = false;
    var result = symmetry(1);
    expect(result).to.be.equal(expected);
  });
});
