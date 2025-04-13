const { refreshToken } = require("../utills/jwtToken");

const getRefreshToken = (req, res) => {
  try {
    return refreshToken(userId, email);
  } catch (error) {
    console.log("error at refresh token: ", error);
  }
};

module.exports = {
  getRefreshToken,
};
