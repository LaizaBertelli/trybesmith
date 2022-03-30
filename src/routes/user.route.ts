import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateUser from '../middlewares/user.middleware';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', validateUser, userController.create);

export default userRouter;