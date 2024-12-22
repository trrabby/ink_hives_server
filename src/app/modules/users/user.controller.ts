import catchAsync from '../../utils/catchAsync';
import { UserServices } from './user.services';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import customizedMsg from '../../utils/customisedMsg';
import { RequestHandler } from 'express';

const createUser = catchAsync(async (req, res) => {
  const payload = req.body;

  const result = await UserServices.createUserIntoDB(payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created successfully',
    data: result,
  });
});

const AllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.findAllUsers(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: customizedMsg(result, 'Users'),
    data: result,
  });
});

const getAnUser: RequestHandler = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await UserServices.getAnUser(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User has been retrieved successfully',
    data: result,
  });
});

const blockAnUser: RequestHandler = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await UserServices.blockAnUser(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User blocked Successfully',
    data: result,
  });
});

const deleteAnUser: RequestHandler = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await UserServices.deleteAnUser(email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Deleted Successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
  AllUsers,
  getAnUser,
  blockAnUser,
  deleteAnUser,

};
