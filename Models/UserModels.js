const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please Enter a Valid Username"],
      index: true,
      sparse: true,
      lowercase: true,
      validate: {
        validator: function (value) {
          const self = this;
          const errorMsg = "The User-Name is already taken!";
          return new Promise((resolve, reject) => {
            self.constructor
              .findOne({ email: value })
              .then((model) =>
                model._id ? reject(new Error(errorMsg)) : resolve(true)
              ) // if _id found then email already in use
              .catch((err) => resolve(true)); // make sure to check for db errors here
          });
        },
      },
    },
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "minimum Password length is 6 characters"],
      maxlength: [100, "maximum Password length is 40 characters"],
    },
    role: {
      type: [String],
      required: [true, "Please enter a valid ROLE"],
      enum: ["superadmin", "admin", "user", "writer"],
      default: ["user"],
    },
    stripe_acount_id: "",
    stripe_seller: {},
    stripeSession: {},
    activated: {
      type: Boolean,
      default: false,
    },
    lastSentCode: {
      code: {
        type: String,
        required: [true],
        default: "non",
      },
      fullcode: {
        type: String,
      },
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 16); // I determined the salt is used
});

userSchema.methods.comparePassword = async function (enteredPassword, next) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = model("UserSchema", userSchema);
module.exports = User;
