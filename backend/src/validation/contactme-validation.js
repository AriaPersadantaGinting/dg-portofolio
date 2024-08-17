import Joi from "joi";

const createContactMeValidation = Joi.object({
  name: Joi.string().max(100).required(),
  email: Joi.string().email().max(100).required(),
  subject: Joi.string().max(150).required(),
  message: Joi.string().required(),
  createdAt: Joi.date().iso(),
});

const getContactMeValidation = Joi.number().positive().required();

export default {
  createContactMeValidation,
  getContactMeValidation,
};
