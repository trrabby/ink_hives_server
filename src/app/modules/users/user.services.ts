/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errorHandlers/AppError';
import { userSearchableFields } from './user.constant';
import { IUser } from './user.interface';
import { UserModel } from './user.model';
import httpStatus from 'http-status';

const createUserIntoDB = async (payload: IUser) => {
  //set default user role

  payload.role = 'user';

  try {
    // create a user
    const newUser = await UserModel.create(payload);
    //create a student
    if (!newUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    return newUser;
  } catch (err: any) {
    throw new Error(err);
  }
};

const findAllUsers = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(UserModel.find(), query)
    .search(userSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await userQuery.modelQuery;
  return result;
};

const getAnUser = async (email: string) => {
  const result = await UserModel.find({ email, isDeleted: false });
  return result;
};

const blockAnUser = async (email: string) => {
  const result = await UserModel.findOneAndUpdate(
    { email }, // Match the document where the email matches
    { status: 'blocked' }, // Apply the update
    {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators
    },
  );
  return result;
};

const deleteAnUser = async (email: string) => {
  const result = await UserModel.findOneAndUpdate(
    { email }, // Match the document where the email matches
    { isDeleted: true }, // Apply the update
    {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators
    },
  );
  return result;
};

export const UserServices = {
  createUserIntoDB,
  findAllUsers,
  getAnUser,
  blockAnUser,
  deleteAnUser,
};
