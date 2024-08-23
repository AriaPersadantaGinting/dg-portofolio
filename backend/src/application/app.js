import express from "express";
import { publicApi } from "../routes/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { apiRoutes } from "../routes/api.js";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cors());

app.use(publicApi);
app.use(apiRoutes);
app.use(errorMiddleware);
