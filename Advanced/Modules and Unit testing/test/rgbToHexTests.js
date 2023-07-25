const { expect } = require("chai");
const { rgbToHexColor } = require("../rgbToHex");

describe("rgbToHexColor() method tests", () => {
  it("expect rgbToHexColor(2, 3, 4) to return #234", () => {
    const expected = "#020304";
    const result = rgbToHexColor(2, 3, 4);
    expect(result).to.be.equal(expected);
  });

  it("expect rgbToHexColor(256, 256, 256) to return undifined", () => {
    const expected = undefined;
    const result = rgbToHexColor(256, 256, 256);
    expect(result).to.be.equal(expected);
  });

  it("expect rgbToHexColor(1, 2 , '3') to return undifined", () => {
    const expected = undefined;
    const result = rgbToHexColor(1, 2, "3");
    expect(result).to.be.equal(expected);
  });
});
