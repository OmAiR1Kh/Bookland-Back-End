const { Router } = require("express");
const {
  getBooks,
  getBooksByCategory,
  getBooksById,
  searchByAuthor,
  searchByTitle,
  searchByTitleOrAuthor,
  deleteBook,
  editBook,
  createBook,
} = require("../Controllers/booksController");

const app = Router();
app.get("/latestbooks/", getBooks);
app.get("/books/:id", getBooksByCategory);
app.get("/book/:id", getBooksById);
app.get("/books/search/author/:id", searchByAuthor);
app.get("/books/search/title/:id", searchByTitle);
app.get("/books/search/any/:id", searchByTitleOrAuthor);
app.delete("/books/delete/:id", deleteBook);
app.put("/book/edit/:id", editBook);
app.post("/book/create", createBook);

module.exports = app;
