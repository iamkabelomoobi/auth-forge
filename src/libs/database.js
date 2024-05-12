/**
 * @fileoverview
 * @version 1.0.0
 * @module database
 */
import { Sequelize } from "sequelize";
import { config } from "../configs/configs.js";
import { logger } from "../utils/loggerHelper.js";

export default class Database {
  static sequelizeConnect = () => {
    return new Sequelize(
      config.database.databaseName,
      config.database.username,
      config.database.password,
      {
        host: config.database.host,
        dialect: "mariadb",
        protocol: "mariadb",
        pool: {
          max: 5,
          acquire: 30000,
          idle: 10000,
        },
        logging: (...debug) => {
          logger.debug("Sequelize", debug);
        },
      }
    );
  };
}
