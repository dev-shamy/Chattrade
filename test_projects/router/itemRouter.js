const router = require("express").Router();
const itmeRouter = require("../controller/itemController");
const { verifyToken } = require("../middleware/middleware");

router.post("/addItem", verifyToken, itmeRouter.addItems);
router.put("/updateItem/:Id", verifyToken, itmeRouter.updateItems);
router.get("/getUserItem", verifyToken, itmeRouter.getUserItems);
router.post("/deleteItem/:Id", itmeRouter.deleteItem);
router.get("/getAll", verifyToken, itmeRouter.getAll);

module.exports = router;
