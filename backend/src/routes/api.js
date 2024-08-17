import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import projectController from "../controller/project-controller.js";
import skillController from "../controller/skill-controller.js";
import contactmeController from "../controller/contactme-controller.js";

export const apiRoutes = new express.Router();

// api tanpa authorization projects
apiRoutes.get("/api/dg-portofolio/projects", projectController.all);
apiRoutes.get("/api/dg-portofolio/projects/:projectId", projectController.get);

// api tanpa authorization skills
apiRoutes.get("/api/dg-portofolio/skills", skillController.all);
apiRoutes.get("/api/dg-portofolio/skills/:skillId", skillController.get);
apiRoutes.get("/api/dg-portofolio/skills/:skillId", skillController.get);

// api tanpa authorization contactme
apiRoutes.post("/api/dg-portofolio/contact-me", contactmeController.create);
apiRoutes.get("/api/dg-portofolio/contact-me", contactmeController.all);
apiRoutes.delete(
  "/api/dg-portofolio/contact-me/:contactId",
  contactmeController.remove
);

apiRoutes.use(authMiddleware);

// api user
apiRoutes.get("/api/dg-portofolio/users/current", userController.get);
apiRoutes.patch("/api/dg-portofolio/users/current", userController.update);
apiRoutes.delete("/api/dg-portofolio/users/current", userController.remove);

// api project
apiRoutes.post("/api/dg-portofolio/projects", projectController.create);
apiRoutes.put(
  "/api/dg-portofolio/projects/:projectId",
  projectController.update
);
apiRoutes.delete(
  "/api/dg-portofolio/projects/:projectId",
  projectController.remove
);

// api skill
apiRoutes.post("/api/dg-portofolio/skills", skillController.create);
apiRoutes.put("/api/dg-portofolio/skills/:skillId", skillController.update);
apiRoutes.delete("/api/dg-portofolio/skills/:skillId", skillController.remove);
