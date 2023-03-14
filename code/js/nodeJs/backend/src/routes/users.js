const userRoute=require('express').Router()
const userCotrollers=require('../controllers/users')
userRoute.get('/',userCotrollers.readUsers)
userRoute.get('/:id',userCotrollers.readUserByid)
userRoute.delete('/:id',userCotrollers.destroyUserByid)
userRoute.post('/',userCotrollers.createUsers)
userRoute.patch('/:id',userCotrollers.editUsers)
module.exports=userRoute