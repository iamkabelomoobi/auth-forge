/**
 * @fileoverview
 * @module server
 */
import http from "http";
import ip from "ip";
import os from "os";
import dotenv from "dotenv";

import { app } from "./app.js";
import { logger } from "./utils/loggerHelper.js";
import Database from "./libs/database.js";

dotenv.config();

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

(async () => {
  try {
    // Connect to the MySQL database
    await Database.sequelizeConnect().authenticate();

    // Start the server
    server.listen(PORT, () => {
      logger.info({
        name: os.hostname(),
        ip: ip.address(),
        port: PORT,
        platform: os.platform(),
      });
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    logger.error("Failed To Establish Connection To Database.", {
      error_name: error.constructor.name,
      error_message: `${error}`,
      error_stack: error.stack,
    });
    process.exit(1);
  }
})();
