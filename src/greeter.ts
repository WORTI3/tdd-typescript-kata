export class Greeter {
  greet(name: string): string {

    name = name.trim();

    return `Hello ${name}`;
  }
}

// Usage
const greeter = new Greeter();
console.log(greeter.greet("John"));
