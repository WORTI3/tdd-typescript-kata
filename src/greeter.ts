export class Greeter {
  greet(name: string): string {

    // Requirement 2 - trim the input
    name = name.trim();

    // Requirement 3 - capitalise first letter of name
    name = name.charAt(0).toUpperCase() + name.slice(1);

    // Get current hour
    const currentHour = new Date().getHours();

    let greeting: string = "Hello";

    // Requirement 4 - should return Good morning when time is 06:00-12:00
    if (currentHour >= 6 && currentHour < 12) {
      greeting = "Good morning";
    }
    
    // Requirement 5 - should return Good evening when time is 18:00-22:00
    if (currentHour >= 18 && currentHour < 22) {
      greeting = "Good evening";
    }
    
    // Requirement 6 - should return Good evening when time is 22:00-06:00
    if (currentHour >= 22 || currentHour < 6) {
      greeting = "Good night";
    }

    return `${greeting} ${name}`;
  }
}

// Usage
const greeter = new Greeter();
console.log(greeter.greet("John"));
