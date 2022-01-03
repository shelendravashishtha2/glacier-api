let express = require("express");
let viewRouter = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

let {
  getuser,
  updateUser,
  deleteUser,
  createUser,
} = require("../Controller/userController");
viewRouter.route("/glacier-user").get(getuser).post(jsonParser, createUser);

viewRouter
  .route("/glacier-user/:id")
  .patch(jsonParser, updateUser)
  .delete(jsonParser, deleteUser);

module.exports = viewRouter;
