const { Schema, model } = require("mongoose");

const GenreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Genre = model("GenreSchema", GenreSchema);

module.exports = Genre;
