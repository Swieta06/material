const userModel = require("../models/users");
const argon=require('argon2')
exports.readUsers = async (req, res) => {
  const users = await userModel.selectAllUser();
  return res.json({
    success: true,
    message: "list all user",
    results: users,
  });
};

exports.readUserByid = async (req, res) => {
  const user = await userModel.selectUserById(req.params.id);
  if (user) {
    return res.json({
      succsess: true,
      message: "detail user",
      results: user,
    });
  } else {
    return res.status(404).json({
      succsess: false,
      message: "user not found",
    });
  }
};
exports.destroyUserByid = async (req, res) => {
    const user = await userModel.deletUserById(req.params.id);
    if (user) {
      return res.json({
        succsess: true,
        message: "delete user succesfully",
        results: user,
      });
    } else {
      return res.status(404).json({
        succsess: false,
        message: "user not found",
      });
    }
  };
// exports.reaUserById=()=>{

// }
exports.createUsers = async (req, res) => {
    req.body.password=await argon.hash(req.body.password)
    const user = await userModel.insertUser(req.body);
    return res.json({
      success: true,
      message: "create user succsesfully",
      results: user,
    });
  };

  exports.editUsers = async (req, res) => {
    req.body.password=await argon.hash(req.body.password)
    const user = await userModel.updateUser(req.body,req.params.id);
    return res.json({
      success: true,
      message: "update succsesfully",
      results: user,
    });
  };
  