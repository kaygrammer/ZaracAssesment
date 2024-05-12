import userModel from "../models/user.model.js";
import mongoose from "mongoose";
import generateUniqueIdentifier from "../../../utils/random/random.js";

class UserService {
  async createUser(userData) {
    const userName = userData.first_name + generateUniqueIdentifier();
    userData.user_name = userName;
    console.log(userData);
    return userModel.create(userData);
  }

  async getAllUsers() {
    return userModel.find();
  }

  async getUserByIdentifier(identifier) {
    if (mongoose.isValidObjectId(identifier)) {
      return userModel.findById(identifier);
    }
    const userByEmail = await userModel.findOne({ email: identifier });
    if (userByEmail) {
      return userByEmail;
    }

    const userByUsername = await userModel.findOne({ user_name: identifier });
    if (userByUsername) {
      return userByUsername;
    }

    return null;
  }

  async updateUserById(id, userData) {
    return userModel.findByIdAndUpdate(id, userData, { new: true });
  }

  async deleteUserByIdentifier(identifier) {
    if (mongoose.isValidObjectId(identifier)) {
      return userModel.findByIdAndDelete(identifier);
    }
    const userByEmail = await userModel.findOneAndDelete({ email: identifier });
    if (userByEmail) {
      return userByEmail;
    }

    const userByUsername = await userModel.findOneAndDelete({
      user_name: identifier,
    });
    if (userByUsername) {
      return userByUsername;
    }

    return null;
  }
}

export default UserService;
