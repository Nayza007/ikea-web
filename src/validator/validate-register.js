import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .messages({ "string.empty": "Firstname is required" }),
  lastName: Joi.string()
    .trim()
    .required()
    .messages({ "string.empty": "Lastname is required" }),
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Email is invalid",
    }),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{9,10}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone number is invalid",
      "string.empty": "Phone number is required",
    }),
  password: Joi.string()
    .trim()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base": "Password is invalid",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
    "any.only": "Confirm password is invalid",
    "string.empty": "Confirm password is required",
  }),
});

const validateRegister = (registerInput) => {
  const { error } = registerSchema.validate(registerInput, {
    abortEarly: false,
  });

  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};
export default validateRegister;
