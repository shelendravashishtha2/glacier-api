let userModel = require("../Model/user_model");

module.exports.getuser = async function getuser(req, res) {
  let id = req.id;
  console.log("id", id);
  if (!id) {
    try {
      let users = await userModel.find({});
      console.log(users);
      if (users) {
        res.json({
          message: "users retrieved",
          data: users,
        });
      } else {
        console.log("bhr");
        res.json({
          message: "users not retrieved",
        });
      }
    } catch (err) {
      console.log(users);
      return res.json({ message: err.message });
    }
  }
  let user = await userModel.findById(id);
  if (user) {
    return res.json(user);
  } else {
    return res.json({
      message: "user not found",
    });
  }
};

module.exports.updateUser = async function updateUser(req, res) {
  try {
    let id = req.params.id;
    let user = await userModel.findById(id);
    console.log("user");
    let datatobeupdated = req.body;
    console.log(datatobeupdated);
    if (user) {
      console.log("inside user");
      const keys = [];
      for (let key in datatobeupdated) {
        keys.push(key);
      }
      for (let i = 0; i < keys.length; i++) {
        console.log(keys[i]);
        user[keys[i]] = datatobeupdated[keys[i]];
      }
      console.log(user);
      const updatedData = await user.save();
      console.log(updatedData);
      res.json({
        message: "data updated successfully",
        data: updatedData,
      });
    } else {
      res.json({
        message: "user not found",
      });
    }
  } catch {
    res.json({
      message: err.message,
    });
  }
};

module.exports.deleteUser = async function deleteUser(req, res) {
  console.log("dbfjsb");
  try {
    let id = req.params.id;
    let user = await userModel.findByIdAndDelete(id);
    if (!user) {
      res.json({
        message: "user not found",
      });
    }
    res.json({
      message: "data has been deleted",
      data: user,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

module.exports.createUser = async function createUser(req, res) {
  console.log(req.body);
  try {
    let data = req.body;
    console.log("data", data);
    let dataAftersave = await userModel.create(data);
    if (dataAftersave) {
      res.json({
        message: "data saved successfully",
        data: dataAftersave,
      });
    } else {
      res.json({
        message: "data cannot be saved",
      });
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};
module.exports.deleteUser = async function deleteUser(req, res) {
  let id = req.params.id;
  let data = await userModel.findByIdAndDelete(id);
  if (data) {
    res.json({
      message: "data deleted successfully",
      data: data,
    });
  }
};
