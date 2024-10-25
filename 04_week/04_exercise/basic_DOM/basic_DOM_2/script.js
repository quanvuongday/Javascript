/* 
Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.
*/

const input = document.querySelector('#fruitInput')
const list = document.querySelector('#fruitList')
const btn = document.querySelector('#addFruitBtn')

function addFruit() {
    console.log(input.value) //Log the input value to the browser's console.
    const newEl = document.createElement('li') //create new element 'li'to store input
    newEl.textContent = input.value // set its content to the value entered by the user
    list.appendChild(newEl) // add it to the fruit list (<ul>)
    input.value = '' //clears the input field by setting its value to an empty string ('')
}
btn.addEventListener('click', addFruit)