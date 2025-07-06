const router = require("express").Router();
const userController = require("../controller/userController");

router.post("/signUp", userController.signUp);
router.post("/login", userController.login);
router.post("/sendEmail", userController.sendMail);

module.exports = router;
