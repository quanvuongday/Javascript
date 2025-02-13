/**
Refine the getLastCharacter function so that it returns the last character from the name parameter it receives.
 */

function  getLastCharacter (name) {
  return name [name.length - 1]
}

return name.slice(-1); // other way


// Sample usage - do not modify
console.log(getLastCharacter('Sam')); // "m"
console.log(getLastCharacter('Alex')); // "x"
console.log(getLastCharacter('Charley')); // "y"
