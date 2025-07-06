const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const brearerHeader = req.headers["authorization"];
    if (brearerHeader != undefined) {
      const brearer = brearerHeader.split(" ")[1];
      req.token = brearer;
      const TokenData = jwt.verify(brearer, process.env.JWT_SECRET_KEY);
      res.userData = TokenData;
      next();
    } else {
      return res.status(403).json({ message: "Access Denied.." });
    }
  } catch (error) {
    console.log(`error at verify token ${error}`);
    return res
      .status(403)
      .json({ message: `Access denied.. might be token missing ` });
  }
};

module.exports = { verifyToken };
