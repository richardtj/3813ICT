console.log("Node is working");

let myString = "Hello@World, Node.JS Stringsss";
let badWord = "bad word";
let mistype = "spwlling";

console.log(myString + "\n" + badWord + "\n" + mistype);

myString = myString.substr(0, myString.length - 2);
myString = myString.replace("@", " ");

badWord = badWord == "bad word" ?  "***" :badWord;

console.log(myString + "\n" + badWord + "\n" + mistype);
