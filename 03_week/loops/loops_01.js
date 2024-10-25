// Create a program that outputs all odd, positive numbers less than 100, starting from 1, such as 1, 3, 5, 7, 9, 11, and so on.

for ( let i = 1; i < 100 ; i++){
if (i % 2 !== 0) {
    console.log(i)
}
}
// second way
function oddNum() {
    for (let i = 1; i < 100; i += 2) 
        console.log(i) 
    }


oddNum()