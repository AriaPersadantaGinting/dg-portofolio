import Joi from "joi";

const createProjectValidation = Joi.object({
  title: Joi.string().max(255).required(),
  description: Joi.string().max(1000).required(),
  url: Joi.string().uri().optional().allow(null),
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().optional().allow(null),
  technologies: Joi.array().items(Joi.string()).optional().allow(null),
  image: Joi.string().uri().optional().allow(null),
});

const getAllProjectValidation = Joi.string().max(100).required();

const getProjectValidation = Joi.number().positive().required();

const updateProjectValidation = Joi.object({
  id: Joi.number().positive().required(),
  title: Joi.string().max(255).optional(),
  description: Joi.string().max(1000).optional(),
  url: Joi.string().uri().optional().allow(null),
  startDate: Joi.date().iso().optional(),
  endDate: Joi.date().iso().optional().allow(null),
  technologies: Joi.array().items(Joi.string()).optional().allow(null),
  image: Joi.string().uri().optional().allow(null),
});

export default {
  createProjectValidation,
  getAllProjectValidation,
  getProjectValidation,
  updateProjectValidation,
};
