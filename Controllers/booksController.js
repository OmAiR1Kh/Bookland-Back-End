const Books = require("../Models/BooksModel");

const getBooks = async (req, res, next) => {
  Books.find()
    .sort({ _id: -1 })
    .limit(10)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

const getBooksByCategory = async (req, res, next) => {
  const category = req.params.id;
  if (category) {
    if (category == "all") {
      Books.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
    } else {
      Books.find({ category: category })
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
    }
  } else {
    Books.find()
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  }
};

const getBooksById = async (req, res) => {
  Books.findById(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

const searchByAuthor = async (req, res) => {
  const author = req.params.id;
  Books.find({ author: { $regex: author, $options: "i" } })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

const searchByTitle = (req, res) => {
  const title = req.params.id;
  Books.find({ title: { $regex: title, $options: "i" } })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

const searchByTitleOrAuthor = () => {
  const search = req.params.id;
  Books.find({
    $or: [
      { title: { $regex: search, $options: "i" } },
      { author: { $regex: search, $options: "i" } },
    ],
  })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};
const deleteBook = (req, res) => {
  const id = req.params.id;
  Books.findByIdAndDelete(id)
    .then((deleteBook) => {
      Books.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

const editBook = (req, res) => {
  Books.findById(req.params.id)
    .then(async (book, err) => {
      Object.assign(book, req.query);
      await book.save();
      res.send({ message: "the book is updated successfuly", data: book });
    })
    .catch((err) => {
      res.status(404).send({
        status: 404,
        error: true,
        message: `the book '${req.params.id}' does not exist`,
      });
    });
};

const createBook = async (req, res) => {
  let book = new Books(req.query);
  book
    .save()
    .then(() => {
      res
        .status(200)
        .send({ message: "the book is created successfuly", data: book });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getBooks,
  getBooksByCategory,
  getBooksById,
  searchByAuthor,
  searchByTitle,
  searchByTitleOrAuthor,
  deleteBook,
  createBook,
  editBook,
};
