const { createToken } = require("../utills/jwtToken");
const { saveUser, findByEmail, findByUserName } = require("../DOA/queries");
const validator = require("../validator/joiValidator");
const { sendEmail } = require("../utills/sendMail");

const signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password, userName } = req.body;

    const userData = {};
    userData.firstName = firstName;
    userData.lastName = lastName;
    userData.email = email;
    userData.phone = phone;
    userData.password = password;
    userData.username = userName;

    response = validator.UserSchemaValidator(req.body);

    if (response.error) {
      return res.status(422).json({
        message: `Unprocessable Entity..`,
        Error: response.error.details,
      });
    }

    const user =
      (await findByEmail(req.body.email)) ||
      (await findByUserName(req.body.userName));

    if (user) {
      return res.status(422).json({
        message:
          "user already exist with this email or username already exist...",
      });
    }

    const UserData = await saveUser(response.value);
    const token = createToken(UserData._id, response.value.email);

    return res.status(200).json({
      message: "user created successfully.......",
      token: token,
      data: { UserData },
    });
  } catch (error) {
    console.log("error at signup contoller: ", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

const login = async (req, res) => {
  try {
    if (
      !(req.body && req.body.length != 0 && req.body.email && req.body.password)
    ) {
      return res.status(422).json({ message: "body shoud not be empty..." });
    }

    const { email, password } = req.body;

    if (email.trim().length == 0 && password.trim().length == 0) {
      return res.status(422).json({ message: "Unprocessable Entity.." });
    }

    const user = await findByEmail(email);
    if (user) {
      const token = createToken(user._id, email);
      return res
        .status(200)
        .json({ message: "login successfully...", token: token, email: email });
    }

    return res.status(422).json({ message: "user doesn't exist..." });
  } catch (error) {
    console.log("error at login: ", error);
    return res
      .status(500)
      .json({ message: "Internel server error", Error: error });
  }
};

const sendMail = (req, res) => {
  try {
    const { email } = req.body;
    const data = sendEmail(email);
    if (data?.message) {
      return res.status(422).json({ data });
    } else {
      return res
        .status(200)
        .json({ message: "message send successfully...", data: data });
    }
  } catch (error) {
    console.log("error at sending email: ", error);
    return res
      .status(500)
      .json({ message: "Internel server error..", Error: error });
  }
};

module.exports = {
  signUp,
  login,
  sendMail,
};
