const userModel=require('../models/users')
exports.getProfile = async (req, res) => {
    const user = await userModel.selectUserById(req.user.id);
    if (user) {
      return res.json({
        succsess: true,
        message: "Profile User",
        results: user,
      });
    } else {
      return res.status(404).json({
        succsess: false,
        message: "user not found",
      });
    }
  };