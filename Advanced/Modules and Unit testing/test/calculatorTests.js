const { expect } = require("chai");
const { createCalculator } = require("../calculator");

describe("createCalculator method tests", () => {
  it("expect createCalculator() to return object with add(), subtract() and get() methods", () => {
    const calculator = createCalculator();
    expect(calculator).to.haveOwnProperty("add");
    expect(calculator).to.haveOwnProperty("subtract");
    expect(calculator).to.haveOwnProperty("get");
  });

  it("expect createCalculator() to return object and add(10) method should increase the internal sum and method get() returs 10", () => {
    const expected = 10;
    const calculator = createCalculator();
    calculator.add(10);
    const result = calculator.get();
    expect(result).to.be.equal(expected);
  });

  it("expect createCalculator() to return object and add('10') method should increase the internal sum and method get() returs 10", () => {
    const expected = 10;
    const calculator = createCalculator();
    calculator.add("10");
    const result = calculator.get();
    expect(result).to.be.equal(expected);
  });

  it("expect createCalculator() to return object and subtract(10) method should increase the internal sum and method get() returs -10", () => {
    const expected = -10;
    const calculator = createCalculator();
    calculator.subtract(10);
    const result = calculator.get();
    expect(result).to.be.equal(expected);
  });

  it("expect createCalculator() to return object and subtract('-10') method should increase the internal sum and method get() returs -10", () => {
    const expected = -10;
    const calculator = createCalculator();
    calculator.subtract("10");
    const result = calculator.get();
    expect(result).to.be.equal(expected);
  });
});
