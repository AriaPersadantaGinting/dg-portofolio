import { prismaClient } from "../application/database.js";

const findUserByUsername = async (username) => {
  const result = await prismaClient.user.findFirst({
    where: {
      username,
    },
    select: {
      username: true,
      password: true,
      name: true,
    },
  });
  return result;
};

const createDataUser = async (data) => {
  const result = await prismaClient.user.create({
    data,
    select: {
      username: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const updateDataUser = async (username, newData) => {
  const result = await prismaClient.user.update({
    where: {
      username,
    },
    data: newData,
    select: {
      username: true,
      name: true,
    },
  });
  return result;
};

const loginUser = async (username, token) => {
  const result = await prismaClient.user.update({
    where: {
      username,
    },
    data: {
      token,
    },
    select: {
      token: true,
    },
  });
  return result;
};

const getUser = async (username) => {
  const result = await prismaClient.user.findFirst({
    where: {
      username,
    },
    select: {
      username: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const findUserByToken = async (token) => {
  const result = await prismaClient.user.findFirst({
    where: {
      token,
    },
    select: {
      username: true,
      password: true,
      name: true,
    },
  });
  return result;
};

const removeUser = async (username) => {
  const result = await prismaClient.user.delete({
    where: {
      username,
    },
  });
};

export default {
  findUserByUsername,
  createDataUser,
  updateDataUser,
  removeUser,
  loginUser,
  getUser,
  findUserByToken,
};
