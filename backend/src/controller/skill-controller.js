import skillService from "../service/skill-service.js";

const create = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await skillService.createSkillService(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const all = async (req, res, next) => {
  try {
    const result = await skillService.getAllSkillService();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const skillId = req.params.skillId;
    const result = await skillService.getSkillService(skillId);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const user = req.user;
    const skillId = req.params.skillId;
    const request = req.body;
    request.id = skillId;
    const result = await skillService.updateSkillService(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const user = req.user;
    const skillId = req.params.skillId;
    await skillService.removeSkillService(user, skillId);
    res.status(200).json({
      data: "remove skill is succesfully!",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  create,
  all,
  get,
  update,
  remove,
};
