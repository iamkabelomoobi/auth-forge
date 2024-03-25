/**
 * @fileoverview
 * @author afridek-software
 * @version 1.0.0-alpha.1
 * @since 2023-09-01
 */
import http from "http";
import ip from "ip";
import path from "path";
import os from "os";

import { app } from "./app.js";
import { logger } from "./utils/loggerHelper.js";

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info({
    name: os.hostname(),
    ip: ip.address(),
    port: PORT,
    platform: os.platform(),
  });
});
