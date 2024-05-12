import UserService from "../service/user.service.js";
import { errorResMsg, successResMsg } from "../../../utils/lib/response.js";
import {
  userSchema,
  updateUserSchema,
} from "../../../utils/validation/validation.js";
import { handleCustomError } from "../../../utils/errors/error-handler.js";

const userService = new UserService();

class UserController {
  async createUser(req, res, next) {
    try {
      const userDetails = req.body;
      const { error } = userSchema.validate(userDetails);

      if (error) {
        return errorResMsg(res, 404, error.message);
      }

      const existingUser = await userService.getUserByIdentifier(
        userDetails.email
      );
      if (existingUser) {
        throw new Error("user with this email already exist");
      }
      const user = await userService.createUser(userDetails);

      return successResMsg(res, 201, {
        user,
        message: "User created successfully",
      });
    } catch (error) {
      if (handleCustomError(res, error)) {
        return;
      }
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();

      return successResMsg(res, 200, {
        users,
        message: "Users retreived successfully",
      });
    } catch (error) {
      if (handleCustomError(res, error)) {
        return;
      }
    }
  }

  async getUserByIdentifier(req, res, next) {
    try {
      const { identifier } = req.params;
      const user = await userService.getUserByIdentifier(identifier);
      if (!user) {
        throw new Error("User not found");
      }
      return successResMsg(res, 200, {
        user,
        message: "Users retreived successfully",
      });
    } catch (error) {
      if (handleCustomError(res, error)) {
        return;
      }
    }
  }

  async updateUserById(req, res, next) {
    try {
      const { id } = req.params;
      const { error } = updateUserSchema.validate(req.body);

      if (error) {
        return errorResMsg(res, 404, error.message);
      }
      const updatedUser = await userService.updateUserById(id, req.body);
      if (!updatedUser) {
        throw new Error("User not found");
      }
      return successResMsg(res, 200, {
        updatedUser,
        message: "User updated successfully",
      });
    } catch (error) {
      if (handleCustomError(res, error)) {
        return;
      }
    }
  }

  async deleteUserByIdentifier(req, res, next) {
    try {
      const { identifier } = req.params;
      const deletedUser = await userService.deleteUserByIdentifier(identifier);

      if (!deletedUser) {
        throw new Error("User not found");
      }

      return successResMsg(res, 200, {
        message: "User updated successfully",
      });
    } catch (error) {
      if (handleCustomError(res, error)) {
        return;
      }
    }
  }
}

export default UserController;
