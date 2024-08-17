import { app } from "./application/app.js";
import { logger } from "./application/logger.js";

const port = 3000;

app.listen(port, () => {
  logger.info(`Server Running and Up on port ${port}`);
});
