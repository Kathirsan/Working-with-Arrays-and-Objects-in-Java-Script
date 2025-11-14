const numbers = [2, 5, 8, 10, 12]; 
// Check if 8 is in the array (includes() method)
const hasEight = numbers.includes(8);
console.log("Array includes 8:", hasEight); // Output: true [cite: 38]

// Find the index of 10
const indexOfTen = numbers.indexOf(10);
console.log("Index of 10:", indexOfTen); // Output: 3 [cite: 39]

// Sort the array in ascending order (Note: The original array is modified)
numbers.sort((a, b) => a - b);
console.log("Sorted array:", numbers); // Output: [2, 5, 8, 10, 12] [cite: 40]