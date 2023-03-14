const userModel = require("../models/users");
const { use } = require("../routes");
const argon=require('argon2')
const jwt=require('jsonwebtoken')

exports.login = async (req, res) => {
  const user = await userModel.selectUserByEmail(req.body.email);
  if (user) {
    if (await argon.verify(user.password,req.body.password)) {
        //add jwt
        const data={id: user.id}
        const token=jwt.sign(data,'backend')
      return res.json({
        success: true,
        message: "login succes",
        result:{token}
      });
    } else {
      return res.status(401).json({
        success: true,
        message: "wrong password",
      });
    }
  } else {
    return res.status(401).json({
      success: true,
      message: "wrong email",
    });
  }
};

exports.register = async (req, res) => {
  const isExists = await userModel.selectUserByEmail(req.body.email);

  if (isExists) {
    return res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  }
  req.body.password= await argon.hash(req.body.password)
  const user = await userModel.insertUser(req.body);
  return res.json({
    success: true,
    message: "register succsesfully",
  });
};
