const Router = require("express");
const router = new Router();
const userController = require("../controller/user.controller");

router.get('/',userController.get)
router.get('/page/:id',userController.getPage)
module.exports = router;
