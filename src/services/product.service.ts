import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

const getAll = async (): Promise<ServiceResponse<ProductSequelizeModel[]>> => {
  const products = await ProductModel.findAll();
  return { status: 'OK', data: products };
};

const create = async (
  product: Omit<Product, 'id'>,
): Promise<ServiceResponse<Omit<Product, 'orderId'>>> => {
  const createdProduct = await ProductModel.create({
    name: product.name,
    price: product.price,
    orderId: product.orderId,
  });

  const { id, name, price } = createdProduct.dataValues;

  return { status: 'CREATED', data: { id, name, price } };
}; 

export default {
  getAll,
  create,
};