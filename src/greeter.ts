export class Greeter {
  greet(name: string): string {

    // Requirement 7 - log to console when called
    console.log("greet() method called with name:", name);

    // Requirement 2 - trim the input
    name = name.trim();

    // Requirement 3 - capitalise first letter of name
    name = name.charAt(0).toUpperCase() + name.slice(1);

    // Get current hour
    const currentHour = new Date().getHours();

    // refactor greeting into its own logic
    let greeting = this.getGreeting(currentHour);

    return `${greeting} ${name}`;
  }

  private getGreeting(hour: number): string {
    // Requirement 4 - should return Good morning when time is 06:00-12:00
    if (hour >= 6 && hour < 12) {
      return "Good morning";
    }
    
    // Requirement 5 - should return Good evening when time is 18:00-22:00
    if (hour >= 18 && hour < 22) {
      return "Good evening";
    }
    
    // Requirement 6 - should return Good evening when time is 22:00-06:00
    if (hour >= 22 || hour < 6) {
      return "Good night";
    }
    return "Hello";
 }
}

// Example Usage
const greeter = new Greeter();
console.log(greeter.greet("John"));
