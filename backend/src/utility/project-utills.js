import { prismaClient } from "../application/database.js";

const findProjectByTitle = async (username, title) => {
  const result = await prismaClient.project.findFirst({
    where: {
      username,
      title,
    },
    select: {
      id: true,
      title: true,
      description: true,
      startDate: true,
      endDate: true,
      url: true,
      image: true,
      createdAt: true,
      updatedAt: true,
      username: true,
    },
  });
  return result;
};

const findProjectById = async (id) => {
  const result = await prismaClient.project.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      startDate: true,
      endDate: true,
      url: true,
      image: true,
      createdAt: true,
      updatedAt: true,
      username: true,
    },
  });
  return result;
};

const createProject = async (data) => {
  const result = await prismaClient.project.create({
    data,
    select: {
      id: true,
      title: true,
      description: true,
      startDate: true,
      endDate: true,
      url: true,
      image: true,
      createdAt: true,
      updatedAt: true,
      username: true,
    },
  });
  return result;
};

const findAllProjects = async () => {
  const result = await prismaClient.project.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      startDate: true,
      endDate: true,
      url: true,
      image: true,
      createdAt: true,
      updatedAt: true,
      username: true,
    },
  });
  return result;
};

const updateProject = async (username, id, data) => {
  const result = await prismaClient.project.update({
    where: {
      username,
      id,
    },
    data,
    select: {
      id: true,
      title: true,
      description: true,
      startDate: true,
      endDate: true,
      url: true,
      image: true,
      createdAt: true,
      updatedAt: true,
      username: true,
    },
  });
  return result;
};

const removeProject = async (username, id) => {
  const result = await prismaClient.project.delete({
    where: {
      username,
      id,
    },
  });
  return result;
};

export default {
  findProjectById,
  createProject,
  findAllProjects,
  findProjectByTitle,
  updateProject,
  removeProject,
};
