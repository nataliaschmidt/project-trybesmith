import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

const createProducts = async (product:ProductInputtableTypes) => {
  const newProduct = await ProductModel.create(product);
  console.log(newProduct);
  
  return { status: 'CREATED',
    data: {
      id: newProduct.dataValues.id,
      name: product.name,
      price: product.price,
    } };
};

export default {
  createProducts,
};