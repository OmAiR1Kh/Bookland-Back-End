const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const books = require("./datanew.js");
const adminRoute = require("./AdminRoutes/AdminRoutes");
app.use(adminRoute);
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
require("dotenv").config();

var mongoose = require("mongoose");

mongoose
  .connect(
    process.env.DATABASE_URL
  )
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;
const BookSchema = new Schema({
  img: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },

  year: {
    type: Number,
    required: true,
  },

  desc: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    default: 15,
  },
  rating: {
    type: Number,
    default: 4,
  },
});
var Books = mongoose.model("books", BookSchema);
// books.map((row) => {
//     var book = new Books(row);
//     book.save()
//         .then((result) => console.log(`book ${row.title} uploaded to mongodb`))
//         .catch((err) => console.log(err))
// });

// ANCHOR Search Latest Books
app.get("/latestbooks/", function (req, res) {
  Books.find()
    .sort({ _id: -1 })
    .limit(10)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// ANCHOR Search category
app.get("/books/:id", function (req, res) {
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
});

app.get("/book/:id", function (req, res) {
  Books.findById(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// ANCHOR Search Author

app.get("/books/search/author/:id", function (req, res) {
  const author = req.params.id;
  Books.find({ author: { $regex: author, $options: "i" } })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// ANCHOR Search Title

app.get("/books/search/title/:id", function (req, res) {
  const title = req.params.id;
  Books.find({ title: { $regex: title, $options: "i" } })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// ANCHOR Search title or author

app.get("/books/search/any/:id", function (req, res) {
  const search = req.params.id;
  Books.find({
    $or: [
      { title: { $regex: search, $options: "i" } },
      { author: { $regex: search, $options: "i" } },
    ],
  })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.delete("/books/delete/:id", (req, res) => {
  const id = req.params.id;
  Books.findByIdAndDelete(id)
    .then((deleteBook) => {
      Books.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

// http://localhost:8000/book/edit/62083ee52b4004b3b9f4d11d?title=rabi3&author=ahmad&year=2015&desc=book&price=15&rating=4

app.put("/book/edit/:id", (req, res) => {
  Books.findById(req.params.id)
    .then(async (book, err) => {
      Object.assign(book, req.query);
      await book.save();
      res.send({ message: "the book is updated successfuly", data: book });
    })
    .catch((err) => {
      res
        .status(404)
        .send({
          status: 404,
          error: true,
          message: `the book '${req.params.id}' does not exist`,
        });
    });
});

app.post("/book/create", (req, res) => {
  let book = new Books(req.query);
  book
    .save()
    .then((newBook) => {
      res
        .status(200)
        .send({ message: "the book is created successfuly", data: book });
    })
    .catch((err) => {
      console.log(err);
    });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`your application is listen on port: ${PORT}`);
});
