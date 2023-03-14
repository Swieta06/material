const routers=require("express").Router()
const log=require('../middlewares/log')
const authMiddleware = require("../middlewares/auth")

routers.use('/users',authMiddleware,log,require('./users'))
routers.use('/auth',require('./auth'))
routers.use('/profile',authMiddleware,require('./profile'))

module.exports=routers

//  users/:id
// users/:name