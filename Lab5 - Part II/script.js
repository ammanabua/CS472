'use strict'
// QUESTION 1
// a)

function computeSumOfSquares(a){
    let sumofSquares = 0;

    a.map(n => sumofSquares += n * n);

    return sumofSquares;
}

var arr = [1, 2, 3];

console.log("Sum of squares in array: " + computeSumOfSquares(arr))


// QUESTION 1
// b)

function printOddNumbersOnly(a){
    return a.filter(n => n%2 !=0 )
}

console.log("Odd Numbers in the array: " + printOddNumbersOnly(arr));


// QUESTION 1
// c)

function printFibo(n, a, b){
    var fiboSequence = [];

    fiboSequence.push(a, b);

    for (var i = 2; i < n; i++){
        var nextNum = fiboSequence[i - 1] + fiboSequence[i - 2];
        fiboSequence.push(nextNum);
    }

    console.log(fiboSequence.join(', '));
}

printFibo(10, 3, 1);


// QUESTION 2

let user = {
    name: "John",
    years: 30
}

let { name, years: age, isAdmin = false } = user;


alert(name);
alert(age);
alert(isAdmin);


// QUESTION 3

let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
]


function addBook(title, author, libraryID){
    let newBook = { title, author, libraryID };
    libraryBooks.push(newBook);

    return newBook;
}

function getTitles(){
    let titles = libraryBooks.map(book => book.title);
    return titles.sort();
}

function findBooks(title){
    let books = libraryBooks.filter(book => book.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));

    books.sort((a, b) => a.author.localeCompare(b.author));

    return books;
}


console.log(addBook("The Long Road Home", "Danielle Steele", 9804));
console.log(getTitles());
console.log(findBooks("Road"));

