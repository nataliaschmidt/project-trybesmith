import { Router } from 'express';
import productsController from '../controllers/product.controller';

const productsRouter = Router();

productsRouter.post('/products', productsController.createProducts);

export default productsRouter;