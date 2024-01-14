import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import {
  changeUserRoleInDb,
  createUserInDb,
  getAllUsersFromDb,
  getSingleUserFromDb,
} from "./user.services";

const createUser = catchAsync(async (req, res) => {
  console.log(req.body);

  const result = await createUserInDb(req.body);

  res.status(httpStatus.OK).json({
    success: true,
    message: "User created successfully",
    users: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const result = await getAllUsersFromDb();

  res.status(httpStatus.OK).json({
    success: true,
    message: "Users retrieved successfully",
    users: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const result = await getSingleUserFromDb(req.params.email);

  res.status(httpStatus.OK).json({
    success: true,
    message: "User retrieved successfully",
    user: result,
  });
});

const changeUserRole = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await changeUserRoleInDb(id, req.body);

  res.status(httpStatus.OK).json({
    success: true,
    message: "User role changed successfully",
    user: result,
  });
});

export { getAllUsers, getSingleUser, createUser, changeUserRole };
