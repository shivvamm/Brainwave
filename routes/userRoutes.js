const express = require('express')
const { getAllUsers, registerController, loginController } = require('../controllers/userController')

//router object
const router = express.Router()

//GET ALL USER || GET
router.get('/all-users', getAllUsers);

// GET USER || POST
router.get('/register', registerController);

//LOGIN
router.post('login', loginController);

module.exports = router