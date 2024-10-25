/* 
Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

// Select the element by ID
const changeBtn = document.getElementById('changeTextBtn').addEventListener('click',  

function  () {
    let contEl = document.getElementById('content') // select text content
    contEl.textContent = "Hello, World!" // Update its text content
}
)
