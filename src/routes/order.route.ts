import { Router } from 'express';
import orderController from '../controllers/order.controller';
import authMiddleware from '../middlewares/auth.middleware';
import orderMiddleware from '../middlewares/order.middleware';

const orderRoutes = Router();

orderRoutes.get('/', orderController.getAll);
orderRoutes.post('/', authMiddleware, orderMiddleware.validateBody, orderController.create);

export default orderRoutes;