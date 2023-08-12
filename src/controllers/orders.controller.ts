import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const getOrders = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const { status, data } = await ordersService.getOrders();
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export default {
  getOrders,
};
