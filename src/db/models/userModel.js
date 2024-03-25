/**
 * @fileoverview
 * @version 1.0.0
 * @module UserModel
 */
import { DataTypes } from "sequelize";
import { Database } from "../libs/database.js";

const User = Database.sequelizeConnect().define(
  "User",
  {
    /**
     * The username of the user.
     *
     * @type {string}
     */
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /**
     * The password of the user.
     *
     * @type {string}
     */
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /**
     * The role of the user.
     *
     * @type {string}
     */
    role: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    /**
     * The verification status of the user.
     *
     * @type {string}
     */
    isVerified: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

(async () => {
  await User.sync();
})();

export default User;
