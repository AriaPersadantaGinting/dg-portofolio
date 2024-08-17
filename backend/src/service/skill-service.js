import { schemaValidate } from "../validation/validate.js";
import { ResponseError } from "../error/ResponseError.js";
import skillValidation from "../validation/skill-validation.js";
import skillUtills from "../utility/skill-utills.js";

const createSkillService = async (user, request) => {
  const skill = await schemaValidate(
    skillValidation.createSkillValidation,
    request
  );
  skill.username = user.username;
  const findSkill = await skillUtills.findSkillByName(
    skill.username,
    skill.name
  );
  if (findSkill) {
    throw new ResponseError(400, "skill is already exists!");
  }
  return skillUtills.createSkill(skill);
};

const getAllSkillService = async () => {
  const findAllSkills = await skillUtills.findAllSkills();
  if (findAllSkills.length === 0) {
    throw new ResponseError(400, "skills is not found!");
  }
  return findAllSkills;
};

const getSkillService = async (skillId) => {
  skillId = await schemaValidate(skillValidation.getSkillValidation, skillId);
  const findSkill = await skillUtills.findSkillById(skillId);
  if (findSkill.length === 0) {
    throw new ResponseError(400, "skill is not found!");
  }
  return findSkill;
};

const updateSkillService = async (user, request) => {
  const skill = await schemaValidate(
    skillValidation.updateSkillValidation,
    request
  );
  skill.username = user.username;
  const findSkill = await skillUtills.findSkillById(skill.id);
  if (!findSkill) {
    throw new ResponseError(400, "skill is not found!");
  }
  const { name, description, tahun, image } = skill;
  let updateSkill = {};
  if (name) updateSkill.name = name;
  if (description) updateSkill.description = description;
  if (tahun) updateSkill.tahun = tahun;
  if (image) updateSkill.image = image;
  return skillUtills.updateSkill(skill.username, skill.id, updateSkill);
};

const removeSkillService = async (user, skillId) => {
  skillId = await schemaValidate(skillValidation.getSkillValidation, skillId);
  const findSkill = await skillUtills.findSkillById(skillId);
  if (!findSkill) {
    throw new ResponseError(400, "skill is not found!");
  }
  return skillUtills.removeSkill(user.username, skillId);
};

export default {
  createSkillService,
  getAllSkillService,
  getSkillService,
  updateSkillService,
  removeSkillService,
};
