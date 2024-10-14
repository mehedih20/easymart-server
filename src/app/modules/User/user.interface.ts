import { Model } from "mongoose";

export type TUser = {
  email: string;
  name: string;
  role: "admin" | "user";
  address?: string;
  phoneNumber?: string;
  profilePicture?: string;
};

export interface UserModel extends Model<TUser> {
  checkUserExists(email: string): Promise<TUser | null>;
}
