import { Router } from 'express';
import loginMiddleware from '../middlewares/login.middleware';
import loginController from '../controllers/login.controller';

const loginRoutes = Router();

loginRoutes.post('/', loginMiddleware.validateBody, loginController.login);

export default loginRoutes;