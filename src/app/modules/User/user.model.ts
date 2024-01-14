import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";

const userSchema = new Schema<TUser, UserModel>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
  },
});

// Custom static method for checking existing user
userSchema.statics.checkUserExists = async function (email: string) {
  const existingUser = await User.findOne({ email });
  return existingUser;
};

export const User = model<TUser, UserModel>("User", userSchema);
