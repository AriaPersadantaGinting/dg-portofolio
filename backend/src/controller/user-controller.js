import userService from "../service/user-service.js";

const register = async (req, res, next) => {
  try {
    const result = await userService.createUserRegisterService(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await userService.loginUserService(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const result = await userService.getUserService(req.user.username);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const request = req.body;
    request.token = token;
    const result = await userService.updateUserService(request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    await userService.removeUserService(req.user.username);
    res.status(200).json({
      data: "remove user is sucessfully!",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  register,
  login,
  get,
  update,
  remove,
};
