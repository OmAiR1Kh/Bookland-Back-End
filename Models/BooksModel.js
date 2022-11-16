const mongoose = require("mongoose");

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
module.exports = Books