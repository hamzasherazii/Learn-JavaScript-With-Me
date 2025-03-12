// Logical AND (&&)
let a = true;
let b = false;
console.log(a && b); // false because both operands are not true

// Logical OR (||)
let c = true;
let d = false;
console.log(c || d); // true because at least one operand is true

// Logical NOT (!)
let e = true;
console.log(!e); // false because NOT operator inverts the boolean value

// Combining logical operators
let f = true;
let g = false;
let h = true;
console.log((f && g) || h); // true because (true && false) is false, but false || true is true

// Short-circuit evaluation
let i = false;
let j = true;
console.log(i && (j = false)); // false, j is not assigned because i is false
console.log(j); // true, j remains true because the assignment did not happen

console.log(i || (j = false)); // false, j is assigned because i is false
console.log(j); // false, j is now false because the assignment happened