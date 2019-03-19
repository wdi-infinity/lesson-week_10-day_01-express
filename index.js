/* eslint-disable prefer-destructuring */
/* eslint-disable object-shorthand */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
// require express library
const express = require('express');
const bodyParser = require('body-parser');
// define a port to host our server
const port = 3000;
// books for mockinig a database
const books = [
  { title: 'Dictionary', author: 'Webster' }, // 0
  { title: 'Encyclopedia', author: 'Encarta' }, // 1
  { title: 'Clean Code', author: 'Robert Cecil Martin' }, // 2
];

// instantiate/create an express application
const app = express();
const myMiddleWare = (req, res, next) => {
  console.log("1st" + req.method + ' to ' + req.url);
  next();
};
const myMiddleWare2 = (req, res, next) => {
  req.mike = 'the best';
  console.log("2nd");
  next();
};
// use body parser middleware
app.use(bodyParser.json());
app.use(myMiddleWare);
app.use(myMiddleWare2);

// define a index route /books to respond with all the books
app.get('/books', (req, res) => {
  console.log(req.mike);
  res.json({ books: books });
});

// define create route /books to create a book and respond with it
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
});

// define a show route /books/:id to respond with a single book
app.get('/books/:id', (req, res) => {
  console.log('3rd');
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
// start app on port 3000 and print to console that it is running
app.listen(port, () => console.log('App running on port ' + port));
