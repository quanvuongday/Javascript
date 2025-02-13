/*
- Create a variable named 'num1' and assign it a floating-point value.
- Create a variable named 'num2' and assign it a different floating-point value.

- Round both 'num1' and 'num2' to the nearest integer and store the results in variables 'roundedNum1' and 'roundedNum2'.
- Calculate the square root of 'roundedNum1' and store it in a variable named 'sqrtNum1'.
- Find the larger number between 'roundedNum1' and 'roundedNum2' and store it in a variable named 'maxNum'.

- Use console.log() to print 'roundedNum1', 'roundedNum2', 'sqrtNum1', and 'maxNum' to the console.
- Use the typeof operator to check the data type of each new variable and print the result using console.log().
*/

let a = 1.23, b = 4.56
let roundedNum1 = Math.round(a)
let roundedNum2 = Math.round(b)
let sqrtNum1 = Math.sqrt(a)
let maxNum = Math.max(a,b)
console.log(roundedNum1,roundedNum2,sqrtNum1,maxNum)

console.log(
    typeof roundedNum1,
    typeof roundedNum2,
    typeof sqrtNum1,
    typeof maxNum
)
