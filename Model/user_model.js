let mongoose = require("mongoose");
const { emailValidator, phoneNumberValidator } = require("../utils/validator");

let glacierUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: emailValidator,
    },
    phone: {
      type: Number,
      required: true,
      validate: phoneNumberValidator,
    },
    gender: {
      type: String,
      required: true,
      enum: {
        values: ["M", "F"],
        message: "{VALUE} is not supported",
      },
    },
  },
  { timestamps: true }
);

let glacierUser = mongoose.model("GlacierUserData", glacierUserSchema);

module.exports = glacierUser;
