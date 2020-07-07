
// Task 2
console.log("Hello World, Node.js!");

// Task 2
// Create and indexed array of 5 numbers
let indexedArray = [1, 3, 2, 5, 6];
// Output the array to the console.
console.log(indexedArray);

// Add a number to the end of the array (push)
indexedArray.push(4);
// Output the array to the console
console.log(indexedArray);

// Add a number to the beginning of the array (unshift)
indexedArray.unshift(0);
// Output the array to the console
console.log(indexedArray);

// Add an item after the 3rd item in the array (splice)
indexedArray.splice(3, 0, 7)
// Output the array to the console
console.log(indexedArray);

// Remove the last number from the array (pop)
indexedArray.pop()
// Output the array to the console
console.log(indexedArray);

// Remove the 2nd number from the array (splice)
indexedArray.splice(1, 1)
// Output the array to the console
console.log(indexedArray);

// Edit the 5th element in the array to have a value of 100
indexedArray[4] = 100;
// Output the array to the console
console.log(indexedArray);

// Sort the array in ascending order (smallest to biggest) (sort)
indexedArray.sort((a, b) => { return a - b });
// Output the array to the console
console.log(indexedArray);

// Task 3
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
console.log(people);

// Convert that object to a JSON string (stingify)
let peopleString = JSON.stringify(people);
// Output the string to the console.
console.log(peopleString);

// Convert the JSON string back into a javascript object (parse)
let peopleParse = JSON.parse(peopleString);
// Output the object to the console.
console.log(peopleParse);

// Task 4