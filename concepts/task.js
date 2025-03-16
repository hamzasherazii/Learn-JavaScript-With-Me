// Task: Create a program that:

// Stores a list of names in an array.

// Loops through the array and prints each name.

// Checks if a name is "John" and prints a special message if found.


let names = ['John', 'Alice', 'Bob', 'Eve'];

for(let i = 0; i < names.length; i++) {

    console.log(names[i]);
    
    if(names[i] === 'John') {
        console.log('Hello, John Jee!');
    }
    else {
        console.log('Hello, ' + names[i] + '!');
    }
}

