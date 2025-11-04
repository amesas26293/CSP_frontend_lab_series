/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
let age = 34;
let price = 12.99;
console.log("Age:" + age);
console.log("Price:" + price);
// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)
let name = "Sandra";
console.log(name / 2);
// TODO 2: Print basic math ops: + - * /
console.log("Addition:" + (5 + 3));
console.log("Subtraction:" + (10 - 4));
console.log("Multiplication:" + (6 * 7));
console.log("Division:" + (20 / 5));
// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)
console.log("Exponentiation:" + (2 ** 3));
console.log("Modulo:" + (7 % 2));
// TODO 3: Assignment operators with score variable
let score = 10;
score += 5; 
// TODO 4: Expressions with operator precedence
console.log("Expression Result:" + (2 + 2 * 2)); 
console.log("Expression Result with Parentheses:" + ((2 + 2) * 2));
// TODO 5: Strings (single, double, backticks)
let singleQuote = 'Hello, World!';
let doubleQuote = "JavaScript is fun!";
let backtick = `Today is a great day!`;
console.log(singleQuote);
console.log(doubleQuote);
console.log(backtick);

// TODO 6: String properties and methods
// - greeting.length
let greeting = "Hello there!";
console.log("Length of greeting:" + greeting.length);
// - charAt(0), charAt(5), [3]
console.log("Character at index 0:" + greeting.charAt(0));
console.log("Character at index 5:" + greeting.charAt(5));
console.log("Character at index 3 using []:" + greeting[3]);
// - indexOf("sad")
console.log("Index of 'sad':" + greeting.indexOf("sad"));
// - repeat()
console.log("Repeat greeting 3 times:" + greeting.repeat(3));
// - substring, substr, slice examples
console.log("Substring (0,5):" + greeting.substring(0, 5));
console.log("Substr (6,5):" + greeting.substr(6, 5));
console.log("Slice (0,5):" + greeting.slice(0, 5));

// 🚀 Stretch Goals
// - Even number check using %
let number = 8;
if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}
// - localeCompare() example