/**
 * @fileoverview
 * @module configs
 */
import dotenv from "dotenv";
import { Logtail } from "@logtail/node";
import { LogtailTransport } from "@logtail/winston";
import winston from "winston";

dotenv.config();

/**
 * Load environment variables.
 */
const { LOGTAIL_ACCESS_TOKEN } = process.env;

console.log(LOGTAIL_ACCESS_TOKEN);
/**
 * Configuration object for the application.
 */
const config = {
  logger: {
    transports: {
      development: new winston.transports.Console({
        level: "info",
        format: winston.format.combine(
          winston.format.json(),
          winston.format.prettyPrint()
        ),
      }),
      production: new LogtailTransport(new Logtail(LOGTAIL_ACCESS_TOKEN || "")),
    },
  },
};

export { config };
