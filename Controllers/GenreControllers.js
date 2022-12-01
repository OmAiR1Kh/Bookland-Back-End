const Genre = require("../Models/GenresModel");
const expressAsyncHandler = require("express-async-handler");

const getAllGenres = expressAsyncHandler(async (req, res) => {
  try {
    const Genres = await Genre.find();
    res.status(200).json({ data: Genres });
  } catch (error) {
    console.log(error);
  }
});

const getOneGenre = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const genre = await Genre.findById({ id });
    res.status(201).json({ data: genre });
  } catch (error) {
    console.log(error);
  }
});

const createGenre = expressAsyncHandler(async (req, res) => {
  try {
    const genre = new Genre(req.body);
    await genre.save();
    res.status(201).json({ msg: "Genre Saved successfully", data: genre });
  } catch (error) {}
});

const deleteGenre = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    await Genre.findByIdAndDelete(id);
    res.status(200).json("Genre Deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

module.exports = { getAllGenres, getOneGenre, createGenre, deleteGenre };
