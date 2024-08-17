import { prismaClient } from "../application/database.js";

const createContactMe = async (data) => {
  const result = await prismaClient.contactMe.create({
    data,
    select: {
      id: true,
      name: true,
      subject: true,
      email: true,
      message: true,
      createdAt: true,
    },
  });
  return result;
};

const findAllContacts = async () => {
  const result = await prismaClient.contactMe.findMany({
    select: {
      id: true,
      name: true,
      subject: true,
      email: true,
      message: true,
      createdAt: true,
    },
  });
  return result;
};

const findContactMeById = async (id) => {
  const result = await prismaClient.contactMe.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      subject: true,
      email: true,
      message: true,
      createdAt: true,
    },
  });
  return result;
};

const findContactMe = async (name, email, subject) => {
  const result = await prismaClient.contactMe.findFirst({
    where: {
      name,
      email,
      subject,
    },
    select: {
      id: true,
      name: true,
      subject: true,
      email: true,
      message: true,
      createdAt: true,
    },
  });
  return result;
};

const updateContact = async (id, data) => {
  const result = await prismaClient.contactMe.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      name: true,
      subject: true,
      email: true,
      message: true,
      createdAt: true,
    },
  });
  return result;
};

const removeContact = async (id) => {
  const result = await prismaClient.contactMe.delete({
    where: {
      id,
    },
  });
  return result;
};

export default {
  findContactMeById,
  findAllContacts,
  createContactMe,
  updateContact,
  removeContact,
  findContactMe,
};
