describe("function that takes an array of numbers and analyse it", () => {
  test("finds the average", () => {
    expect(analyseArray([1, 2, 3, 4, 5]).average).toBe(5);
  });
  test("finds min", () => {
    expect(analyseArray([1, 3, 4, 3, 5]).min).toBe(1);
  });
  test("finds max", () => {
    expect(analyseArray([1, 3, 5, 2, 6]).max).toBe(6);
  });
  test("finds length", () => {
    expect(analyseArray([1, 3, 4, 3]).length).toBe(4);
  });
});
