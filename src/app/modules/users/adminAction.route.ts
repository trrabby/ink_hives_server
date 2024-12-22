import express from 'express';
import { UserControllers } from './user.controller';
import auth from '../../MiddleWares/auth';
import { USER_ROLE } from './user.constant';
import { BlogsControllers } from '../blogs/blogs.controller';

const router = express.Router();

router.patch(
  '/users/:userId/block',
  auth(USER_ROLE.admin),
  UserControllers.blockAnUser,
);

router.delete(
  '/blogs/:id',
  auth(USER_ROLE.admin),
  BlogsControllers.deleteABlogByAdmin,
);

export const AdminRoutes = router;
