let animals = [];

describe("animals array", () => {
  beforeEach(() => {
    animals = ["elephant", "dog", "cat", "bird"];
  });
  it("should add animal to end of array", () => {
    animals.push("lion");
    expect(animals[animals.length - 1]).toBe("lion");
  });
  it("should add animal to begining of array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });

  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4);
  });
});

describe("testing something else", () => {
  it.only("true should be truthy", () => {
    // it.only = only run this test
    expect(true).toBeTruthy();
  });
});
