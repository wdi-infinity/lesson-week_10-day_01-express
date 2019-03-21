/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable object-shorthand */
// require express library
const express = require('express');
const bodyParser = require('body-parser');

// instantiate /create an express application
const app = express();
const myMiddleWare = (req, res, next) => {
    console.log("1st" + req.method + 'to' + req.url)
    next();
}

const myMiddleWare2 = (req, res, next) => {
    console.log("2nd")
    next();
}

const firstMiddleWare3 = (req, res, next) => {
    console.log("3rd")
    next();

}

// use body parser middlewate
app.use(bodyParser.json());
app.use(myMiddleWare);
app.use(myMiddleWare2);
app.use(firstMiddleWare3);


// define a port to host our server
const port = 3000;
// books for mockinig a database
const books = [
    { title: 'Dictionary', author: 'Webster' }, // 0
    { title: 'Encyclopedia', author: 'Encarta' }, // 1
    { title: 'Clean code', author: 'Robert Cecil Martin' }, // 2
];
// define create route/books to
app.post('/books', (req, res) => {
    const book = req.body.book;
    books.push(book);
    res.status(201).json({ book: book });
});

app.put('/books/:id', (req, res) => {
    const id = req.params.id;
    const book = req.body.book;
    books[id] = book;
    res.status(201).json({ book: book });
}

// define a home rout /to respond with hello world
 app.get('/books', (req, res) => res.json({ books: books }));

// define a show route/books/:id to respond with a single book
app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books[id];
    res.status(200).json({ book: book });
});
// define a delete route /books/:id to remove the book and respond 204
app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    books.splice(id, 1);
    res.status(204).send();
});

// define update 
//app.patch('/books/:id', (req, res) => {
   // const id = req.params.id;
    //books[id] = req.body.book;
    //const book = books[id];
   // res.status(200).json({ book: book });
});

// start app on port 3000 and print to console that it is runnig
app.listen(port, () => console.log('App runnig on port' + port));