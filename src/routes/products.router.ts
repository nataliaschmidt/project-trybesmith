import { Router } from 'express';
import productsController from '../controllers/product.controller';

const productsRouter = Router();

productsRouter.post('/', productsController.createProducts);
productsRouter.get('/', productsController.getProducts);

export default productsRouter;