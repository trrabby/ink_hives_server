/* eslint-disable @typescript-eslint/no-explicit-any */
import AppError from '../../errorHandlers/AppError';
import httpStatus from 'http-status';
import { IBlog } from './blogs.interface';
import { BlogModel } from './blogs.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { blogSearchableFields } from './blogs.constants';
import { UserModel } from '../users/user.model';

const createblogIntoDB = async (payload: IBlog, userId: string) => {
  try {
    const userObjId = await UserModel.findOne({ email: userId }).select('_id');

    if (!userObjId) {
      throw new AppError(httpStatus.BAD_REQUEST, 'User not found');
    }
    payload.author = userObjId?._id;
    // create a new blog
    const newBlog = await (await BlogModel.create(payload)).populate('author');
    if (!newBlog) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create blog');
    }
    return newBlog;
  } catch (err: any) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      err.message || 'Something went wrong',
    );
  }
};

const findAllBlogs = async (query: Record<string, unknown>) => {
  const blogsQuery = new QueryBuilder(BlogModel.find(), query)
    .search(blogSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await blogsQuery.modelQuery
    .find({ isDeleted: false })
    .populate('author');
  return result;
};

const updateABlog = async (id: string, payload: Partial<IBlog>) => {
  const result = await BlogModel.findOneAndUpdate(
    { _id: id }, // Match the document where the id matches
    payload, // Apply the update
    {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators
    },
  );
  return result;
};

const deleteABlog = async (id: string, existingUser: string) => {
  const existingUserEmail = existingUser;
  const blogAuthor = await BlogModel.findOne({ _id: id }).select('author');
  if (!blogAuthor) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Blog not found');
  }
  const authorEmail = await UserModel.findOne({
    _id: blogAuthor.author,
  }).select('email');

  if (existingUserEmail !== authorEmail?.email) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'You are not authorized to delete this blog',
    );
  }

  const result = await BlogModel.findOneAndUpdate(
    { _id: id }, // Match the document where the email matches
    { isDeleted: true }, // Apply the update
    {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators
    },
  );

  return result;
};

const deleteABlogByAdmin = async (id: string) => {
  const result = await BlogModel.findOneAndUpdate(
    { _id: id }, // Match the document where the email matches
    { isDeleted: true }, // Apply the update
    {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators
    },
  );
  return result;
};

export const BlogsServices = {
  createblogIntoDB,
  findAllBlogs,
  updateABlog,
  deleteABlog,
  deleteABlogByAdmin,
};
