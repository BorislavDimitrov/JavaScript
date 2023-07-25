const { expect } = require("chai");
const { mathEnforcer } = require("../mathEnforcer");

describe("math enforcer tests", () => {
  describe("addFive", () => {
    it("expect math enforcer`s method addFive(25) to return 30", () => {
      const expected = 30;
      const result = mathEnforcer.addFive(25);
      expect(result).to.be.equal(expected);
    });

    it("expect math enforcer`s method addFive(-3) to return 2", () => {
      const expected = 2;
      const result = mathEnforcer.addFive(-3);
      expect(result).to.be.equal(expected);
    });

    it("expect math enforcer`s method addFive([]) to return undefined", () => {
      const expected = undefined;
      const result = mathEnforcer.addFive([]);
      expect(result).to.be.equal(expected);
    });
  });

  describe("subtractTen()", () => {
    it("expect math enforcer`s method subtractTen(10) to return 0", () => {
      const expected = 0;
      const result = mathEnforcer.subtractTen(10);
      expect(result).to.be.equal(expected);
    });

    it("expect math enforcer`s method subtractTen(-10) to return -20", () => {
      const expected = -20;
      const result = mathEnforcer.subtractTen(-10);
      expect(result).to.be.equal(expected);
    });

    it("expect math enforcer`s method subtractTen([]) to return undefined", () => {
      const expected = undefined;
      const result = mathEnforcer.subtractTen([]);
      expect(result).to.be.equal(expected);
    });
  });

  describe("sum()", () => {
    it("expect math enforcer`s method sum(10) to return 0", () => {
      const expected = 20;
      const result = mathEnforcer.sum(10, 10);
      expect(result).to.be.equal(expected);
    });

    it("expect math enforcer`s method sum(10) to return 0", () => {
      const expected = 0;
      const result = mathEnforcer.sum(-10, 10);
      expect(result).to.be.equal(expected);
    });

    it("expect math enforcer`s method sum(1, '1') to return undefined", () => {
      const expected = undefined;
      const result = mathEnforcer.sum(1, "1");
      expect(result).to.be.equal(expected);
    });

    it("expect math enforcer`s method sum('1', 1) to return undefined", () => {
      const expected = undefined;
      const result = mathEnforcer.sum("1", 1);
      expect(result).to.be.equal(expected);
    });
  });
});
