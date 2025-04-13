const joi = require("joi");

function UserSchemaValidator(userData) {
  const joiSchema = joi.object({
    firstName: joi.string().min(5).max(50).required(),
    lastName: joi.string().min(3).max(30).required(),
    userName: joi.string().min(5).max(20).required(),
    phone: joi.string().min(10).max(12).required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .min(6)
      .max(15)
      .pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$"))
      .required(),
  });
  return joiSchema.validate(userData);
}

module.exports = {
  UserSchemaValidator,
};
