import { Router } from 'express';
import productController from '../controllers/product.controller';

const productRoutes = Router();

productRoutes.get('/', productController.getAll);
productRoutes.post('/', productController.create);

export default productRoutes;