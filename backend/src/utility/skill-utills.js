import { prismaClient } from "../application/database.js";

const findSkillByName = async (username, name) => {
  const result = await prismaClient.skill.findFirst({
    where: {
      username,
      name,
    },
    select: {
      id: true,
      name: true,
      image: true,
      description: true,
      tahun: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const createSkill = async (data) => {
  const result = await prismaClient.skill.create({
    data,
    select: {
      id: true,
      name: true,
      image: true,
      description: true,
      tahun: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const findAllSkills = async () => {
  const result = await prismaClient.skill.findMany({
    select: {
      id: true,
      name: true,
      image: true,
      description: true,
      tahun: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const findSkillById = async (id) => {
  const result = await prismaClient.skill.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      image: true,
      description: true,
      tahun: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const updateSkill = async (username, id, data) => {
  const result = await prismaClient.skill.update({
    where: {
      username,
      id,
    },
    data,
    select: {
      id: true,
      name: true,
      image: true,
      description: true,
      tahun: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const removeSkill = async (username, id) => {
  const result = await prismaClient.skill.delete({
    where: {
      username,
      id,
    },
  });
  return result;
};

export default {
  findSkillByName,
  createSkill,
  findAllSkills,
  findSkillById,
  updateSkill,
  removeSkill,
};
