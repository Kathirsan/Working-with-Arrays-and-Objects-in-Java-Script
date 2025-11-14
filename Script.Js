// Create the array
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange", "Grapes"] [cite: 12, 13]

// Print the first item
console.log("First fruit:", fruits[0]); // Output: Apple [cite: 15]

// Print the last item
console.log("Last fruit:", fruits[fruits.length - 1]); // Output: Grapes [cite: 15]

// Add a new fruit at the end of the array
fruits.push("Pineapple");
console.log("After adding:", fruits); // Output: ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple"] [cite: 16]

// Remove the second fruit (which is at index 1: "Banana")
fruits.splice(1, 1);
console.log("After removing second:", fruits); // Output: ["Apple", "Mango", "Orange", "Grapes", "Pineapple"] [cite: 17]

// Find the length of the array
console.log("Array length:", fruits.length); // Output: 5 [cite: 18]