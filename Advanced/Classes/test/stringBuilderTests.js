const { expect } = require("chai");
const { StringBuilder } = require("../stringBuilder");

describe("StringBuilder class tests", () => {
  describe("Initialization", () => {
    it("expect StringBuilder to initiate without parameter in constructor", () => {
      const result = new StringBuilder();
      const expected = "object";
      expect(result).to.be.a(expected);
    });

    it("expect StringBuilder to initiate with parameters in constructor", () => {
      const result = new StringBuilder("text");
      const expected = "object";
      expect(result).to.be.a(expected);
    });
  });

  describe("methods", () => {
    let stringBuilder;
    beforeEach(function () {
      stringBuilder = new StringBuilder("text");
    });

    describe("append()", () => {
      it('expect after append("123") to return text123', () => {
        stringBuilder.append("123");
        const result = stringBuilder.toString();
        const expected = "text123";
        expect(result).to.be.equal(expected);
      });

      it("expect append(123) to throw Error", () => {
        expect(() =>
          stringBuilder.append(123).to.throw("Argument must be a string")
        );
      });
    });

    describe("prepend()", () => {
      it('expect after prepend("123") to return 123text', () => {
        stringBuilder.prepend("123");
        const result = stringBuilder.toString();
        const expected = "123text";
        expect(result).to.be.equal(expected);
      });

      it("expect prepend(123) to throw Error", () => {
        expect(() =>
          stringBuilder.prepend(123).to.throw("Argument must be a string")
        );
      });
    });

    describe("insertAt", () => {
      it("expect after insterAt('123',0) to return 123text", () => {
        stringBuilder.insertAt("123", 0);
        const result = stringBuilder.toString();
        const expected = "123text";
        expect(result).to.be.equal(expected);
      });

      it("expect insertAt(123, 0) to throw Error", () => {
        expect(() =>
          stringBuilder.insertAt(123, 0).to.throw("Argument must be a string")
        );
      });
    });

    describe("remove()", () => {
      it("expect after remove(0, 4) to return empty string", () => {
        stringBuilder.remove(0, 4);
        const result = stringBuilder.toString();
        const expected = "";
        expect(result).to.be.equal(expected);
      });
    });
  });
});
