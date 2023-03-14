const authRout=require('express').Router()
const authController=require('../controllers/auth')

authRout.post('/login',authController.login);
authRout.post('/register',authController.register);

module.exports=authRout