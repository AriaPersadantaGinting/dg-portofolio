import express from "express";
import { publicApi } from "../routes/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { apiRoutes } from "../routes/api.js";

export const app = express();

app.use(express.json());

app.use(publicApi);
app.use(apiRoutes);
app.use(errorMiddleware);
