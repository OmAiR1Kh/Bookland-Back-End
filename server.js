const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var cors = require("cors");
app.use(cors());
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
require("dotenv").config();
const BooksRoutes = require("./Routes/BookRoutes");
const UserRoutes = require("./Routes/userRoutes");
var mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

// const books = require("./datanew.js");
// books.map((row) => {
//     var book = new Books(row);
//     book.save()
//         .then((result) => console.log(`book ${row.title} uploaded to mongodb`))
//         .catch((err) => console.log(err))
// });

app.use("/", BooksRoutes);
app.use("/api/users", UserRoutes);

app.listen(process.env.PORT, () => {
  console.log(`your application is listen on port: ${process.env.PORT}`);
});
