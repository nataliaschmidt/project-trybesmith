import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { OrderResultGetAll } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

const getOrders = async (): Promise<ServiceResponse<OrderResultGetAll[]>> => {
  const orders = await OrderModel.findAll({
    include: [
      {
        model: ProductModel,
        as: 'productIds',
        attributes: ['id'],
      },
    ],
  });

  const result = orders?.map((order) => 
    ({
      id: order.dataValues.id,
      userId: order.dataValues.userId,
      productIds: order.dataValues.productIds?.map((product) => product.id),
    }));

  return { status: 'SUCCESSFUL', data: result };
};

export default {
  getOrders,
};