/**
Refine the skipFirstCharacter function to return a string containing all characters from the text parameter, excluding the first character.
 */

//const skipFirstCharacter = (str) => str.slice(1, str.length )

const skipFirstCharacter = (str) => str.substring(1 ) // better option


// Sample usage - do not modify
console.log(skipFirstCharacter('Xcode')); // "code"
console.log(skipFirstCharacter('Hello')); // "ello"
