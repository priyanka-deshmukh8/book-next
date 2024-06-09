// backend/models/bookModel.js
let books = [];

module.exports = {
  getAllBooks: () => books,
  addBook: (book) => {
    books.push(book);
    return book;
  },
};

// backend/controllers/bookController.js
const bookModel = require('./bookmodel');

exports.getBooks = (req, res) => {
  const books = bookModel.getAllBooks();
  res.json(books);
};

exports.createBook = (req, res) => {
  const newBook = bookModel.addBook(req.body);
  res.status(201).json(newBook);
};

// backend/routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getBooks);
router.post('/', bookController.createBook);

module.exports = router;
