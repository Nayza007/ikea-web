import Joi from "joi";

const ProductSchema = Joi.object({
  productName: Joi.string()
    .required()
    .messages({ "string.empty": "Product name is required" }),
  detail: Joi.string()
    .required()
    .messages({ "string.empty": "Detail is required" }),
  quantity: Joi.string().trim().required().messages({
    "string.empty": "Quantity is required",
  }),
  price: Joi.string().trim().required().messages({
    "string.empty": "Price is required",
  }),
  type: Joi.string().trim().required().messages({
    "string.empty": "Type is required",
  }),
});

const validateProduct = (ProductInput) => {
  const { error } = ProductSchema.validate(ProductInput, {
    abortEarly: false,
  });

  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};
export default validateProduct;
