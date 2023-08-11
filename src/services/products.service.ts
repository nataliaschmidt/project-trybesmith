import ProductModel,
{ ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';
import { ProductWithoutOrderId } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
import validationsInputValues from './validations/validationsInputValues';

const createProducts = async (
  product:ProductInputtableTypes,
): Promise<ServiceResponse<ProductWithoutOrderId>> => {
  let responseService: ServiceResponse<ProductWithoutOrderId>;

  const error = validationsInputValues.validateParams(product.name, product.price);

  if (error) {
    responseService = { status: 'UNPROCESSABLE_ENTITY', data: { message: error } };
    return responseService;
  }

  const newProduct = await ProductModel.create(product); 
  
  responseService = { status: 'CREATED',
    data: {
      id: newProduct.dataValues.id,
      name: product.name,
      price: product.price,
    } };

  return responseService;
};

const getProducts = async (): Promise<ServiceResponse<ProductSequelizeModel[]>> => {
  const products = await ProductModel.findAll();

  return {
    status: 'SUCCESSFUL',
    data: products,
  };
};

export default {
  createProducts,
  getProducts,
};