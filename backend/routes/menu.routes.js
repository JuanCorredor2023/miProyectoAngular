const { Router } = require('express')
const menuControllers = require('../controllers/menu.controllers');
const router = Router();
const tokenFunctions = require('../middlewares/verifyToken')


console.log(tokenFunctions)
//router.get('/laruta', el middleware, el controlador)
router.get('/showAll', menuControllers.showMenu)
router.post('/create', menuControllers.create)

module.exports = router