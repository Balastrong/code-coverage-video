const calculateSum = require(".");

describe("calculateSum", () => {
  it("should return the sum of all numbers", () => {
    expect(calculateSum([2, 5, 30])).toBe(37);
  });
});
