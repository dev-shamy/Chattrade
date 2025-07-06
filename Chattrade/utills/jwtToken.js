const jwt = require("jsonwebtoken");

const createToken = (userId, email) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ userId: userId, email: email }, jwtSecretKey, {
    expiresIn: "10m",
  });

  return token;
};

const decodeToken = (data) => {
  return jwt.verify(data, process.env.JWT_SECRET_KEY);
};

const refreshToken = (userId, email) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ userId: userId, email: email }, jwtSecretKey, {
    expiresIn: "1d",
  });

  return token;
};

module.exports = {
  createToken,
  decodeToken,
  refreshToken,
};
