import { Request, Response } from 'express';
import productService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const createProducts = async (req: Request, res: Response) => {
  try {
    const { name, price, orderId } = req.body;

    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }

    if (!price) {
      return res.status(400).json({ message: '"price" is required' });
    }

    const product = { name, price, orderId };
    const { status, data } = await productService.createProducts(product);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

const getProducts = async (_req: Request, res: Response) => {
  try {
    const { status, data } = await productService.getProducts();
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export default {
  createProducts,
  getProducts,
};