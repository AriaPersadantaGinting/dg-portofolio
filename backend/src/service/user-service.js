import { schemaValidate } from "../validation/validate.js";
import userValidation from "../validation/user-validation.js";
import { ResponseError } from "../error/ResponseError.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import userUtills from "../utility/user-utills.js";

const createUserRegisterService = async (request) => {
  const user = await schemaValidate(
    userValidation.createUserValidation,
    request
  );
  const findUser = await userUtills.findUserByUsername(user.username);
  if (findUser) {
    throw new ResponseError(400, "user is already exists!");
  }
  user.password = await bcrypt.hash(user.password, 10);
  return userUtills.createDataUser(user);
};

const loginUserService = async (request) => {
  const user = await schemaValidate(
    userValidation.loginUserValidation,
    request
  );
  const findUser = await userUtills.findUserByUsername(user.username);
  if (!findUser) {
    throw new ResponseError(400, "Username or Password is Wrong!");
  }
  const cekPassword = await bcrypt.compare(user.password, findUser.password);
  if (!cekPassword) {
    throw new ResponseError(400, "Username or Password is Wrong!");
  }
  const token = uuid().toString();
  return userUtills.loginUser(user.username, token);
};

const getUserService = async (username) => {
  username = await schemaValidate(userValidation.getUserValidation, username);
  const getUser = await userUtills.getUser(username);
  if (!getUser) {
    throw new ResponseError(400, "user is not found!");
  }
  return getUser;
};

const updateUserService = async (request) => {
  const user = await schemaValidate(
    userValidation.updateUserValidation,
    request
  );
  const findUser = await userUtills.findUserByToken(request.token);
  if (!findUser) {
    throw new ResponseError(400, "user is not found!");
  }
  let { username, password, name } = user;
  let newData = {};
  if (username) newData.username = username;
  if (password) newData.password = await bcrypt.hash(password, 10);
  if (name) newData.name = name;
  return userUtills.updateDataUser(findUser.username, newData);
};

const removeUserService = async (username) => {
  username = await schemaValidate(userValidation.getUserValidation, username);
  const findUser = await userUtills.findUserByUsername(username);
  if (!findUser) {
    throw new ResponseError(400, "user is not found!");
  }
  return userUtills.removeUser(username);
};

export default {
  createUserRegisterService,
  loginUserService,
  getUserService,
  updateUserService,
  removeUserService,
};
