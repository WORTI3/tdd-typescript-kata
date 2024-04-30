
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

  it.each([
    6, 7, 8, 9, 10, 11
  ])("should return 'Good morning <name>' when the time is 06:00-12:00 '%s'", (hour) => {
    // given
    const now = new Date(new Date().setHours(hour));
    jest.spyOn(global, 'Date').mockImplementation(() => now);
    
    // when / then
    expect(greeter.greet("john")).toBe("Good morning John");
  });

  it.each([
    12, 13, 14, 15, 16, 17
  ])("should return 'Hello <name>' when hour boundary is outside of time ranges '%s'", (hour) => {
    // given
    const now = new Date(new Date().setHours(hour));
    jest.spyOn(global, 'Date').mockImplementation(() => now);
    
    // when / then
    expect(greeter.greet("john")).toBe("Hello John");
  });

  it.each([
    18, 19, 20, 21
  ])("should return 'Good evening <name>' when the time is 18:00-22:00 '%s'", (hour) => {
    // given
    const now = new Date(new Date().setHours(hour));
    jest.spyOn(global, 'Date').mockImplementation(() => now);
    
    // when / then
    expect(greeter.greet("john")).toBe("Good evening John");
  });

  it.each([
    22, 23, 24, 1, 2, 3, 4, 5
  ])("should return 'Good night <name>' when the time is 22:00-06:00 '%s'", (hour) => {
    // given
    const now = new Date(new Date().setHours(hour));
    jest.spyOn(global, 'Date').mockImplementation(() => now);
    
    // when / then
    expect(greeter.greet("john")).toBe("Good night John");
  });
});
