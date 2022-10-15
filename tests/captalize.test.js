import capitalize from "../src/capitalize";

test("mama to be Mama", () => {
  expect(capitalize("mama")).toBe("Mama");
});

test.skip("even works with all caps", () => {
  expect(capitalize("BOY")).toBe("Boy");
});
