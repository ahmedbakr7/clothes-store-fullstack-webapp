const express = require('express')
const router=express.Router()
const usersController = require('../controllers/UsersControllerDB');
const userVa1idator=require("../middlewares/userValidatorMW" ) ;


router.get('/', usersController.getAllUsers)

// router.get('/', usersController.getusers)

router.get('/:id', usersController.getUserByID)

router.put('/:id' ,usersController.updateUser)

router.post('/'/* ,userVa1idator */ ,usersController.addNewUser)

router.delete('/:id', usersController.deleteUserById)
/* ***************** */

module.exports=router