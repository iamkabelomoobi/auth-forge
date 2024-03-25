/**
 * @fileoverview
 * @module loggerHelper
 */
import winston from "winston";
import { config } from "../configs/configs.js";

class LoggerHelper {
  createLogger() {
    const environment = process.env.NODE_ENV;

    if (!environment) {
      throw new Error(`Invalid configuration for environment: ${environment}`);
    }

    const transports =
      environment === "production"
        ? config.logger.transports.production
        : config.logger.transports.development;

    return winston.createLogger({ transports });
  }
}

export const logger = new LoggerHelper().createLogger();
