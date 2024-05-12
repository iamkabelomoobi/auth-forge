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
      unique: true,
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
  },
  {
    indexs: [
      {
        unique: true,
        fields: ["username"],
      },
    ],
  },
  {
    timestamps: true,
  }
);

(async () => {
  await User.sync();
})();

export default User;
