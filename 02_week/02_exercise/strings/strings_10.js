/**
Refine the capitalize function to ensure it capitalizes the first letter of the name parameter provided to it.
 */

function capitalize  (a) {
   let b = a.toLowerCase() //convert all to lower case
   let c = a[0].toUpperCase() //access 1st character and convert to upper case
    return c + b.slice(1) //combine 1st upper character with the rest (w/ 1st letter)
}

// Sample usage - do not modify
console.log(capitalize('sam')); // "Sam"
console.log(capitalize('ALEX')); // "Alex"
console.log(capitalize('chARLie')); // "Charlie"
