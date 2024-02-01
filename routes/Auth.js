const express = require('express')
const router = express.Router()
const UserVa1idator=require("../middlewares/UserValidatorMW" );

const AuthController = require('../controllers/AuthController')

router.post('/register',UserVa1idator , AuthController.register)
router.post('/login', AuthController.login)
router.get('/', (req, res) => res.render('myaccount'))

module.exports = router