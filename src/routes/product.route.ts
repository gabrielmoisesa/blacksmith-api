import { Router } from 'express';
import productController from '../controllers/product.controller';
import productMiddleware from '../middlewares/product.middleware';

const productRoutes = Router();

productRoutes.get('/', productController.getAll);
productRoutes.post('/', productMiddleware.validateBody, productController.create);

export default productRoutes;