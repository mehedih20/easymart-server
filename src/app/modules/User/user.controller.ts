import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./user.services";

const createUser = catchAsync(async (req, res) => {
  console.log(req.body);

  const result = await UserServices.createUserInDb(req.body);

  res.status(httpStatus.OK).json({
    success: true,
    message: "User created successfully",
    users: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsersFromDb();

  res.status(httpStatus.OK).json({
    success: true,
    message: "Users retrieved successfully",
    users: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const result = await UserServices.getSingleUserFromDb(req.params.email);

  res.status(httpStatus.OK).json({
    success: true,
    message: "User retrieved successfully",
    user: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await UserServices.updateUserInDb(userId, req.body);

  res.status(httpStatus.OK).json({
    success: true,
    message: "User updated successfully",
    user: result,
  });
});

const changeUserRole = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.changeUserRoleInDb(id, req.body);

  res.status(httpStatus.OK).json({
    success: true,
    message: "User role changed successfully",
    user: result,
  });
});

export const UserController = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  changeUserRole,
};
