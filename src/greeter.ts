export class Greeter {
  greet(name: string): string {

    // Requirement 1 - trim the input
    name = name.trim();

    // Requirement 2 - capitalise first letter of name
    name = name.charAt(0).toUpperCase() + name.slice(1);

    return `Hello ${name}`;
  }
}

// Usage
const greeter = new Greeter();
console.log(greeter.greet("John"));
