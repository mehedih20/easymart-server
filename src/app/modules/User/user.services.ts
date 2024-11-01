import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserInDb = async (payload: TUser) => {
  const user = await User.checkUserExists(payload.email);

  if (user) {
    throw new Error("User already exist!");
  }

  const result = await User.create(payload);
  return result;
};

const getAllUsersFromDb = async () => {
  const result = await User.find();
  return result;
};

const getSingleUserFromDb = async (email: string) => {
  const result = await User.findOne({
    email,
  });
  return result;
};

const updateUserInDb = async (id: string, payload: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const changeUserRoleInDb = async (id: string, payload: { role: string }) => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const UserServices = {
  getAllUsersFromDb,
  getSingleUserFromDb,
  createUserInDb,
  updateUserInDb,
  changeUserRoleInDb,
};
