import express from 'express';

import validateRequest from '../../MiddleWares/validateRequest';
import { UserValidation } from './user.validation';
import { UserControllers } from './user.controller';
import auth from '../../MiddleWares/auth';
import { USER_ROLE } from './user.constant';

const router = express.Router();

router.patch('/users/:userId/block', auth(USER_ROLE.admin), UserControllers.blockAnUser);

export const adminRoutes = router;
