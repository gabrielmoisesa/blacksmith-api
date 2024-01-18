import { Router } from 'express';
import orderController from '../controllers/order.controller';
import authMiddleware from '../middlewares/auth.middleware';

const orderRoutes = Router();

orderRoutes.get('/', orderController.getAll);
orderRoutes.post('/', authMiddleware, orderController.create);

export default orderRoutes;