import Joi from "joi";

const createSkillValidation = Joi.object({
  name: Joi.string().max(100).required(),
  tahun: Joi.string().max(20).required(),
  image: Joi.string().uri().allow(null, "").max(255),
  description: Joi.string().allow(null, ""),
  username: Joi.string().max(100).required(),
  createdAt: Joi.date().iso(),
  updatedAt: Joi.date().iso(),
});

const getSkillValidation = Joi.number().positive().required();

const updateSkillValidation = Joi.object({
  id: Joi.number().positive().required(),
  name: Joi.string().max(100).optional(),
  tahun: Joi.string().max(20).optional(),
  image: Joi.string().uri().allow(null, "").max(255).optional(),
  description: Joi.string().allow(null, "").optional(),
  username: Joi.string().max(100).required(),
  updatedAt: Joi.date().iso(),
});

export default {
  createSkillValidation,
  getSkillValidation,
  updateSkillValidation,
};
