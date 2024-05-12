import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
    },
    first_name: {
      type: String,
    },
    email: {
      type: String,
    },
    last_name: {
      type: String,
    },
    country_code: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("userProfile", userSchema);

export default userModel;
