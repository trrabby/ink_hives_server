import express from 'express';

import validateRequest from '../../MiddleWares/validateRequest';
import { UserValidation } from './user.validation';
import { UserControllers } from './user.controller';
import auth from '../../MiddleWares/auth';
import { USER_ROLE } from './user.constant';

const router = express.Router();

router.get('/', auth(USER_ROLE.admin), UserControllers.AllUsers);

router.get('/:userId', auth(USER_ROLE.admin, USER_ROLE.user), UserControllers.getAnUser);

export const UserRoutes = router;
