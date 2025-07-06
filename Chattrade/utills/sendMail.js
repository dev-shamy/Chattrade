var nodemailer = require("nodemailer");

const sendEmail = (email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Sending test Email",
    text: "That was easy!",
  };

  try {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return error;
      } else {
        return info.response;
      }
    });
  } catch (error) {
    console.log("Error at: ", error);
    return { message: "Email not sent.." };
  }
};

module.exports = {
  sendEmail,
};
