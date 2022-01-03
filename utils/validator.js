const validator = require("validator");

module.exports.notNullValidator = function (value) {
  if (typeof value === String && (value === null || validator.isEmpty(value))) {
    throw new Error("field can not be null");
  } else {
    if (value === null) {
      throw new Error("field can not be null");
    }
  }
};

module.exports.phoneNumberValidator = function (value) {
  if (value === null || value.length > 10) {
    throw new Error("Phone Number should be of 10 digits");
  }
};

module.exports.emailValidator = function (value) {
  if (!validator.isEmail(value)) {
    throw new Error("email is not valid");
  }
};
