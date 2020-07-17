

let spacer = "\n\n----------------------------------------\n";

console.log(spacer)

// Task 1 ------------------------------------------------------------------

console.log("Hello World, Node.js!",spacer);

// Task 2 ------------------------------------------------------------------

// Create and indexed array of 5 numbers
let indexedArray = [1, 3, 2, 5, 6];
// Output the array to the console.
console.log(indexedArray, spacer);

// Add a number to the end of the array (push)
indexedArray.push(4);
// Output the array to the console
console.log(indexedArray, spacer);

// Add a number to the beginning of the array (unshift)
indexedArray.unshift(0);
// Output the array to the console
console.log(indexedArray, spacer);

// Add an item after the 3rd item in the array (splice)
indexedArray.splice(3, 0, 7)
// Output the array to the console
console.log(indexedArray, spacer);

// Remove the last number from the array (pop)
indexedArray.pop()
// Output the array to the console
console.log(indexedArray, spacer);

// Remove the 2nd number from the array (splice)
indexedArray.splice(1, 1)
// Output the array to the console
console.log(indexedArray, spacer);

// Edit the 5th element in the array to have a value of 100
indexedArray[4] = 100;
// Output the array to the console
console.log(indexedArray, spacer);

// Sort the array in ascending order (smallest to biggest) (sort)
indexedArray.sort((a, b) => { return a - b });
// Output the array to the console
console.log(indexedArray, spacer);


// Task 3 ------------------------------------------------------------------

// Create a javascript object with a key of people and a value that is an 
// array of 3 objects each with a firstname and lastname.
let people = {
    "people": [
        {
            "firstname": "Meredith",
            "lastname": "Bates"
        },
        {
            "firstname": "Katy",
            "lastname": "Christensen"
        },
        {
            "firstname": "Jeanette",
            "lastname": "Gonzalez"
        }
    ]
}
// Output the object to the console
console.log(people, spacer);

// Convert that object to a JSON string (stingify)
let peopleString = JSON.stringify(people);
// Output the string to the console.
console.log(peopleString, spacer);

// Convert the JSON string back into a javascript object (parse)
let peopleParse = JSON.parse(peopleString);
// Output the object to the console.
console.log(peopleParse, spacer);


// Task 4 ------------------------------------------------------------------

// Output the sum of numbers in the following array [5,4,3,8]
// Output should look like “Sum of Array is ??”
const arrayAdd = require('array-add-num');
let testArray = [5, 4, 3, 8];
let testResult = arrayAdd(testArray);
console.log("Sum of Array is ", testResult, spacer);

// Output to the console the value of the array-add-num dependency 
// that you see in your package.json file.

let json = require("./package.json");
console.log("array-add-num dependency: ", json.dependencies["array-add-num"], spacer);


// Task 5 ------------------------------------------------------------------

// Declarative function
function multiplyNums(x, y, z) {
    return "new number is " + x * y * z;
}
// Output the result to the console.
console.log("\nMultiply numbers 2, 3, 5 (Declarative function)\n  ", multiplyNums(2, 3, 5), spacer);

// Function expression
let multiplyNumsV1 = function(x, y, z) {
    return "new number is " + x * y * z;
}
// Output the result to the console.
console.log("\nMultiply numbers 2, 3, 5 (Function expression)\n  ", multiplyNumsV1(2, 3, 5), spacer);

// Arrow function
let multiplyNumsV2 = (x, y, z) => {
    return "new number is " + x * y * z;
}
// Output the result to the console.
console.log("\nMultiply numbers 2, 3, 5 (Arrow function)\n  ", multiplyNumsV2(2, 3, 5), spacer);