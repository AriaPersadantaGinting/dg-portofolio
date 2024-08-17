import express from "express";
import userController from "../controller/user-controller.js";

export const publicApi = new express.Router();

// public api
publicApi.post("/api/dg-portofolio/users", userController.register);
publicApi.post("/api/dg-portofolio/users/login", userController.login);
