
import { Greeter } from "./greeter";

describe("greet()", () => {
  let greeter: Greeter;

  beforeEach(() => {
    greeter = new Greeter();
  });

  it("should return Hello <name>", () => {
    expect(greeter.greet("John")).toBe("Hello John");
  });

  it.each([
    ["  john  "],
    ["  john"],
    ["john  "],
    ["    john    "]
  ])("should trim the input '%s'", (input) => {
      expect(greeter.greet(input)).toBe("Hello John");
  });

  it("should capitalize the first letter of the name", () => {
    expect(greeter.greet("john")).toBe("Hello John");
  });
});
