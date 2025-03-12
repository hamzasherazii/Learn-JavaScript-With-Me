// Arrays in JavaScript

// An array is a special variable, which can hold more than one value at a time.
// Here is how you can create an array:

let fruits = ["Apple", "Banana", "Mango"];

// You can access an array element by referring to the index number:
console.log(fruits[0]); // Output: Apple

// You can change an array element:
fruits[1] = "Orange";
console.log(fruits); // Output: ["Apple", "Orange", "Mango"]

// You can find the length of an array (the number of elements in it):
console.log(fruits.length); // Output: 3

// You can loop through an array using a for loop:
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// Apple
// Orange
// Mango

// You can also use the forEach method to loop through an array:
fruits.forEach(function(item, index) {
    console.log(item, index);
});
// Output:
// Apple 0
// Orange 1
// Mango 2

// Adding elements to an array using push:
fruits.push("Grapes");
console.log(fruits); // Output: ["Apple", "Orange", "Mango", "Grapes"]

// Removing the last element from an array using pop:
fruits.pop();
console.log(fruits); // Output: ["Apple", "Orange", "Mango"]

// Removing the first element from an array using shift:
fruits.shift();
console.log(fruits); // Output: ["Orange", "Mango"]

// Adding an element to the beginning of an array using unshift:
fruits.unshift("Strawberry");
console.log(fruits); // Output: ["Strawberry", "Orange", "Mango"]

// Finding the index of an element in an array:
let index = fruits.indexOf("Orange");
console.log(index); // Output: 1

// Removing an element by index using splice:
fruits.splice(index, 1);
console.log(fruits); // Output: ["Strawberry", "Mango"]

// Creating a new array by merging two arrays using concat:
let moreFruits = ["Pineapple", "Kiwi"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["Strawberry", "Mango", "Pineapple", "Kiwi"]