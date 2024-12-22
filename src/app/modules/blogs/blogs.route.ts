import express from 'express';
import auth from '../../MiddleWares/auth';
import { USER_ROLE } from '../users/user.constant';
import { BlogsControllers } from './blogs.controller';
import validateRequest from '../../MiddleWares/validateRequest';
import { BlogsValidation } from './blogs.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(BlogsValidation.BlogsValidationSchema),
  auth(USER_ROLE.admin, USER_ROLE.user),
  BlogsControllers.createBlog,
);
// public all blogs api
router.get('/', BlogsControllers.AllBlogs);

//blogs api for update
router.patch(
  '/:id',
  validateRequest(BlogsValidation.updateBlogsValidationSchema),
  auth(USER_ROLE.user),
  BlogsControllers.updateABlog,
);

// deleting a blog by respective user
router.delete(
  '/:id',
  validateRequest(BlogsValidation.updateBlogsValidationSchema),
  auth(USER_ROLE.user),
  BlogsControllers.deleteABlog,
);

export const BlogsRoutes = router;
