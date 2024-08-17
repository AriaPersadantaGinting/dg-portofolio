import { schemaValidate } from "../validation/validate.js";
import { ResponseError } from "../error/ResponseError.js";
import projectValidation from "../validation/project-validation.js";
import projectUtills from "../utility/project-utills.js";
import userUtills from "../utility/user-utills.js";

const createProjectService = async (user, request) => {
  const project = await schemaValidate(
    projectValidation.createProjectValidation,
    request
  );
  project.username = user.username;
  const findProject = await projectUtills.findProjectByTitle(
    user.username,
    project.title
  );
  if (findProject) {
    throw new ResponseError(400, "project is already exists!");
  }
  return projectUtills.createProject(project);
};

const getAllProjectService = async () => {
  const findAllProjects = await projectUtills.findAllProjects();
  if (findAllProjects.length === 0) {
    throw new ResponseError(400, "projects is not found!");
  }
  return findAllProjects;
};

const getProjectService = async (projectId) => {
  projectId = await schemaValidate(
    projectValidation.getProjectValidation,
    projectId
  );
  const findProject = await projectUtills.findProjectById(projectId);
  if (findProject.length === 0) {
    throw new ResponseError(400, "projects is not found!");
  }
  return findProject;
};

const updateProjectService = async (user, request) => {
  const project = await schemaValidate(
    projectValidation.updateProjectValidation,
    request
  );
  project.username = user.username;
  const findProject = await projectUtills.findProjectById(project.id);
  if (!findProject) {
    throw new ResponseError(400, "project is not found!");
  }
  const {
    id,
    title,
    description,
    url,
    image,
    startDate,
    endDate,
    createdAt,
    updatedAt,
    technologies,
  } = project;
  let updateProject = {};
  if (title) updateProject.title = title;
  if (description) updateProject.description = description;
  if (url) updateProject.url = url;
  if (image) updateProject.image = image;
  if (startDate) updateProject.startDate = startDate;
  if (endDate) updateProject.endDate = endDate;
  if (technologies) updateProject.technologies = technologies;
  return projectUtills.updateProject(
    project.username,
    project.id,
    updateProject
  );
};

const removeProjectService = async (user, projectId) => {
  projectId = await schemaValidate(
    projectValidation.getProjectValidation,
    projectId
  );
  const findProject = await projectUtills.findProjectById(projectId);
  if (!findProject) {
    throw new ResponseError(400, "user is not found!");
  }
  return projectUtills.removeProject(user.username, projectId);
};

export default {
  createProjectService,
  getAllProjectService,
  getProjectService,
  updateProjectService,
  removeProjectService,
};
