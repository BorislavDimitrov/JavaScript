const { expect } = require("chai");
const { sum } = require("../sum");

describe("sum method tests", () => {
  it("expect sum([1,3], 0, 1 to return 4)", () => {
    const expected = 4;
    const result = sum([1, 3], 0, 1);
    expect(result).to.be.equal(expected);
  });

  it("expect sum([1,3], -1, 1 to return 4)", () => {
    const expected = 4;
    const result = sum([1, 3], -1, 1);
    expect(result).to.be.equal(expected);
  });

  it("expect sum([0,3], 0, 100 to return 4)", () => {
    const expected = 4;
    const result = sum([1, 3], 0, 100);
    expect(result).to.be.equal(expected);
  });

  it("expect sum([], 0, 1 to return 0)", () => {
    const expected = 0;
    const result = sum([], 0, 1);
    expect(result).to.be.equal(expected);
  });

  it("expect sum(1, 0, 1 to return NaN)", () => {
    const result = sum(1, 0, 1);
    expect(result).to.be.NaN;
  });

  it("expect sum('text', 0, 1 to return NaN)", () => {
    const result = sum("text", 0, 1);
    expect(result).to.be.NaN;
  });

  it("expect sum(['text', 4, 5], 0, 1 to return NaN)", () => {
    const result = sum(["text", 4, 5], 0, 1);
    expect(result).to.be.NaN;
  });
});
