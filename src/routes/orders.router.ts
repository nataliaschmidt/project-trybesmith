import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import validateJwt from '../middlewares/validateJwt';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.getOrders);
ordersRouter.post('/', validateJwt, ordersController.createOrder);

export default ordersRouter;