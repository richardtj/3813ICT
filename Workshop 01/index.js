
// Task 1
console.log("Node is working");

// Task 2
let myString = "Hello@World, Node.JS Stringsss";
let badWord = "bad word";
let mistype = "spwlling";
console.log(myString + "\n" + badWord + "\n" + mistype);

// Task 3
myString = myString.substr(0, myString.length - 2);
myString = myString.replace("@", " ");
console.log(myString + "\n" + badWord + "\n" + mistype);

// Task 4
badWord = badWord == "bad word" ?  "***" :badWord;
console.log(myString + "\n" + badWord + "\n" + mistype);

