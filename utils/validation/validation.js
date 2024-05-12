import Joi from "joi";
import mongoose from "mongoose";

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    if (!req.value) {
      req.value = {};
    }
    req.value["body"] = req.body;
    next();
  };
};

const userSchema = Joi.object({
  first_name: Joi.string().required().messages({
    "string.pattern.base": `First name is required`,
    "string.empty": `First name is required`,
    "any.required": `First name is required`,
  }),
  last_name: Joi.string().required().messages({
    "string.pattern.base": `Last name is required`,
    "string.empty": `Last name is required`,
    "any.required": `Last name is required`,
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ng"] } })
    .required()
    .messages({
      "string.email": `Invalid email. Please check the email and try again`,
      "any.required": `Email is required`,
    }),
  phone_number: Joi.string().min(7).max(11).required().messages({
    "string.min": `Phone number must be at least 7 characters long`,
    "string.max": `Phone number cannot be longer than 11 characters`,
    "string.pattern.base": `Phone number is required`,
    "string.empty": `Phone number is required`,
    "any.required": `Phone number is required`,
  }),
  country_code: Joi.string().min(2).max(4).required().messages({
    "string.min": `Country Code must be at least 2 characters long`,
    "string.max": `Country Code cannot be longer than 4 characters`,
    "string.pattern.base": `Country Code is required`,
    "string.empty": `Country Code is required`,
    "any.required": `Country Code is required`,
  }),
  address: Joi.string().required().messages({
    "string.pattern.base": `Address is required`,
    "string.empty": `Address is required`,
    "any.required": `Address is required`,
  }),
});

const updateUserSchema = Joi.object({
  first_name: Joi.string().optional().messages({
    "string.pattern.base": `First name is required`,
    "string.empty": `First name is required`,
    "any.required": `First name is required`,
  }),
  last_name: Joi.string().optional().messages({
    "string.pattern.base": `Last name is required`,
    "string.empty": `Last name is required`,
    "any.required": `Last name is required`,
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ng"] } })
    .optional()
    .messages({
      "string.email": `Invalid email. Please check the email and try again`,
      "any.required": `Email is required`,
    }),
  phone_number: Joi.string().min(7).max(11).optional().messages({
    "string.min": `Phone number must be at least 7 characters long`,
    "string.max": `Phone number cannot be longer than 11 characters`,
    "string.pattern.base": `Phone number is required`,
    "string.empty": `Phone number is required`,
    "any.required": `Phone number is required`,
  }),
  country_code: Joi.string().min(2).max(4).optional().messages({
    "string.min": `Country Code must be at least 2 characters long`,
    "string.max": `Country Code cannot be longer than 4 characters`,
    "string.pattern.base": `Country Code is required`,
    "string.empty": `Country Code is required`,
    "any.required": `Country Code is required`,
  }),
  address: Joi.string().optional().messages({
    "string.pattern.base": `Address is required`,
    "string.empty": `Address is required`,
    "any.required": `Address is required`,
  }),
});

const validateMongoDbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new Error("this id is not valid or not found");
};

export { validateRequest, userSchema, updateUserSchema, validateMongoDbId };
