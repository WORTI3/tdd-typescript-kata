
import { Greeter } from "./greeter";

describe("greet()", () => {
  let greeter: Greeter;

  beforeEach(() => {
    greeter = new Greeter();
  });

  it("should return Hello <name>", () => {
    expect(greeter.greet("John")).toBe("Hello John");
  });
});
