function swapStrings(str1, str2) {
    console.log("Before Swap:");
    console.log("str1:", str1);
    console.log("str2:", str2);

    // Swapping the strings
    let temp = str1;
    str1 = str2;
    str2 = temp;

    console.log("After Swap:");
    console.log("str1:", str1);
    console.log("str2:", str2);
}

let str1 = "Hello";
let str2 = "World";

swapStrings(str1, str2);