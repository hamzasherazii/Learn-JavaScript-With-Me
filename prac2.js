let a = 5;
let b = 10;

console.log(`Before swapping: a = ${a}, b = ${b}`);

// Swapping using destructuring assignment
[a, b] = [b, a];

console.log(`After swapping: a = ${a}, b = ${b}`);
