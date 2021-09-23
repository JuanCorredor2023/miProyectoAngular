const { Router } = require('express')
const adminsControllers = require('../controllers/signAdmin.controllers')
const router = Router();
const tokenFunctions = require('../middlewares/verifyToken')

router.get('/', tokenFunctions.verifyToken, adminsControllers.sayHi)
router.post('/signup', adminsControllers.signup)
router.post('/signin', adminsControllers.signin)

module.exports = router//cambiar admins