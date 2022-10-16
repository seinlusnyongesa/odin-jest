import ceaserCipher from "../src/ceaserCipher";
describe("ceaser cipher", () => {
  test("wrapping from z to a", () => {
    expect(ceaserCipher("z")).toBe("a");
  });
  test("keeping the same case", () => {
    expect(ceaserCipher("Aba")).toBe("Bcb");
  });
});
