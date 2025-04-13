const router = require("express").Router();
const { getRefreshToken } = require("../controller/authContoller");

router.post("/refresh-token", getRefreshToken);

module.exports = router;
