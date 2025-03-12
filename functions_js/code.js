// Define a function using function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Define a function using function expression
const add = function(a, b) {
    return a + b;
};

// Define an arrow function
const multiply = (a, b) => {
    return a * b;
};

// Call the functions
console.log(greet('Alice')); // Output: Hello, Alice!
console.log(add(2, 3)); // Output: 5
console.log(multiply(4, 5)); // Output: 20


const divide = (a,b) => {
    return a / b;
}

console.log(divide(10, 2)); // Output: 5