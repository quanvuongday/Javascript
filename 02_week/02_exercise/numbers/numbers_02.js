// Define a function to convert a temperature from Fahrenheit to Celsius.
// This function uses the formula (Fahrenheit - 32) * 5/9
// The resulting temperature is rounded to one decimal place for precision.

function fahrenheitToCelsius (a) {
   let b = ((a-32) * 5/9 )
     let c = b.toFixed(1) //conver it to number
return parseFloat(c)
}
// Sample usage - do not modify
console.log(fahrenheitToCelsius(21)); // "-6,1"
console.log(fahrenheitToCelsius(100)); // "-6,1"
