import calculator from "../src/calculator";

describe("Test calculator functinality", () => {
  test("1 + 4 should be 5", () => {
    expect(calculator.add(1, 4)).toBe(5);
  });
  test("20-5 should be 15", () => {
    expect(calculator.sub(20, 5)).toBe(15);
  });
  test("2 * 3 should be 6", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  test("15 divide by 3 to be 5", () => {
    expect(calculator.divide(15, 3)).toBe(5);
  });
});
