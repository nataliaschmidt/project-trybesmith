import { Request, Response } from 'express';
import productService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const createProducts = async (req: Request, res: Response) => {
  const { name, price, orderId } = req.body;
  const product = { name, price, orderId };
  const { status, data } = await productService.createProducts(product);
  res.status(mapStatusHTTP(status)).json(data);
};

export default {
  createProducts,
};