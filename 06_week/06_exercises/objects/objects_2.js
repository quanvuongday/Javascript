/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/
function Book  (title, author, yearPublished) {
    this.title = title
    this.author = author
    this.year = yearPublished
}

const book1 = new Book('Suomen1', 'Sonja', 2023)
const book2 = new Book('Suomen2', 'Sanni', 2024)

const library = [book1,book2]

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

console.log(book1.title)
book2.year = 2022
console.log(book2.year)
/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

book1.genres = "first edition"
book1['isAvailable'] = true
/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

function Book  (title, author, yearPublished,genres) {
    this.title = title
    this.author = author
    this.year = yearPublished
    this.genres = genres
}
const book3 = new Book('Suomen3', 'Sanni', 2025, '2nd edition')
library.push(book3)
 console.log(library)
/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

 function createBook (title, author, yearPublished,genres) {
    return {
        title: title,
        author: author,
        yearPublished: yearPublished,
        genres: genres
    }
 }
 const book4 = createBook('1984', 'George Orwell', 1949, [ 'Science Fiction']);
console.log(book4);


/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/
const myJson = JSON.stringify(library)
console.log(myJson)

const myObj = JSON.parse(myJson)
console.log(myObj) 
console.log(book1.title)