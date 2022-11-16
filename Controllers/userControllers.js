const User = require("../Models/UserModels");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

// Get All Users Controller
const getAll = expressAsyncHandler(async (req, res) => {
  try {
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (error) {
    console.log(error);
  }
});

// Get User By ID Controller
const getOne = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json("Not Found");
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

// Create User Controller
const create = expressAsyncHandler(async (req, res) => {
  try {
    const generate = (n) => {
      String(Math.ceil(Math.random() * 10 ** n)).padStart(n, "0");
    };
    const num = generate(6);
    const newUser = new User(req.body);

    const user = await newUser.save();
    res.status(200).json({ msg: "User Created Successfully", data: user });
  } catch (error) {
    console.log(error);
  }
});

// Update User's password Controller
const updatePassword = expressAsyncHandler(async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user);
    const updatePassword = User.findByIdAndUpdate(
      req.params.id,
      { password: req.body.password },
      { new: true }
    );
    res.status(200).json({ msg: "Password updated successfully.", data: user });
  } catch (error) {
    next(error);
  }
});

// Update User Controller
const updateUser = expressAsyncHandler(async (req, res, next) => {
  await User.findById(req.params.id)
    .then(async (user) => {
      Object.assign(user, req.body, { new: true });
      await user.save();
      res.status(200).json({ msg: "User updated successfully", data: user });
    })
    .catch((err) => {
      next(err);
    });
});

// Delete User Controller
const deleteUser = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
});

// User Login Controller
const userLogin = expressAsyncHandler(async (req, res, next) => {
  try {
    const email = req.body.email;
    const pass = req.body.password;
    const user = await User.findOne({ email });
    if (!user) {
      return console.log("Invalid Email");
    }
    const isPasswordCorrect = await user.comparePassword(pass);
    if (!isPasswordCorrect) {
      return res.status(402).json("Invalid Password");
    }
    res.status(201).json({
      username: user.username,
      email: user.email,
      token: generateToken(user),
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  getAll,
  getOne,
  create,
  updatePassword,
  updateUser,
  deleteUser,
  userLogin,
};
