import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import validateLogin from '../middlewares/login.middleware';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/', validateLogin, loginController.create);

export default loginRouter;
