import { Router } from 'express';
import loginController from '../controllers/login.controller';

const loginRouter = Router();

loginRouter.post('/', loginController.loginUser);

export default loginRouter;