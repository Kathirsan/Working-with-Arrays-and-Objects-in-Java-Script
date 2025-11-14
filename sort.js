const numbers = [2, 5, 8, 10, 12]; 
// Use .map() to double each number
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers); // Output: [4, 10, 16, 20, 24] [cite: 34]

// Use .filter() to keep only numbers greater than 6
const filteredNumbers = numbers.filter(num => num > 6);
console.log("Numbers > 6:", filteredNumbers); // Output: [8, 10, 12] [cite: 35]

// Use .reduce() to find the sum of all numbers
const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of numbers:", sumOfNumbers); // Output: 37 (2+5+8+10+12) [cite: 36]