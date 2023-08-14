import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { CreateOrder, OrderResultGetAll } from '../types/Order';
import { ServiceResponse, ServiceResponseError } from '../types/ServiceResponse';
import db from '../database/models/index';
import validateParams from './validations/validationsInputValues';
import UserModel from '../database/models/user.model';

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

const validateOrder = async (id: number, productIds: number[])
: Promise<ServiceResponseError | null> => {
  const user = await UserModel.findOne({ where: { id } });
  
  if (!user) return { status: 'NOT_FOUND', data: { message: '"userId" not found' } };
 
  const error = validateParams.validateParamsOrder(id, productIds);
  if (error) {
    return { status: 'UNPROCESSABLE_ENTITY', data: { message: error } };
  }
  return null;
};

const createOrder = async (order: CreateOrder): Promise<ServiceResponse<CreateOrder>> => {
  let responseService: ServiceResponse<CreateOrder>;
  const { productIds, userId } = order;
  const error = await validateOrder(userId, productIds);
  if (error) {
    responseService = error;
    return responseService;
  }
  const result = await db.transaction(async (t) => {
    const newOrder = await OrderModel.create({ userId }, { transaction: t });
    await Promise.all(productIds.map((productId: number) => ProductModel.update(
      { orderId: newOrder.dataValues.id },
      { where: { id: productId }, transaction: t },
    )));
    responseService = { status: 'CREATED', data: order };
    return responseService;
  });
  return result;
};

export default {
  getOrders,
  createOrder,
};