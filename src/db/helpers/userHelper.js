/**
 * @fileoverview User helper functions for database operations
 * @module userHelper
 */
import { Op } from "sequelize";
import User from "../models/userModel.js";

export default class UserHelper {
  constructor() {
    this._userModel = User;
  }

  /**
   * Creates a new user with a username and password.
   * @param {string} username - The username for the new user.
   * @param {string} password - The password for the new user.
   * @returns {Promise<Object>} - The newly created user object.
   */
  createUser = async (username, password) => {
    try {
      const savedUser = await this._userModel.create({
        username,
        password,
      });

      return savedUser;
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  };

  /**
   * Retrieves a user by username or id.
   * @param {Object} searchQuery - Object containing id or username for the search criteria.
   * @param {string} [searchQuery.id] - The user's ID.
   * @param {string} [searchQuery.username] - The user's username.
   * @returns {Promise<Object>} - The fetched user object.
   */
  getUser = async (searchQuery) => {
    try {
      const fetchedUser = await this._userModel.findOne({
        where: {
          [Op.or]: {
            id: {
              [Op.eq]: searchQuery.id,
            },
            username: {
              [Op.eq]: searchQuery.username,
            },
          },
        },
      });

      return fetchedUser;
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  };

  /**
   * Updates user details based on a provided ID.
   * @param {string} userId - The ID of the user to update.
   * @param {Object} updateQuery - Object containing update fields.
   * @param {string} [updateQuery.email] - New email to update.
   * @param {string} [updateQuery.password] - New password to update.
   * @returns {Promise<Object>} - Result of the update operation.
   */
  updateUser = async (userId, updateQuery) => {
    try {
      const { email, mobile, password } = updateQuery;
      const updateCondition = {};

      if (updateQuery.email !== undefined) updateCondition.email = email;
      if (updateQuery.password !== undefined)
        updateCondition.password = password;

      const updatedUser = await this._userModel.update(
        {
          updateCondition,
        },
        {
          where: {
            id: {
              [Op.eq]: userId,
            },
          },
        }
      );

      return updatedUser;
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  };

  /**
   * Removes a user from the database by ID.
   * @param {string} userId - The ID of the user to remove.
   * @returns {Promise<number>} - The number of rows affected by the deletion.
   */
  removeUser = async (userId) => {
    try {
      const affectedRows = await this._userModel.destroy({
        where: {
          id: {
            [Op.eq]: userId,
          },
        },
      });

      return affectedRows;
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  };
}
