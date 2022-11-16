const {
  getAll,
  getOne,
  create,
  updatePassword,
  updateUser,
  deleteUser,
  userLogin,
} = require("../Controllers/userControllers");

const { Router } = require("express");

const router = Router();

router.post("/create", create);
router.post("/login", userLogin);
router.put("/update/:id", updateUser);
router.put("/updatepassword/:id", updatePassword);
router.get("/", getAll);
router.get("/:id", getOne);
router.delete("/:id", deleteUser);

module.exports = router;
