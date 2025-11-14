const products = [
    { name: "Keyboard", price: 2500, qty: 2 },
    { name: "Mouse", price: 1500, qty: 3 },
    { name: "Monitor", price: 22000, qty: 1 }
]; 

// Calculate the total value of all products using .reduce()
// Total Value = Sum of (price * quantity) for each product
const totalValue = products.reduce((accumulator, product) => {
    // Calculate the value for the current product
    const productValue = product.price * product.qty;
    // Add it to the accumulated total
    return accumulator + productValue;
}, 0); // Start the accumulator at 0 [cite: 116]

console.log("Total Value of all Products:", totalValue);
// Calculation: (2500 * 2) + (1500 * 3) + (22000 * 1)
// 5000 + 4500 + 22000 = 31500
// Output: 31500