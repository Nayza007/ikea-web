import Joi from "joi";
const loginSchema = Joi.object({
  email: Joi.string().required().messages({
    "string.empty": "Email address or mobile number is required.",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required.",
  }),
});

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });
  console.dir(error);
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};
export default validateLogin;
