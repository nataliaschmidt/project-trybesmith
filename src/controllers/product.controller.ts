import { Request, Response } from 'express';
import productService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const createProducts = async (req: Request, res: Response) => {
  const { name, price, orderId } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (!price) {
    return res.status(400).json({ message: '"price" is required' });
  }

  const product = { name, price, orderId };
  const { status, data } = await productService.createProducts(product);
  res.status(mapStatusHTTP(status)).json(data);
};

const getProducts = async (_req: Request, res: Response) => {
  const { status, data } = await productService.getProducts();
  res.status(mapStatusHTTP(status)).json(data);
};

export default {
  createProducts,
  getProducts,
};