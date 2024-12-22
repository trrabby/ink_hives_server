import catchAsync from '../../utils/catchAsync';

import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { BlogsServices } from './blogs.service';
import customizedMsg from '../../utils/customisedMsg';

const createBlog = catchAsync(async (req, res) => {
  const payload = req.body;
  const userId = req.user.email;
  //   console.log(userId);

  const result = await BlogsServices.createblogIntoDB(payload, userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog is created successfully',
    data: result,
  });
});

const AllBlogs = catchAsync(async (req, res) => {
  const result = await BlogsServices.findAllBlogs(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: customizedMsg(result, 'Blogs'),
    data: result,
  });
});

const updateABlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await BlogsServices.updateABlog(id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Updated Successfully',
    data: result,
  });
});

const deleteABlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const user = req.user.email;
  const result = await BlogsServices.deleteABlog(id, user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Deleted Successfully',
    data: result,
  });
});

const deleteABlogByAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogsServices.deleteABlogByAdmin(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Deleted Successfully',
    data: result,
  });
});

export const BlogsControllers = {
  createBlog,
  AllBlogs,
  updateABlog,
  deleteABlog,
  deleteABlogByAdmin,
};
