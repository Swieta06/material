const profilRoute=require('express').Router()
const profileController=require('../controllers/profile')
profilRoute.get('/',profileController.getProfile)
module.exports=profilRoute