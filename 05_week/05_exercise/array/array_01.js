// Initial array of team members
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

// Exercise 1: Loop through `teamMembers` and log each name to the console.
// Write your code here:
let ex1 = teamMembers.forEach(value => console.log(value))

// Exercise 2: Remove the first member of the array.
// Write your code here:
teamMembers.shift()
console.log(teamMembers)

// Exercise 3: Remove the last member of the array.
// Write your code here:
teamMembers.pop()
console.log(teamMembers)

// Exercise 4: Add a new member "Alex" to the front of the array.
// Write your code here:
teamMembers.unshift("Alex")
console.log(teamMembers)

// Exercise 5: Append a new member "Linda" to the end of the array.
// Write your code here:
teamMembers.push("Linda")
console.log(teamMembers)

// Exercise 6: Create a new array that excludes the first two members.
// Write your code here:
let ex6 = teamMembers.slice(1)
console.log(ex6)

// Exercise 7: Find the index of "Mike" in the array.
// Write your code here:
console.log(teamMembers.indexOf("Mike"))

// Exercise 8: Try to find the index of "Jake" (who is not in the array).
// Write your code here:
console.log(teamMembers.indexOf("Jake"))

// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:
console.log(teamMembers)
teamMembers.splice(2, 1, 'Carol', 'Bruce')
console.log(teamMembers)

// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
// Write your code here:
 let newArr = teamMembers.concat('Bob')
console.log(newArr)

// Exercise 11: Using `slice` to Copy the Entire Array
// Write your code here:
let ex11 = teamMembers.slice()
console.log(teamMembers)

// Exercise 12: Combining Arrays with `concat`
// Define `newMembers` array, and including names 'Tina' and 'Dean'. Combine the arrays
// Write your code here:
let newMembers = teamMembers.concat( 'Tina' , 'Dean')
console.log(newMembers)

// Exercise 13: Finding all occurrences of a John
// Write your code here:
let ex13 = teamMembers.filter((element) => element === 'John')
console.log(ex13)

// Exercise 14: Transforming members with `map` to be all written uppercase
// Write your code here:
const upC = teamMembers.map(value => value.toUpperCase())
console.log(upC)