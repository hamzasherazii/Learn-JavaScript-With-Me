// Define an object representing a person
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe

// Calling a method of the object
console.log(person.fullName()); // Output: John Doe

// Adding a new property to the object
person.job = "Software Developer";
console.log(person.job); // Output: Software Developer

// Modifying an existing property
person.age = 31;
console.log(person.age); // Output: 31

// Deleting a property from the object
delete person.job;
console.log(person.job); // Output: undefined